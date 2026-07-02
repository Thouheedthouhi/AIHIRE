import { TriangleAlert } from "lucide-react";

function MissingKeywords({ keywords = [] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
          <TriangleAlert
            size={24}
            className="text-orange-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Missing Keywords
          </h2>

          <p className="text-sm text-slate-500">
            Consider adding these skills if they match your experience.
          </p>
        </div>

      </div>

      {/* Keywords */}

      <div className="mt-8 flex flex-wrap gap-3">

        {keywords.length > 0 ? (
          keywords.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-full
                border
                border-orange-200
                bg-orange-50
                px-4
                py-2
                text-sm
                font-medium
                text-orange-700
                transition
                hover:bg-orange-100
              "
            >
              {keyword}
            </span>
          ))
        ) : (
          <p className="text-slate-500">
            Great! No missing keywords detected.
          </p>
        )}

      </div>

    </div>
  );
}

export default MissingKeywords;