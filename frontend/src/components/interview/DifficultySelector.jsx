const options = [
  "Easy",
  "Medium",
  "Hard",
];

function DifficultySelector({
  value,
  onChange,
}) {
  return (
    <div>

      <h2 className="mb-4 text-lg font-semibold">
        Difficulty
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-2xl border p-4 font-medium transition ${
              value === option
                ? "border-violet-600 bg-violet-50 text-violet-700"
                : "border-slate-300 hover:border-violet-400"
            }`}
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}

export default DifficultySelector;