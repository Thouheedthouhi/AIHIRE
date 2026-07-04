import { Volume2 } from "lucide-react";

function QuestionCard({
  question,
  current,
  total,
  onSpeak,
}) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
          Question {current} / {total}
        </span>

        <button
          onClick={onSpeak}
          className="rounded-xl bg-violet-100 p-3 transition hover:bg-violet-200"
        >
          <Volume2 className="h-5 w-5 text-violet-700" />
        </button>

      </div>

      <h2 className="text-2xl font-semibold leading-relaxed text-slate-800">
        {question}
      </h2>

    </div>
  );
}

export default QuestionCard;