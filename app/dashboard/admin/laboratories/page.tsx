import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminLaboratoriesPage() {
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
                Laboratory Management
              </h1>


              <p>
                Monitor laboratory partners, verification status,
                testing operations and network performance.
              </p>

            </div>




            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Registered Laboratories
                </h3>

                <span>
                  48
                </span>

              </div>



              <div className="metric-card">

                <h3>
                  Verified Laboratories
                </h3>

                <span>
                  42
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Pending Approval
                </h3>

                <span>
                  6
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Tests Processed
                </h3>

                <span>
                  12,640
                </span>

              </div>


            </div>






            <section className="section">


              <div className="section-header">

                <h2>
                  Laboratory Registry
                </h2>

              </div>




              <div className="comparison-card">


                <table className="dashboard-table">


                  <thead>

                    <tr>

                      <th>
                        Laboratory ID
                      </th>

                      <th>
                        Laboratory Name
                      </th>

                      <th>
                        Location
                      </th>

                      <th>
                        Status
                      </th>


                    </tr>


                  </thead>




                  <tbody>


                    <tr>

                      <td>
                        LAB-1001
                      </td>

                      <td>
                        Sero Diagnostic Centre
                      </td>

                      <td>
                        Accra
                      </td>

                      <td>
                        Verified
                      </td>

                    </tr>




                    <tr>

                      <td>
                        LAB-1002
                      </td>

                      <td>
                        BioScan Laboratory
                      </td>

                      <td>
                        Kumasi
                      </td>

                      <td>
                        Verified
                      </td>

                    </tr>




                    <tr>

                      <td>
                        LAB-1003
                      </td>

                      <td>
                        Advanced Health Diagnostics
                      </td>

                      <td>
                        Tamale
                      </td>

                      <td>
                        Pending Review
                      </td>

                    </tr>


                  </tbody>


                </table>


              </div>


            </section>







            <section className="section">


              <div className="section-header">

                <h2>
                  Laboratory Administration
                </h2>


              </div>




              <div className="opportunity-grid">





                <div className="opportunity-card">


                  <h3>
                    Approve Laboratories
                  </h3>


                  <p>
                    Review laboratory applications,
                    certificates and operational requirements.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Review Applications
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Quality Monitoring
                  </h3>


                  <p>
                    Monitor testing quality,
                    turnaround time and performance.
                  </p>


                  <br />


                  <button className="primary-btn">
                    View Performance
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Laboratory Access
                  </h3>


                  <p>
                    Manage laboratory accounts,
                    permissions and platform access.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Manage Access
                  </button>


                </div>




              </div>


            </section>







            <section className="section">


              <div className="comparison-card">


                <h3>
                  Laboratory Activity
                </h3>



                <ul>


                  <li>
                    6 laboratories awaiting verification.
                  </li>


                  <li>
                    248 samples received across network today.
                  </li>


                  <li>
                    Laboratory quality review completed.
                  </li>


                  <li>
                    System synchronization successful.
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