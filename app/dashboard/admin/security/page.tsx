import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminSecurityPage() {
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
                Security Management
              </h1>


              <p>
                Monitor platform security, access activity,
                user sessions and system protection.
              </p>


            </div>







            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Active Sessions
                </h3>

                <span>
                  742
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Security Alerts
                </h3>

                <span>
                  3
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Failed Login Attempts
                </h3>

                <span>
                  18
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  System Protection
                </h3>

                <span>
                  Active
                </span>

              </div>


            </div>








            <section className="section">


              <div className="section-header">

                <h2>
                  Security Status
                </h2>


              </div>





              <div className="comparison-card">


                <ul>

                  <li>
                    Authentication service: Operational
                  </li>

                  <li>
                    Database security: Protected
                  </li>

                  <li>
                    User access monitoring: Active
                  </li>

                  <li>
                    Encryption services: Enabled
                  </li>

                  <li>
                    Backup protection: Successful
                  </li>

                </ul>


              </div>


            </section>








            <section className="section">


              <div className="section-header">

                <h2>
                  Recent Security Activity
                </h2>


              </div>





              <div className="comparison-card">


                <table className="dashboard-table">


                  <thead>

                    <tr>

                      <th>
                        Activity
                      </th>

                      <th>
                        User Type
                      </th>

                      <th>
                        Time
                      </th>

                      <th>
                        Status
                      </th>


                    </tr>


                  </thead>




                  <tbody>


                    <tr>

                      <td>
                        Successful Login
                      </td>

                      <td>
                        Doctor
                      </td>

                      <td>
                        Today 09:42
                      </td>

                      <td>
                        Approved
                      </td>

                    </tr>




                    <tr>

                      <td>
                        Password Update
                      </td>

                      <td>
                        Patient
                      </td>

                      <td>
                        Today 11:15
                      </td>

                      <td>
                        Completed
                      </td>

                    </tr>




                    <tr>

                      <td>
                        Access Review
                      </td>

                      <td>
                        Administrator
                      </td>

                      <td>
                        Today 13:30
                      </td>

                      <td>
                        Completed
                      </td>

                    </tr>


                  </tbody>


                </table>


              </div>


            </section>








            <section className="section">


              <div className="section-header">

                <h2>
                  Security Controls
                </h2>


              </div>





              <div className="opportunity-grid">





                <div className="opportunity-card">


                  <h3>
                    User Access Control
                  </h3>


                  <p>
                    Manage roles, permissions and
                    account privileges.
                  </p>


                  <br />

                  <button className="primary-btn">
                    Manage Permissions
                  </button>


                </div>








                <div className="opportunity-card">


                  <h3>
                    Audit Logs
                  </h3>


                  <p>
                    Review system activities and
                    security records.
                  </p>


                  <br />

                  <button className="primary-btn">
                    View Logs
                  </button>


                </div>








                <div className="opportunity-card">


                  <h3>
                    Security Settings
                  </h3>


                  <p>
                    Configure platform protection
                    and authentication settings.
                  </p>


                  <br />

                  <button className="primary-btn">
                    Configure Security
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