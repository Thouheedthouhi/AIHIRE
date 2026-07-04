import DashboardLayout from "../components/dashboard/layout/DashboardLayout";
import InterviewSetup from "../components/interview/InterviewSetup";

function Interview() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl py-8">
        <InterviewSetup />
      </div>
    </DashboardLayout>
  );
}

export default Interview;