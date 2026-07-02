function MatchBreakdown({ breakdown }) {
  if (!breakdown) return null;

  const items = [
    ["Skills", breakdown.skills, 40],
    ["Experience", breakdown.experience, 20],
    ["Education", breakdown.education, 10],
    ["Projects", breakdown.projects, 10],
    ["Responsibilities", breakdown.responsibilities, 10],
    ["Keywords", breakdown.keywords, 10],
  ];

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Score Breakdown
      </h2>

      <div className="space-y-5">
        {items.map(([label, score, total]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between">
              <span>{label}</span>

              <span className="font-semibold">
                {score}/{total}
              </span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${(score / total) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchBreakdown;