import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { auth } from "@/lib/auth";

export default async function PatientSettingsPage() {

  const session = await auth();

  const role = (session?.user as any)?.role;

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
                  Upload and manage your profile picture.
                </p>

                <br />

                <button className="primary-btn">
                  Upload Photo
                </button>

              </div>

              <div className="opportunity-card">

                <h3>Change Password</h3>

                <p>
                  Update your account password regularly.
                </p>

                <br />

                <button className="primary-btn">
                  Change Password
                </button>

              </div>

              <div className="opportunity-card">

                <h3>Email Notifications</h3>

                <p>
                  Manage report and screening notifications.
                </p>

                <br />

                <button className="primary-btn">
                  Configure
                </button>

              </div>

              <div className="opportunity-card">

                <h3>Account Security</h3>

                <p>
                  Review account activity and security settings.
                </p>

                <br />

                <button className="primary-btn">
                  Security Center
                </button>

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
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>

  );

}