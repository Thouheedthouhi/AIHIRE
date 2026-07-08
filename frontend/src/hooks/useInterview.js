import { useEffect } from "react";

import {
  useInterviewContext,
  InterviewState,
} from "../context/interview/InterviewContext";

import {
  speak,
  stopSpeaking,
} from "../utils/speech";

import {
  startRecording,
  stopRecording,
} from "../utils/recorder";

import {
  startTimer,
  stopTimer,
} from "../utils/timer";

import {
  uploadInterviewAudio,
} from "../services/interview/interviewService";

export default function useInterview(role) {
  const {
  questions,
  currentIndex,
  setCurrentIndex,

  interviewState,
  setInterviewState,

  timeLeft,
  setTimeLeft,

  isSpeaking,
  setIsSpeaking,

  isRecording,
  setIsRecording,

  isSubmitting,
  setIsSubmitting,
} = useInterviewContext();

  const currentQuestion =
    questions[currentIndex] || "";

  // ---------------------------------
  // Begin Answer Phase
  // ---------------------------------

  const beginAnswerPhase = async () => {
    stopSpeaking();

    setIsSpeaking(false);

    setInterviewState(
      InterviewState.ANSWERING
    );

    try {
      await startRecording();

      setIsRecording(true);
    } catch (error) {
      console.error(
        "Recording failed:",
        error
      );
    }

    startTimer(
      90,
      (remaining) => {
        setTimeLeft(remaining);
      },
      () => {
        finishAnswer();
      }
    );
  };

  // ---------------------------------
  // Ask Question
  // ---------------------------------

  const askQuestion = () => {
    if (!currentQuestion) return;

    stopTimer();

    setInterviewState(
      InterviewState.AI_SPEAKING
    );

    setIsSpeaking(true);

    let finished = false;

    speak(currentQuestion, {
      onStart: () => {
        setIsSpeaking(true);
      },

      onEnd: async () => {
        if (finished) return;

        finished = true;

        await beginAnswerPhase();
      },

      onError: async (error) => {
        console.error(error);

        if (finished) return;

        finished = true;

        await beginAnswerPhase();
      },
    });

    // Safari fallback

    const estimatedDuration = Math.max(
      4000,
      currentQuestion.split(" ").length * 450
    );

    setTimeout(async () => {
      if (finished) return;

      finished = true;

      await beginAnswerPhase();
    }, estimatedDuration);
  };

  // ---------------------------------
  // Finish Answer
  // ---------------------------------

  const finishAnswer = async () => {
  // Prevent double-clicks
  if (isSubmitting) {
    return;
  }

  setIsSubmitting(true);

  stopSpeaking();
  stopTimer();



    let audioBlob = null;

    if (isRecording) {
      try {
        audioBlob =
          await stopRecording();

        setIsRecording(false);

        if (audioBlob) {
          const result =
            await uploadInterviewAudio({
              audioBlob,
              question: currentQuestion,
              role,
            });

          console.log(
            "Transcript:",
            result.transcript
          );

          console.log(
            "Evaluation:",
            result.evaluation
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    setInterviewState(
      InterviewState.SAVING
    );

    setTimeout(() => {
  if (
    currentIndex <
    questions.length - 1
  ) {
    setCurrentIndex((prev) => prev + 1);
  } else {
    setInterviewState(
      InterviewState.PROCESSING
    );
  }

  // Unlock after navigation
  setIsSubmitting(false);
}, 700);
  };

  // ---------------------------------
  // Replay
  // ---------------------------------

  const replayQuestion = () => {
    if (
      interviewState ===
      InterviewState.AI_SPEAKING
    ) {
      return;
    }

    askQuestion();
  };

  // ---------------------------------
  // Auto Ask
  // ---------------------------------

  useEffect(() => {
    if (
      questions.length === 0
    ) {
      return;
    }

    if (
      interviewState ===
      InterviewState.PROCESSING
    ) {
      return;
    }

    askQuestion();

    return () => {
      
      stopTimer();
    };
  }, [currentIndex, questions.length]);

  return {
  currentQuestion,

  currentIndex,

  totalQuestions:
    questions.length,

  interviewState,

  timeLeft,

  isSpeaking,

  isRecording,

  isSubmitting,

  askQuestion,

  replayQuestion,

  finishAnswer,
};
}