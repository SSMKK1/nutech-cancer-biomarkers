import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminAnalyticsPage() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">


            <div className="section-header">

              <span className="eyebrow">
                ADMINISTRATION PORTAL
              </span>


              <h1>
                Platform Analytics
              </h1>


              <p>
                Monitor SeroMark-1 performance,
                healthcare network activity and growth trends.
              </p>


            </div>






            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Total Screenings
                </h3>

                <span>
                  12,640
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Monthly Growth
                </h3>

                <span>
                  18%
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Active Users
                </h3>

                <span>
                  4,825
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Network Uptime
                </h3>

                <span>
                  99.9%
                </span>

              </div>


            </div>








            <section className="section">


              <div className="section-header">

                <h2>
                  Screening Performance
                </h2>


              </div>




              <div className="metrics-grid">



                <div className="metric-card">

                  <h3>
                    Low Risk Results
                  </h3>

                  <span>
                    8,420
                  </span>

                </div>





                <div className="metric-card">

                  <h3>
                    Moderate Risk Results
                  </h3>

                  <span>
                    2,940
                  </span>

                </div>





                <div className="metric-card">

                  <h3>
                    High Risk Results
                  </h3>

                  <span>
                    1,280
                  </span>

                </div>





                <div className="metric-card">

                  <h3>
                    Reports Generated
                  </h3>

                  <span>
                    12,105
                  </span>

                </div>



              </div>


            </section>








            <section className="section">


              <div className="section-header">

                <h2>
                  Growth Analytics
                </h2>


              </div>





              <div className="opportunity-grid">





                <div className="opportunity-card">


                  <h3>
                    Patient Growth
                  </h3>


                  <p>
                    Patient registrations continue to increase
                    across the SeroMark-1 network.
                  </p>


                  <br />


                  <strong>
                    +542 New Patients
                  </strong>


                </div>








                <div className="opportunity-card">


                  <h3>
                    Healthcare Network
                  </h3>


                  <p>
                    Monitor expansion of doctors,
                    laboratories and partner facilities.
                  </p>


                  <br />


                  <strong>
                    466 Providers
                  </strong>


                </div>








                <div className="opportunity-card">


                  <h3>
                    Testing Activity
                  </h3>


                  <p>
                    Track laboratory processing,
                    reports and clinical reviews.
                  </p>


                  <br />


                  <strong>
                    1,894 Monthly Tests
                  </strong>


                </div>




              </div>


            </section>








            <section className="section">


              <div className="comparison-card">


                <h3>
                  Analytics Summary
                </h3>




                <ul>


                  <li>
                    Screening volume increased by 18% this month.
                  </li>


                  <li>
                    Laboratory turnaround performance remains stable.
                  </li>


                  <li>
                    Patient engagement has improved.
                  </li>


                  <li>
                    Partner network continues expanding.
                  </li>


                  <li>
                    Clinical reporting system operating normally.
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