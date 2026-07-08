import { Trash2 } from "lucide-react";

function QuestionInputCard({
  index,
  value,
  onChange,
  onDelete,
  canDelete,
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-700">
        {index + 1}
      </div>

      <div className="flex-1">

        <label className="mb-2 block font-semibold text-slate-700">
          Question {index + 1}
        </label>

        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your interview question..."
          className="w-full resize-none rounded-xl border border-slate-300 p-4 outline-none transition focus:border-violet-500"
        />

      </div>

      {canDelete && (
        <button
          onClick={onDelete}
          className="mt-8 rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
        >
          <Trash2 size={18} />
        </button>
      )}

    </div>
  );
}

export default QuestionInputCard;