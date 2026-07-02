import { Code2 } from "lucide-react";

function SkillsCard({
  title = "Skills Detected",
  subtitle = "Technologies identified from your resume",
  skills = [],
  color = "green",
}) {
  const colors = {
    green: {
      iconBg: "bg-green-50",
      icon: "text-green-600",
      badgeBg: "bg-green-50",
      badgeBorder: "border-green-200",
      badgeText: "text-green-700",
      badgeHover: "hover:bg-green-100",
      countBg: "bg-green-50",
      countText: "text-green-700",
    },

    blue: {
      iconBg: "bg-blue-50",
      icon: "text-blue-600",
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-200",
      badgeText: "text-blue-700",
      badgeHover: "hover:bg-blue-100",
      countBg: "bg-blue-50",
      countText: "text-blue-700",
    },

    purple: {
      iconBg: "bg-purple-50",
      icon: "text-purple-600",
      badgeBg: "bg-purple-50",
      badgeBorder: "border-purple-200",
      badgeText: "text-purple-700",
      badgeHover: "hover:bg-purple-100",
      countBg: "bg-purple-50",
      countText: "text-purple-700",
    },
  };

  const theme = colors[color];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg}`}
          >
            <Code2
              size={24}
              className={theme.icon}
            />
          </div>

          <div>

            <h2 className="text-xl font-semibold text-slate-900">
              {title}
            </h2>

            <p className="text-sm text-slate-500">
              {subtitle}
            </p>

          </div>

        </div>

        <div
          className={`rounded-full px-4 py-2 text-sm font-semibold ${theme.countBg} ${theme.countText}`}
        >
          {skills.length} Skills
        </div>

      </div>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">

        {skills.length > 0 ? (
          skills.map((skill) => (
            <span
              key={skill}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${theme.badgeBg}
                ${theme.badgeBorder}
                ${theme.badgeText}
                ${theme.badgeHover}
              `}
            >
              {skill}
            </span>
          ))
        ) : (
          <div className="w-full rounded-2xl bg-slate-50 p-6 text-center text-slate-500">
            No skills found.
          </div>
        )}

      </div>

    </div>
  );
}

export default SkillsCard;