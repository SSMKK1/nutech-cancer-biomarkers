import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function PatientSettingsPage() {
  const session = await auth();

  const role = (session?.user as { role?: string })?.role;

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
  });

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <main className="section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                ACCOUNT SETTINGS
              </span>

              <h1>Settings</h1>

              <p>
                Manage your account preferences and security options.
              </p>
            </div>

            <div className="opportunity-grid">

              <div className="opportunity-card">
                <h3>Profile Photo</h3>

                <p>
                  Profile image upload will be enabled in the next update.
                </p>

                <br />

                <button
                  className="primary-btn"
                  disabled
                >
                  Coming Soon
                </button>
              </div>

              <div className="opportunity-card">
                <h3>Change Password</h3>

                <p>
                  Password management will be enabled in the next update.
                </p>

                <br />

                <button
                  className="primary-btn"
                  disabled
                >
                  Coming Soon
                </button>
              </div>

              <div className="opportunity-card">
                <h3>Email Notifications</h3>

                <p>
                  Current notification preferences stored in the database.
                </p>

                <br />

                <ul>
                  <li>
                    Email Notifications:{" "}
                    {user?.emailNotifications ? "Enabled" : "Disabled"}
                  </li>

                  <li>
                    Screening Notifications:{" "}
                    {user?.screeningNotifications
                      ? "Enabled"
                      : "Disabled"}
                  </li>

                  <li>
                    Marketing Notifications:{" "}
                    {user?.marketingNotifications
                      ? "Enabled"
                      : "Disabled"}
                  </li>
                </ul>
              </div>

              <div className="opportunity-card">
                <h3>Account Security</h3>

                <p>
                  Security information currently stored for your account.
                </p>

                <br />

                <ul>
                  <li>
                    Last Login:{" "}
                    {user?.lastLoginAt
                      ? user.lastLoginAt.toLocaleString()
                      : "Not Available"}
                  </li>

                  <li>
                    Password Changed:{" "}
                    {user?.passwordChangedAt
                      ? user.passwordChangedAt.toLocaleString()
                      : "Never"}
                  </li>
                </ul>
              </div>

            </div>

            <section className="section">
              <div className="comparison-card">

                <h3>Current Account</h3>

                <ul>
                  <li>Name: {session?.user?.name}</li>
                  <li>Email: {session?.user?.email}</li>
                  <li>Role: {role}</li>
                  <li>Status: Active</li>

                  <li>
                    Profile Image:{" "}
                    {user?.image ? "Uploaded" : "Not Uploaded"}
                  </li>
                </ul>

              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}