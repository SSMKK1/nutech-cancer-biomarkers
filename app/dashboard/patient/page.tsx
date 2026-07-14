import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function PatientDashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">
              <span className="eyebrow">
                PATIENT PORTAL
              </span>

              <h1>Patient Dashboard</h1>

              <p>
                View screening history, monitor risk trends,
                access reports and manage your healthcare journey.
              </p>
            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Current Risk Index</h3>
                <span>0.18</span>
              </div>

              <div className="metric-card">
                <h3>Risk Status</h3>
                <span>Low Risk</span>
              </div>

              <div className="metric-card">
                <h3>Tests Completed</h3>
                <span>3</span>
              </div>

              <div className="metric-card">
                <h3>Physician Review</h3>
                <span>Completed</span>
              </div>

            </div>

            <section className="section">

              <div className="section-header">
                <h2>Latest Screening Summary</h2>
              </div>

              <div className="comparison-card">

                <p>
                  Your most recent SeroMark-1 assessment
                  indicates a low-risk profile based on
                  current biomarker evaluation.
                </p>

                <br />

                <div className="metrics-grid">

                  <div className="metric-card">
                    <h3>PSA</h3>
                    <span>2.1 ng/mL</span>
                  </div>

                  <div className="metric-card">
                    <h3>PHI</h3>
                    <span>24.6</span>
                  </div>

                  <div className="metric-card">
                    <h3>Biomarker Score</h3>
                    <span>18%</span>
                  </div>

                  <div className="metric-card">
                    <h3>Confidence</h3>
                    <span>96.4%</span>
                  </div>

                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Screening Timeline</h2>
              </div>

              <div className="timeline-grid">

                <div className="step-card">
                  <div className="step-number">1</div>

                  <h3>January 2025</h3>

                  <p>
                    Initial screening completed.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">2</div>

                  <h3>July 2025</h3>

                  <p>
                    Follow-up assessment completed.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-number">3</div>

                  <h3>Current</h3>

                  <p>
                    Routine monitoring recommended.
                  </p>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Quick Actions</h2>
              </div>

              <div className="opportunity-grid">

                <div className="opportunity-card">
                  <h3>Download Report</h3>

                  <p>
                    Access your latest screening report.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Download PDF
                  </button>
                </div>

                <div className="opportunity-card">
                  <h3>Find A Location</h3>

                  <p>
                    Locate a nearby screening facility.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Search Locations
                  </button>
                </div>

                <div className="opportunity-card">
                  <h3>Contact Physician</h3>

                  <p>
                    Discuss your results with a provider.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Contact
                  </button>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Notifications</h3>

                <ul>
                  <li>Latest report available for review.</li>
                  <li>Routine re-screening recommended in 12 months.</li>
                  <li>No outstanding clinical alerts.</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}