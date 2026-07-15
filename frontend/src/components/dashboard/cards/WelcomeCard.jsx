import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function WelcomeCard({ dashboard }) {
  const { user } = useAuth();

  const firstName =
    user?.name?.split(" ")[0] || "Candidate";

  const totalInterviews =
    dashboard?.totalInterviews || 0;

  const progress = Math.min(
    totalInterviews,
    5
  );

  const progressWidth = `${
    (progress / 5) * 100
  }%`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Background */}
      <div className="absolute right-0 top-0 h-full w-[420px] bg-gradient-to-l from-blue-50 via-slate-50 to-transparent" />

      <div className="relative flex flex-col gap-10 p-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600">
            👋 Great to see you again
          </p>

          <h2 className="mt-3 text-5xl font-bold leading-tight tracking-tight text-slate-900">
            Welcome back,
            <br />
            {firstName}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Upload your resume, practice interviews,
            receive AI-powered feedback and track
            your improvement—all in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/upload"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-700"
            >
              <Upload size={18} />
              Upload Resume
            </Link>

            <Link
              to="/interview"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Start Interview
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:block w-[330px]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-lg font-semibold text-slate-900">
              🚀 Your Journey
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Complete these milestones to unlock
              your AI insights.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-green-500"
                />
                <span className="text-slate-700">
                  Account Created
                </span>
              </div>

              <div className="flex items-center gap-3">
                {progress >= 1 ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />
                ) : (
                  <Circle
                    size={20}
                    className="text-slate-300"
                  />
                )}

                <span className="text-slate-700">
                  Upload Resume
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Circle
                  size={20}
                  className="text-slate-300"
                />

                <span className="text-slate-600">
                  Complete Profile
                </span>
              </div>

              <div className="flex items-center gap-3">
                {totalInterviews > 0 ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />
                ) : (
                  <Circle
                    size={20}
                    className="text-slate-300"
                  />
                )}

                <span className="text-slate-700">
                  Take First Interview
                </span>
              </div>

              <div className="flex items-center gap-3">
                {totalInterviews > 0 ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />
                ) : (
                  <Circle
                    size={20}
                    className="text-slate-300"
                  />
                )}

                <span className="text-slate-700">
                  View AI Report
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Progress
                </span>

                <span className="font-semibold text-slate-900">
                  {progress} / 5
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: progressWidth,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;