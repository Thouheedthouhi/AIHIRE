import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 min-h-screen">

        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;