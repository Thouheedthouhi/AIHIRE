import { useEffect, useState } from "react";

function InterviewTimer({
  seconds = 90,
  onComplete,
}) {
  const [timeLeft, setTimeLeft] =
    useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);

  const secondsDisplay = String(
    timeLeft % 60
  ).padStart(2, "0");

  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">

      <h3 className="text-lg font-semibold">
        Time Remaining
      </h3>

      <p className="mt-3 text-5xl font-bold text-violet-600">
        {minutes}:{secondsDisplay}
      </p>

    </div>
  );
}

export default InterviewTimer;