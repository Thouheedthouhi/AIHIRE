import { Clock3 } from "lucide-react";

function CircularTimer({
  timeLeft = 90,
  totalTime = 90,
}) {
  const percentage =
    (timeLeft / totalTime) * 100;

  let color = "text-emerald-600";

  if (timeLeft <= 30) {
    color = "text-amber-500";
  }

  if (timeLeft <= 10) {
    color = "text-red-500";
  }

  const minutes = Math.floor(
    timeLeft / 60
  );

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <Clock3 className={color} />

        <h2 className="text-xl font-bold">
          Time Remaining
        </h2>

      </div>

      <div className="flex justify-center">

        <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-[14px] border-slate-200">

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                #7c3aed ${percentage * 3.6}deg,
                #e5e7eb ${percentage * 3.6}deg
              )`,
              borderRadius: "9999px",
            }}
          />

          <div className="absolute flex h-44 w-44 flex-col items-center justify-center rounded-full bg-white">

            <span
              className={`text-5xl font-bold ${color}`}
            >
              {minutes}:{seconds}
            </span>

            <p className="mt-2 text-slate-500">
              Remaining
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CircularTimer;