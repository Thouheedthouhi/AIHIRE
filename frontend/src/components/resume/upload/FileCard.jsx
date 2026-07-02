import {
  FileText,
  Trash2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function formatFileSize(bytes) {
  if (!bytes) return "0 KB";

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function FileCard({
  file,
  onAnalyze,
  onDelete,
  analyzing = false,

  activeTab = "ats",

  targetRole,
  setTargetRole,
}) {
  return (
    <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <FileText
              size={28}
              className="text-blue-600"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {file.filename}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              PDF • {formatFileSize(file.size)}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
          <CheckCircle2 size={16} />
          Uploaded
        </div>

      </div>

      {/* Target Role */}

      {activeTab === "ats" && (
        <div className="mt-8">

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Target Role
          </label>

          <select
            value={targetRole}
            onChange={(e) =>
              setTargetRole(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-slate-700
              outline-none
              transition
              focus:border-blue-500
            "
          >
            <option>Software Engineer</option>
            <option>Full Stack Developer</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>Data Scientist</option>
            <option>AI / ML Engineer</option>
            <option>DevOps Engineer</option>
          </select>

        </div>
      )}

      {/* Divider */}

      <div className="my-6 border-t border-slate-200" />

      {/* Footer */}

      <div className="flex justify-end gap-3">

        {/* Delete */}

        <button
          type="button"
          onClick={onDelete}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-4
            py-2
            text-slate-600
            transition
            hover:border-red-200
            hover:bg-red-50
            hover:text-red-600
          "
        >
          <Trash2 size={18} />
        </button>

        {/* Analyze */}

        <button
          type="button"
          disabled={analyzing}
          onClick={onAnalyze}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-2.5
            font-medium
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <Sparkles size={18} />

          {analyzing
            ? "Analyzing..."
            : activeTab === "ats"
            ? "Analyze Resume"
            : "Match Resume"}
        </button>

      </div>

    </div>
  );
}

export default FileCard;