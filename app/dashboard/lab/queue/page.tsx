import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabQueuePage() {
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

              <h1>Processing Queue</h1>

              <p>
                Monitor active laboratory workflows,
                testing progress and sample processing
                activities.
              </p>

            </div>


            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Waiting Samples</h3>
                <span>24</span>
              </div>

              <div className="metric-card">
                <h3>Testing Active</h3>
                <span>37</span>
              </div>

              <div className="metric-card">
                <h3>Quality Review</h3>
                <span>8</span>
              </div>

              <div className="metric-card">
                <h3>Completed Today</h3>
                <span>42</span>
              </div>

            </div>


            <section className="section">

              <div className="section-header">
                <h2>Current Processing Queue</h2>
              </div>


              <div className="opportunity-grid">


                <div className="opportunity-card">

                  <h3>
                    SM-2041
                  </h3>

                  <p>
                    Status: Biomarker extraction in progress.
                  </p>

                  <p>
                    Priority: Normal
                  </p>

                </div>



                <div className="opportunity-card">

                  <h3>
                    SM-2042
                  </h3>

                  <p>
                    Status: SeroMark-1 analysis running.
                  </p>

                  <p>
                    Priority: High
                  </p>

                </div>



                <div className="opportunity-card">

                  <h3>
                    SM-2043
                  </h3>

                  <p>
                    Status: Quality verification.
                  </p>

                  <p>
                    Priority: Normal
                  </p>

                </div>



                <div className="opportunity-card">

                  <h3>
                    SM-2044
                  </h3>

                  <p>
                    Status: Awaiting technician review.
                  </p>

                  <p>
                    Priority: Urgent
                  </p>

                </div>


              </div>

            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Processing Workflow
                </h3>


                <ul>

                  <li>
                    Sample registration completed.
                  </li>

                  <li>
                    Biomarker extraction underway.
                  </li>

                  <li>
                    Laboratory quality checks performed.
                  </li>

                  <li>
                    Results prepared for physician review.
                  </li>

                  <li>
                    Final reports released securely.
                  </li>

                </ul>

              </div>

            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Quick Actions
                </h3>


                <div className="hero-buttons">

                  <button className="primary-btn">
                    Start Analysis
                  </button>


                  <button className="secondary-dark-btn">
                    Update Status
                  </button>


                  <button className="secondary-dark-btn">
                    Review Queue
                  </button>


                </div>

              </div>

            </section>


          </div>

        </main>

      </div>

    </div>
  );
}