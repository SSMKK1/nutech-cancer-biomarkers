import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">

              <span className="eyebrow">
                ADMINISTRATOR PORTAL
              </span>

              <h1>Platform Administration</h1>

              <p>
                Manage users, healthcare providers,
                laboratories, screening operations,
                partnerships and platform performance.
              </p>

            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Total Users</h3>
                <span>4,825</span>
              </div>

              <div className="metric-card">
                <h3>Doctors</h3>
                <span>326</span>
              </div>

              <div className="metric-card">
                <h3>Laboratories</h3>
                <span>48</span>
              </div>

              <div className="metric-card">
                <h3>Patients</h3>
                <span>4,451</span>
              </div>

            </div>

            <section className="section">

              <div className="section-header">
                <h2>Platform Performance</h2>
              </div>

              <div className="metrics-grid">

                <div className="metric-card">
                  <h3>Tests Processed</h3>
                  <span>12,640</span>
                </div>

                <div className="metric-card">
                  <h3>Reports Generated</h3>
                  <span>12,105</span>
                </div>

                <div className="metric-card">
                  <h3>Partner Hospitals</h3>
                  <span>92</span>
                </div>

                <div className="metric-card">
                  <h3>Network Uptime</h3>
                  <span>99.9%</span>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Growth Metrics</h2>
              </div>

              <div className="metrics-grid">

                <div className="metric-card">
                  <h3>Monthly Registrations</h3>
                  <span>+542</span>
                </div>

                <div className="metric-card">
                  <h3>New Facilities</h3>
                  <span>12</span>
                </div>

                <div className="metric-card">
                  <h3>Screenings This Month</h3>
                  <span>1,894</span>
                </div>

                <div className="metric-card">
                  <h3>Growth Rate</h3>
                  <span>18%</span>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Management Modules</h2>
              </div>

              <div className="opportunity-grid">

                <div className="opportunity-card">
                  <h3>User Management</h3>
                  <p>
                    Manage patients, physicians,
                    laboratories and administrators.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Partnerships</h3>
                  <p>
                    Approve hospitals, clinics and
                    diagnostic laboratory partners.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Contact Inquiries</h3>
                  <p>
                    Review support requests and
                    partnership submissions.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Analytics</h3>
                  <p>
                    Monitor screening activity and
                    platform growth metrics.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Facility Management</h3>
                  <p>
                    Maintain approved hospitals,
                    clinics and testing centers.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Security Monitoring</h3>
                  <p>
                    Review access logs and
                    platform security activity.
                  </p>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Recent Activity</h3>

                <ul>
                  <li>42 new patient registrations today.</li>
                  <li>7 physician accounts awaiting approval.</li>
                  <li>3 laboratory applications pending review.</li>
                  <li>18 contact inquiries received this week.</li>
                  <li>Platform backup completed successfully.</li>
                  <li>Monthly analytics report generated.</li>
                </ul>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Quick Actions</h3>

                <div className="hero-buttons">

                  <button className="primary-btn">
                    Manage Users
                  </button>

                  <button className="secondary-dark-btn">
                    View Analytics
                  </button>

                  <button className="secondary-dark-btn">
                    Review Partners
                  </button>

                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>System Status</h3>

                <ul>
                  <li>Application Services: Operational</li>
                  <li>Database Services: Operational</li>
                  <li>Laboratory Integration: Operational</li>
                  <li>Email Notification Service: Operational</li>
                  <li>Security Monitoring: Active</li>
                  <li>Cloud Backups: Successful</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}
