import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import PatientTable from "@/components/dashboard/PatientTable";

export default function DoctorDashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">
              <span className="eyebrow">
                DOCTOR PORTAL
              </span>

              <h1>Doctor Dashboard</h1>

              <p>
                Manage patient screenings, review biomarker
                reports and support clinical decision-making.
              </p>
            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Total Patients</h3>
                <span>126</span>
              </div>

              <div className="metric-card">
                <h3>Pending Reviews</h3>
                <span>14</span>
              </div>

              <div className="metric-card">
                <h3>Reports Signed</h3>
                <span>52</span>
              </div>

              <div className="metric-card">
                <h3>Active Orders</h3>
                <span>31</span>
              </div>

            </div>

            <section className="section">

              <div className="section-header">
                <h2>Clinical Performance</h2>
              </div>

              <div className="metrics-grid">

                <div className="metric-card">
                  <h3>Low Risk</h3>
                  <span>82</span>
                </div>

                <div className="metric-card">
                  <h3>Moderate Risk</h3>
                  <span>31</span>
                </div>

                <div className="metric-card">
                  <h3>High Risk</h3>
                  <span>13</span>
                </div>

                <div className="metric-card">
                  <h3>Follow-Ups</h3>
                  <span>27</span>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Patient Screening Queue</h2>
              </div>

              <PatientTable />

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Recent Activity</h2>
              </div>

              <div className="opportunity-grid">

                <div className="opportunity-card">
                  <h3>New Report</h3>

                  <p>
                    8 new laboratory reports available
                    for physician review.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Patient Follow-Up</h3>

                  <p>
                    4 patients require scheduled
                    follow-up consultation.
                  </p>
                </div>

                <div className="opportunity-card">
                  <h3>Clinical Alert</h3>

                  <p>
                    2 high-risk assessments require
                    immediate review.
                  </p>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Quick Actions</h3>

                <div className="hero-buttons">

                  <button className="primary-btn">
                    Create Test Order
                  </button>

                  <button className="secondary-dark-btn">
                    View Reports
                  </button>

                  <button className="secondary-dark-btn">
                    Contact Laboratory
                  </button>

                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Notifications</h3>

                <ul>
                  <li>14 patient assessments awaiting review.</li>
                  <li>2 high-risk results flagged for priority attention.</li>
                  <li>Laboratory synchronization completed successfully.</li>
                  <li>Weekly physician activity report available.</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}
