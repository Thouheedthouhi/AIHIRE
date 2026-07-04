import { BrainCircuit, Briefcase, Layers3 } from "lucide-react";

function InterviewHeader({
  currentQuestion = 1,
  totalQuestions = 5,
  role = "Software Engineer",
  difficulty = "Medium",
}) {
  const difficultyColor = {
    Easy: "bg-emerald-100 text-emerald-700",
    Medium: "bg-amber-100 text-amber-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-100 p-3">
              <BrainCircuit
                size={28}
                className="text-violet-600"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                AI Mock Interview
              </h1>

              <p className="mt-1 text-slate-500">
                Answer confidently. AI evaluates your
                technical knowledge, communication and
                behavior after the interview.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3">
            <Briefcase
              size={18}
              className="text-violet-600"
            />

            <span className="font-medium">
              {role}
            </span>
          </div>

          <div
            className={`rounded-xl px-4 py-3 font-semibold ${
              difficultyColor[difficulty]
            }`}
          >
            {difficulty}
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-violet-100 px-4 py-3">
            <Layers3
              size={18}
              className="text-violet-600"
            />

            <span className="font-semibold text-violet-700">
              Question {currentQuestion} /{" "}
              {totalQuestions}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewHeader;