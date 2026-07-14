import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabSamplesPage() {
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

              <h1>Sample Management</h1>

              <p>
                Manage incoming samples, monitor processing
                progress and track specimen activity across
                the SeroMark-1 testing network.
              </p>

            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Total Samples</h3>
                <span>248</span>
              </div>

              <div className="metric-card">
                <h3>Received Today</h3>
                <span>42</span>
              </div>

              <div className="metric-card">
                <h3>In Processing</h3>
                <span>37</span>
              </div>

              <div className="metric-card">
                <h3>Completed</h3>
                <span>211</span>
              </div>

            </div>

            <section className="section">

              <div className="comparison-card">

                <h3>Recent Samples</h3>

                <ul>
                  <li>SM-1024 — Awaiting biomarker analysis</li>
                  <li>SM-1025 — Quality control verification</li>
                  <li>SM-1026 — Report generation in progress</li>
                  <li>SM-1027 — Physician validation pending</li>
                  <li>SM-1028 — Sample received and registered</li>
                  <li>SM-1029 — Awaiting laboratory assignment</li>
                </ul>

              </div>

            </section>

            <section className="section">

              <div className="section-header">
                <h2>Sample Categories</h2>
              </div>

              <div className="opportunity-grid">

                <div className="opportunity-card">

                  <h3>Registered Samples</h3>

                  <p>
                    Newly received samples awaiting
                    processing and validation.
                  </p>

                </div>

                <div className="opportunity-card">

                  <h3>Active Testing</h3>

                  <p>
                    Samples currently undergoing
                    biomarker analysis.
                  </p>

                </div>

                <div className="opportunity-card">

                  <h3>Completed Tests</h3>

                  <p>
                    Samples with finalized laboratory
                    results ready for review.
                  </p>

                </div>

              </div>

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Laboratory Notes</h3>

                <ul>
                  <li>42 new samples registered today.</li>
                  <li>37 samples currently undergoing analysis.</li>
                  <li>12 reports awaiting final validation.</li>
                  <li>Daily laboratory audit completed successfully.</li>
                  <li>All equipment operating within normal parameters.</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}