function InterviewProgress({
  current,
  total,
}) {
  const percentage = (current / total) * 100;

  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">
        <span>
          Progress
        </span>

        <span>
          {current}/{total}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-violet-600 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}

export default InterviewProgress;