import { Clock3, Sparkles } from "lucide-react";

function RecentActivity() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest AIHire updates will appear here.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-3">
          <Clock3 size={20} className="text-slate-600" />
        </div>

      </div>

      <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-14">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <Sparkles size={28} className="text-blue-600" />
        </div>

        <h3 className="mt-6 text-lg font-semibold text-slate-900">
          No activity yet
        </h3>

        <p className="mt-3 max-w-sm text-center text-sm leading-6 text-slate-500">
          Upload your first resume or complete an AI interview.
          Your achievements and progress will appear here.
        </p>

      </div>

    </section>
  );
}

export default RecentActivity;