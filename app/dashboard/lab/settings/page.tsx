import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabSettingsPage() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">

              <span className="eyebrow">
                LABORATORY PORTAL
              </span>

              <h1>Laboratory Settings</h1>

              <p>
                Manage account preferences, security controls
                and laboratory platform configurations.
              </p>

            </div>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Account Settings
                </h3>


                <ul>

                  <li>
                    Laboratory account status: Active
                  </li>

                  <li>
                    Partner verification: Completed
                  </li>

                  <li>
                    Notification service: Enabled
                  </li>

                  <li>
                    Two-factor authentication: Recommended
                  </li>

                </ul>


              </div>

            </section>



            <section className="section">

              <div className="opportunity-grid">


                <div className="opportunity-card">

                  <h3>
                    Profile Management
                  </h3>

                  <p>
                    Update laboratory details,
                    contact information and documents.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Edit Profile
                  </button>

                </div>



                <div className="opportunity-card">

                  <h3>
                    Security
                  </h3>

                  <p>
                    Manage passwords, access sessions
                    and account protection.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Security Settings
                  </button>

                </div>



                <div className="opportunity-card">

                  <h3>
                    Notifications
                  </h3>

                  <p>
                    Control alerts for samples,
                    reports and system updates.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Manage Alerts
                  </button>

                </div>


              </div>

            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  System Preferences
                </h3>


                <ul>

                  <li>
                    Automatic report synchronization enabled.
                  </li>

                  <li>
                    Sample processing alerts enabled.
                  </li>

                  <li>
                    Physician communication enabled.
                  </li>

                  <li>
                    Laboratory activity tracking enabled.
                  </li>

                </ul>


              </div>


            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Danger Zone
                </h3>


                <p>
                  Contact SeroMark-1 administration before
                  making changes that affect laboratory access.
                </p>


                <br />


                <button className="secondary-dark-btn">
                  Request Account Review
                </button>


              </div>

            </section>


          </div>

        </main>

      </div>

    </div>
  );
}