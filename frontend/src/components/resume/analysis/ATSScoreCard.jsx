import { Award } from "lucide-react";

function getScoreColor(score) {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-500";
  return "text-red-500";
}

function getProgressColor(score) {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-red-500";
}

function ATSScoreCard({ score }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
          <Award
            size={24}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            ATS Score
          </h2>

          <p className="text-sm text-slate-500">
            Resume compatibility score
          </p>
        </div>

      </div>

      <div className="mt-8 flex items-end gap-3">

        <span
          className={`text-6xl font-bold ${getScoreColor(score)}`}
        >
          {score}
        </span>

        <span className="pb-2 text-2xl font-semibold text-slate-500">
          /100
        </span>

      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className={`h-full rounded-full transition-all duration-500 ${getProgressColor(score)}`}
          style={{ width: `${score}%` }}
        />

      </div>

      <p className="mt-5 text-sm text-slate-500">
        {score >= 80
          ? "Excellent resume. Only minor improvements are recommended."
          : score >= 60
          ? "Good resume, but there is room for improvement."
          : "Your resume needs significant optimization."}
      </p>

    </div>
  );
}

export default ATSScoreCard;