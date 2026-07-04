import { useEffect, useRef } from "react";

import {
  useInterviewContext,
  InterviewState,
} from "../context/interview/InterviewContext";

import {
  speak,
  stopSpeaking,
} from "../utils/speech";

export default function useInterview() {
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
  } = useInterviewContext();

  const timerRef = useRef(null);

  const currentQuestion =
    questions[currentIndex] || "";

  // --------------------------
  // Start Timer
  // --------------------------

  const startTimer = () => {
    clearInterval(timerRef.current);

    setTimeLeft(90);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);

          finishAnswer();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  // --------------------------
  // Stop Timer
  // --------------------------

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  // --------------------------
  // Start Recording
  // --------------------------

  const startRecording = () => {
    setIsRecording(true);

    console.log("🎤 Recording Started");
  };

  // --------------------------
  // Stop Recording
  // --------------------------

  const stopRecording = () => {
    setIsRecording(false);

    console.log("🛑 Recording Stopped");
  };

  // --------------------------
  // Ask Question
  // --------------------------

  const askQuestion = () => {
    if (!currentQuestion) return;

    setInterviewState(
      InterviewState.AI_SPEAKING
    );

    setIsSpeaking(true);

    speak(currentQuestion, {
      onEnd: () => {
        setIsSpeaking(false);

        setInterviewState(
          InterviewState.ANSWERING
        );

        startRecording();

        startTimer();
      },
    });
  };

  // --------------------------
  // Finish Current Answer
  // --------------------------

  const finishAnswer = () => {
    stopTimer();

    stopRecording();

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
    }, 800);
  };

  // --------------------------
  // Replay Question
  // --------------------------

  const replayQuestion = () => {
    stopSpeaking();

    askQuestion();
  };

  // --------------------------
  // Question Change
  // --------------------------

  useEffect(() => {
    if (
      questions.length &&
      interviewState !==
        InterviewState.PROCESSING
    ) {
      askQuestion();
    }

    return () => {
      stopSpeaking();

      clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  return {
    currentQuestion,

    currentIndex,

    totalQuestions:
      questions.length,

    interviewState,

    isSpeaking,

    isRecording,

    timeLeft,

    askQuestion,

    replayQuestion,

    finishAnswer,
  };
}