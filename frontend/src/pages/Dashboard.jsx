import { useEffect, useState } from "react";

import DashboardLayout from "../components/dashboard/layout/DashboardLayout";

import WelcomeCard from "../components/dashboard/cards/WelcomeCard";
import StatsSection from "../components/dashboard/sections/StatsSection";
import RecentActivity from "../components/dashboard/sections/RecentActivity";
import PerformanceChart from "../components/dashboard/charts/PerformanceChart";
import { getDashboardStats } from "../services/dashboard/dashboardService";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  }

  if (!dashboard) {
    return (
      <DashboardLayout>
        <div className="text-center py-20 text-xl">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        <WelcomeCard dashboard={dashboard} />

        <StatsSection dashboard={dashboard} />

       <PerformanceChart dashboard={dashboard} />

       <RecentActivity dashboard={dashboard} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;