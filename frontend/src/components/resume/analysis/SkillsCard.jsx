import { Code2 } from "lucide-react";

function SkillsCard({ skills = [] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
          <Code2
            size={24}
            className="text-green-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Skills Detected
          </h2>

          <p className="text-sm text-slate-500">
            Technologies identified from your resume
          </p>
        </div>

      </div>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">

        {skills.length > 0 ? (
          skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-green-200
                bg-green-50
                px-4
                py-2
                text-sm
                font-medium
                text-green-700
                transition
                hover:bg-green-100
              "
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-slate-500">
            No skills detected.
          </p>
        )}

      </div>

    </div>
  );
}

export default SkillsCard;