import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabDashboard() {
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

              <h1>Laboratory Dashboard</h1>

              <p>
                Manage sample intake, biomarker analysis,
                report validation and laboratory operations
                across the SeroMark-1 testing network.
              </p>

            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Samples Received</h3>
                <span>248</span>
              </div>

              <div className="metric-card">
                <h3>In Processing</h3>
                <span>37</span>
              </div>

              <div className="metric-card">
                <h3>Completed Tests</h3>
                <span>211</span>
              </div>

              <div className="metric-card">
                <h3>Pending Reports</h3>
                <span>12</span>
              </div>

            </div>

            <section className="section">

              <div className="section-header">
                <h2>Sample Processing Queue</h2>
              </div>

              <div className="opportunity-grid">

                <div className="opportunity-card">
                  <h3>SM-1024</h3>
                  <p>Awaiting biomarker analysis.</p>
                </div>

                <div className="opportunity-card">
                  <h3>SM-1025</h3>
                  <p>Quality control verification.</p>
                </div>

                <div className="opportunity-card">
                  <h3>SM-1026</h3>
                  <p>Report generation in progress.</p>
                </div>

                <div className="opportunity-card">
                  <h3>SM-1027</h3>
                  <p>Physician validation pending.</p>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Laboratory Performance</h2>
              </div>

              <div className="metrics-grid">

                <div className="metric-card">
                  <h3>Average Turnaround</h3>
                  <span>48 hrs</span>
                </div>

                <div className="metric-card">
                  <h3>Quality Score</h3>
                  <span>99.2%</span>
                </div>

                <div className="metric-card">
                  <h3>Validated Results</h3>
                  <span>211</span>
                </div>

                <div className="metric-card">
                  <h3>Active Technicians</h3>
                  <span>18</span>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Daily Laboratory Activity</h2>
              </div>

              <div className="steps-grid">

                <div className="step-card">
                  <div className="step-number">01</div>
                  <h3>New Samples</h3>
                  <p>42 new samples received today.</p>
                </div>

                <div className="step-card">
                  <div className="step-number">02</div>
                  <h3>Analysis Complete</h3>
                  <p>37 biomarker assessments completed.</p>
                </div>

                <div className="step-card">
                  <div className="step-number">03</div>
                  <h3>Reports Issued</h3>
                  <p>29 reports delivered to physicians.</p>
                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Quick Actions</h3>

                <div className="hero-buttons">

                  <button className="primary-btn">
                    Upload Results
                  </button>

                  <button className="secondary-dark-btn">
                    View Queue
                  </button>

                  <button className="secondary-dark-btn">
                    Generate Reports
                  </button>

                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Laboratory Notifications</h3>

                <ul>
                  <li>12 reports awaiting validation.</li>
                  <li>3 samples flagged for additional review.</li>
                  <li>Daily quality audit completed successfully.</li>
                  <li>17 new physician orders received today.</li>
                  <li>System synchronization completed.</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}
