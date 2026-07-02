import { FileText, Mic, UserCheck } from "lucide-react";
import StatCard from "../cards/StatCard";

function StatsSection() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Your Progress
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete these milestones to unlock AI insights.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Resume"
          value="Not Uploaded"
          subtitle="Upload your first resume"
          icon={<FileText size={22} />}
        />

        <StatCard
          title="Interview"
          value="Not Attempted"
          subtitle="Start your first interview"
          icon={<Mic size={22} />}
        />

        <StatCard
          title="Profile"
          value="20%"
          subtitle="Complete your profile"
          icon={<UserCheck size={22} />}
        />
      </div>
    </section>
  );
}

export default StatsSection;