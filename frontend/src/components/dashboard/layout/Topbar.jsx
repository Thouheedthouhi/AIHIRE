import { Bell, Search } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

function Topbar() {
  const { user } = useAuth();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-10">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Prepare smarter. Interview better.
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track your progress and become interview ready.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white"
          />
        </div>

        {/* Notification */}

        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-100">
          <Bell size={20} />
        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-semibold text-white">
            {initials}
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-900">
              {user?.name}
            </p>

            <p className="text-xs text-slate-500">
              Candidate
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;