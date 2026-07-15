import { Clock3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function RecentActivity({ dashboard }) {
  const interviews =
    dashboard?.recentInterviews || [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Interviews
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest interview performance.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-3">
          <Clock3
            size={20}
            className="text-slate-600"
          />
        </div>
      </div>

      {interviews.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-14">

          <h3 className="text-lg font-semibold text-slate-900">
            No interviews yet
          </h3>

          <p className="mt-3 text-center text-sm text-slate-500">
            Complete your first interview to
            start tracking your progress.
          </p>

        </div>
      ) : (
        <div className="mt-8 space-y-4">

          {interviews.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.role}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {new Date(
                    item.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  {item.overallScore}
                </p>

                <p className="text-xs text-slate-500">
                  Overall Score
                </p>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link
              to="/history"
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
            >
              View Interview History
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      )}
    </section>
  );
}

export default RecentActivity;