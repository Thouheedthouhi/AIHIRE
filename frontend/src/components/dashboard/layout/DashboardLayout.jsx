import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  const location = useLocation();

  const isInterview =
    location.pathname === "/interview/session";

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="ml-72 min-h-screen">

        {/* Hide Topbar during interview */}

        {!isInterview && <Topbar />}

        <main
          className={
            isInterview
              ? "h-screen overflow-hidden p-4"
              : "p-8"
          }
        >
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;