import {
  BrainCircuit,
  SquarePen,
  Check,
} from "lucide-react";

function InterviewModeSelector({
  value,
  onChange,
}) {
  const modes = [
    {
      id: "ai",
      title: "AI Generated Interview",
      description:
        "Generate personalized interview questions using Gemini AI based on your selected role and difficulty.",
      icon: BrainCircuit,
      color:
        "from-violet-500 to-fuchsia-500",
    },
    {
      id: "custom",
      title: "Custom Interview",
      description:
        "Practice your own interview questions by entering them manually.",
      icon: SquarePen,
      color:
        "from-sky-500 to-cyan-500",
    },
  ];

  return (
    <div>

      <h2 className="mb-2 text-2xl font-bold text-slate-900">
        Choose Interview Mode
      </h2>

      <p className="mb-8 text-slate-500">
        Select how you'd like to practice your interview.
      </p>

      <div className="grid gap-6 md:grid-cols-2">

        {modes.map((mode) => {
          const Icon = mode.icon;

          const selected =
            value === mode.id;

          return (
            <button
              key={mode.id}
              onClick={() =>
                onChange(mode.id)
              }
              className={`relative overflow-hidden rounded-3xl border p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected
                  ? "border-violet-500 shadow-xl ring-2 ring-violet-200"
                  : "border-slate-200 bg-white"
              }`}
            >

              {selected && (
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600">

                  <Check
                    size={18}
                    className="text-white"
                  />

                </div>
              )}

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${mode.color}`}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {mode.title}
              </h3>

              <p className="leading-7 text-slate-500">
                {mode.description}
              </p>

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default InterviewModeSelector;