import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabResultsPage() {
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

              <h1>Laboratory Results</h1>

              <p>
                Review completed biomarker analyses,
                validate laboratory findings and securely
                deliver reports to healthcare providers.
              </p>

            </div>


            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Results Generated</h3>
                <span>211</span>
              </div>


              <div className="metric-card">
                <h3>Awaiting Validation</h3>
                <span>12</span>
              </div>


              <div className="metric-card">
                <h3>Released Reports</h3>
                <span>199</span>
              </div>


              <div className="metric-card">
                <h3>Accuracy Score</h3>
                <span>99.2%</span>
              </div>

            </div>



            <section className="section">

              <div className="section-header">
                <h2>Recent Test Results</h2>
              </div>


              <div className="comparison-card">

                <ul>

                  <li>
                    SM-1024 — Biomarker assessment completed.
                  </li>

                  <li>
                    SM-1025 — Awaiting laboratory approval.
                  </li>

                  <li>
                    SM-1026 — Report sent to physician.
                  </li>

                  <li>
                    SM-1027 — Additional review required.
                  </li>

                  <li>
                    SM-1028 — Final result archived.
                  </li>

                </ul>

              </div>

            </section>



            <section className="section">

              <div className="section-header">

                <h2>
                  Biomarker Analysis Summary
                </h2>

              </div>


              <div className="metrics-grid">


                <div className="metric-card">

                  <h3>
                    PSA Analysis
                  </h3>

                  <span>
                    Completed
                  </span>

                </div>


                <div className="metric-card">

                  <h3>
                    PHI Evaluation
                  </h3>

                  <span>
                    Completed
                  </span>

                </div>


                <div className="metric-card">

                  <h3>
                    Risk Calculation
                  </h3>

                  <span>
                    Verified
                  </span>

                </div>


                <div className="metric-card">

                  <h3>
                    Physician Review
                  </h3>

                  <span>
                    Pending
                  </span>

                </div>


              </div>


            </section>



            <section className="section">

              <div className="comparison-card">


                <h3>
                  Quick Actions
                </h3>


                <div className="hero-buttons">


                  <button className="primary-btn">
                    Upload Result
                  </button>


                  <button className="secondary-dark-btn">
                    Validate Reports
                  </button>


                  <button className="secondary-dark-btn">
                    Export Data
                  </button>


                </div>


              </div>

            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Laboratory Notifications
                </h3>


                <ul>

                  <li>
                    12 results require validation.
                  </li>

                  <li>
                    5 physician reports delivered successfully.
                  </li>

                  <li>
                    Laboratory quality control completed.
                  </li>

                  <li>
                    Secure data synchronization completed.
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