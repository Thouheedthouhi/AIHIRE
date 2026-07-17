import { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboard/layout/DashboardLayout";
import { getProfile } from "../services/profile/profileService";
import { deleteAccount } from "../services/profile/accountService";
function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <DashboardLayout>
        <div className="p-10">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-8 text-4xl font-bold text-slate-900">
          My Profile
        </h1>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex flex-col items-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
              {profile.name?.charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              {profile.name}
            </h2>

            <p className="text-slate-500">
              AIHire Candidate
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm font-medium text-slate-500">
                Full Name
              </label>

              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                {profile.name}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-500">
                Email
              </label>

              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                {profile.email}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-500">
                Phone Number
              </label>

              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                {profile.phone || "Not Added"}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-500">
                College
              </label>

              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                {profile.college || "Not Added"}
              </div>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4">

            <button
              onClick={() =>
                alert("Change Password page coming next.")
              }
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Change Password
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("aihire_user");
                localStorage.removeItem("aihire_token");
                sessionStorage.clear();

                window.location.replace("/login");
              }}
              className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-900"
            >
              Logout
            </button>

            <button
              onClick={async () => {
                const ok = window.confirm(
                  "Delete your AIHire account permanently?"
                );

                if (!ok) return;

                try {
                  const user = JSON.parse(
                    localStorage.getItem("aihire_user")
                  );

                  await deleteAccount(user.id);

                  localStorage.removeItem("aihire_user");
                  localStorage.removeItem("aihire_token");
                  sessionStorage.clear();

                  window.location.replace("/signup");

                } catch (err) {
                  console.error(err);
                  alert("Unable to delete account.");
                }
              }}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              Delete Account
            </button>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Profile;