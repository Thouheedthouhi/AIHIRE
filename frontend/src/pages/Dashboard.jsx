import DashboardLayout from "../components/dashboard/layout/DashboardLayout";

import WelcomeCard from "../components/dashboard/cards/WelcomeCard";

import StatsSection from "../components/dashboard/sections/StatsSection";
import QuickActions from "../components/dashboard/sections/QuickActions";
import RecentActivity from "../components/dashboard/sections/RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Hero */}
        <WelcomeCard />

        {/* Statistics */}
        <StatsSection />

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Activity */}
        <RecentActivity />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;