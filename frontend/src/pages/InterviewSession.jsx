import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuestionCard from "../components/interview/QuestionCard";
import WebcamPreview from "../components/interview/WebcamPreview";
import InterviewTimer from "../components/interview/InterviewTimer";
import InterviewProgress from "../components/interview/InterviewProgress";

function InterviewSession() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/interview");
    return null;
  }

  const questions = state.questions;

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  // Speak every question automatically
  useEffect(() => {
    if (!currentQuestion) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      currentQuestion
    );

    utterance.rate = 1;

    speechSynthesis.speak(utterance);
  }, [currentQuestion]);

  const handleNext = () => {
    speechSynthesis.cancel();

    if (currentIndex === questions.length - 1) {
      navigate("/report");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="mx-auto max-w-7xl p-8">

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="space-y-6">

          <QuestionCard
            question={currentQuestion}
            current={currentIndex + 1}
            total={questions.length}
            onSpeak={() => {
              speechSynthesis.cancel();

              speechSynthesis.speak(
                new SpeechSynthesisUtterance(
                  currentQuestion
                )
              );
            }}
          />

          <InterviewProgress
            current={currentIndex + 1}
            total={questions.length}
          />

          <button
            onClick={handleNext}
            className="w-full rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white"
          >
            Finish Answer →
          </button>

        </div>

        <div className="space-y-6">

          <WebcamPreview />

          <InterviewTimer
            seconds={90}
            onComplete={handleNext}
          />

        </div>

      </div>

    </div>
  );
}

export default InterviewSession;