import { FileText, Mic, BarChart3, ArrowRight } from "lucide-react";
import QuickActionCard from "../cards/QuickActionCard";

function QuickActions() {
  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Start your interview journey with AI-powered tools.
          </p>
        </div>

        <button className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50 lg:flex">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        <QuickActionCard
          title="Resume Analyzer"
          description="Upload your resume and receive an ATS score with personalized suggestions."
          to="/upload"
          icon={<FileText size={22} className="text-blue-600" />}
        />

        <QuickActionCard
          title="Mock Interview"
          description="Practice real interview questions and improve your confidence with AI."
          to="/interview"
          icon={<Mic size={22} className="text-blue-600" />}
        />

        <QuickActionCard
          title="AI Reports"
          description="Review your interview performance, resume analysis and overall progress."
          to="/report"
          icon={<BarChart3 size={22} className="text-blue-600" />}
        />
      </div>
    </section>
  );
}

export default QuickActions;