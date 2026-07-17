import {
  Home,
  FileText,
  Mic,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "Resume",
    icon: FileText,
    path: "/upload",
  },
  {
    name: "Interview",
    icon: Mic,
    path: "/interview",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/report",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
  
];

function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 px-8 py-7">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-sm">
            AI
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              AIHire
            </h1>

            <p className="text-sm text-slate-500">
              AI Hiring Assistant
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-slate-100 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon
                    size={20}
                    className="transition-colors"
                  />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-200 p-5">
        <button
          onClick={logout}
          className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={20} />

          <span className="font-medium">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;