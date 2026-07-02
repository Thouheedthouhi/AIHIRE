import { Briefcase } from "lucide-react";

function JobDescriptionCard({
  value,
  onChange,
  onAnalyze,
  loading,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
          <Briefcase
            size={24}
            className="text-indigo-600"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Job Description
          </h2>

          <p className="text-sm text-slate-500">
            Paste the job description to compare your resume against the role.
          </p>

        </div>

      </div>

      {/* Text Area */}

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the complete job description here..."
        rows={10}
        className="
          mt-6
          w-full
          rounded-2xl
          border
          border-slate-200
          p-4
          text-sm
          outline-none
          transition
          focus:border-blue-500
        "
      />

      <div className="mt-3 flex items-center justify-between">

        <p className="text-sm text-slate-500">
          {value.length} characters
        </p>

        <button
          onClick={onAnalyze}
          disabled={loading || !value.trim()}
          className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading ? "Analyzing..." : "Analyze Match"}
        </button>

      </div>

    </div>
  );
}

export default JobDescriptionCard;