const interviewTypes = [
  "Mixed",
  "Technical",
  "HR",
];

function InterviewTypeCard({
  value,
  onChange,
}) {
  return (
    <div>

      <h2 className="mb-4 text-lg font-semibold">
        Interview Type
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {interviewTypes.map((type) => (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={`rounded-2xl border p-4 font-medium transition ${
              value === type
                ? "border-violet-600 bg-violet-50 text-violet-700"
                : "border-slate-300 hover:border-violet-400"
            }`}
          >
            {type}
          </button>
        ))}

      </div>

    </div>
  );
}

export default InterviewTypeCard;