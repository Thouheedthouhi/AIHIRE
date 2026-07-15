import {
  Award,
  BarChart3,
  TrendingUp,
  Trophy,
} from "lucide-react";

import StatCard from "../cards/StatCard";

function StatsSection({ dashboard }) {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Performance Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track your interview performance and
          improvement over time.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

       <StatCard
  title="Total Interviews"
  value={dashboard.totalInterviews}
  subtitle="Interviews completed"
  icon={<BarChart3 size={22} />}
  color="blue"
/>

<StatCard
  title="Average Score"
  value={`${dashboard.averageScore}/100`}
  subtitle="Across all interviews"
  icon={<TrendingUp size={22} />}
  color="green"
/>

<StatCard
  title="Highest Score"
  value={`${dashboard.highestScore}/100`}
  subtitle="Best performance"
  icon={<Trophy size={22} />}
  color="orange"
/>

<StatCard
  title="Latest Score"
  value={`${dashboard.latestScore}/100`}
  subtitle="Most recent interview"
  icon={<Award size={22} />}
  color="purple"
/>

      </div>
    </section>
  );
}

export default StatsSection;