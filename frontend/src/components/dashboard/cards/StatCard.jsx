function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;