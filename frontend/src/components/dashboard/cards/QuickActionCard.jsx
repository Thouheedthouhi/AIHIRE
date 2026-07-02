import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function QuickActionCard({
  title,
  description,
  icon,
  to,
}) {
  return (
    <Link
      to={to}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium">
        Continue

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default QuickActionCard;