import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminPatientsPage() {
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
                Patient Management
              </h1>

              <p>
                Monitor registered patients, screening activity,
                health records and platform engagement.
              </p>

            </div>




            <div className="metrics-grid">


              <div className="metric-card">
                <h3>
                  Total Patients
                </h3>

                <span>
                  4,451
                </span>
              </div>



              <div className="metric-card">
                <h3>
                  Active Patients
                </h3>

                <span>
                  3,982
                </span>
              </div>




              <div className="metric-card">
                <h3>
                  Screenings Completed
                </h3>

                <span>
                  12,640
                </span>
              </div>




              <div className="metric-card">
                <h3>
                  Follow-Up Required
                </h3>

                <span>
                  186
                </span>
              </div>


            </div>







            <section className="section">


              <div className="section-header">

                <h2>
                  Patient Registry
                </h2>

              </div>





              <div className="comparison-card">


                <table className="dashboard-table">


                  <thead>

                    <tr>

                      <th>
                        Patient ID
                      </th>

                      <th>
                        Name
                      </th>

                      <th>
                        Risk Level
                      </th>

                      <th>
                        Status
                      </th>

                    </tr>

                  </thead>




                  <tbody>



                    <tr>

                      <td>
                        PT-1001
                      </td>

                      <td>
                        Eunice Odame
                      </td>

                      <td>
                        Low Risk
                      </td>

                      <td>
                        Active
                      </td>

                    </tr>





                    <tr>

                      <td>
                        PT-1002
                      </td>

                      <td>
                        John Smith
                      </td>

                      <td>
                        Moderate Risk
                      </td>

                      <td>
                        Monitoring
                      </td>

                    </tr>





                    <tr>

                      <td>
                        PT-1003
                      </td>

                      <td>
                        Michael Brown
                      </td>

                      <td>
                        High Risk
                      </td>

                      <td>
                        Physician Review
                      </td>

                    </tr>



                  </tbody>


                </table>


              </div>


            </section>







            <section className="section">


              <div className="section-header">

                <h2>
                  Patient Administration
                </h2>

              </div>





              <div className="opportunity-grid">





                <div className="opportunity-card">


                  <h3>
                    Patient Records
                  </h3>


                  <p>
                    Review patient profiles,
                    screening history and account details.
                  </p>


                  <br />


                  <button className="primary-btn">
                    View Records
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Risk Monitoring
                  </h3>


                  <p>
                    Monitor biomarker trends and
                    identify patients requiring attention.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Monitor Risks
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Account Management
                  </h3>


                  <p>
                    Manage patient accounts,
                    permissions and platform access.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Manage Accounts
                  </button>


                </div>




              </div>


            </section>







            <section className="section">


              <div className="comparison-card">


                <h3>
                  Patient Activity
                </h3>



                <ul>


                  <li>
                    42 new patient registrations today.
                  </li>


                  <li>
                    18 screening appointments scheduled.
                  </li>


                  <li>
                    7 patients require physician follow-up.
                  </li>


                  <li>
                    Latest screening data synchronized successfully.
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