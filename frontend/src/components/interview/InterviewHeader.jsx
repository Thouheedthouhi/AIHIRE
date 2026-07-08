import {
  BrainCircuit,
  Briefcase,
  Layers3,
  Gauge,
} from "lucide-react";

function InterviewHeader({
  currentQuestion = 1,
  totalQuestions = 5,
  role = "Software Engineer",
  difficulty = "Medium",
  timer = 90,
}) {
  const difficultyColor = {
    Easy: "bg-emerald-100 text-emerald-700",
    Medium: "bg-amber-100 text-amber-700",
    Hard: "bg-red-100 text-red-700",
  };

  const timerColor =
    timer <= 10
      ? "bg-red-100 text-red-600"
      : timer <= 30
      ? "bg-amber-100 text-amber-600"
      : "bg-violet-100 text-violet-700";

  const minutes = String(
    Math.floor(timer / 60)
  ).padStart(2, "0");

  const seconds = String(
    timer % 60
  ).padStart(2, "0");

  return (
    <div className="flex h-20 items-center justify-between rounded-3xl border border-slate-200 bg-white px-8 shadow-lg">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
          <BrainCircuit
            className="text-violet-600"
            size={24}
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            AI Mock Interview
          </h1>

          <p className="text-sm text-slate-500">
            Live AI Interview Session
          </p>
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">

          <Briefcase
            size={17}
            className="text-violet-600"
          />

          <span className="font-medium">
            {role}
          </span>

        </div>

        <div
          className={`rounded-xl px-4 py-2 font-semibold ${difficultyColor[difficulty]}`}
        >
          {difficulty}
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-violet-100 px-4 py-2">

          <Layers3
            size={17}
            className="text-violet-600"
          />

          <span className="font-semibold text-violet-700">
            {currentQuestion}/{totalQuestions}
          </span>

        </div>

        <div
          className={`flex items-center gap-2 rounded-xl px-5 py-2 ${timerColor}`}
        >

          <Gauge size={18} />

          <span className="text-lg font-bold">
            {minutes}:{seconds}
          </span>

        </div>

      </div>

    </div>
  );
}

export default InterviewHeader;