import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminDoctorsPage() {
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
                Doctor Management
              </h1>

              <p>
                Review, approve and manage registered
                healthcare professionals on the SeroMark-1 platform.
              </p>

            </div>



            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Registered Doctors
                </h3>

                <span>
                  326
                </span>

              </div>



              <div className="metric-card">

                <h3>
                  Approved Doctors
                </h3>

                <span>
                  302
                </span>

              </div>



              <div className="metric-card">

                <h3>
                  Pending Approval
                </h3>

                <span>
                  24
                </span>

              </div>



              <div className="metric-card">

                <h3>
                  Active Today
                </h3>

                <span>
                  187
                </span>

              </div>


            </div>




            <section className="section">


              <div className="section-header">

                <h2>
                  Doctor Registry
                </h2>

              </div>




              <div className="comparison-card">


                <table className="dashboard-table">


                  <thead>

                    <tr>

                      <th>
                        Doctor ID
                      </th>

                      <th>
                        Name
                      </th>

                      <th>
                        Specialization
                      </th>

                      <th>
                        Status
                      </th>

                    </tr>


                  </thead>




                  <tbody>


                    <tr>

                      <td>
                        DR-1001
                      </td>

                      <td>
                        Dr. Michael Adams
                      </td>

                      <td>
                        Urology
                      </td>

                      <td>
                        Approved
                      </td>

                    </tr>




                    <tr>

                      <td>
                        DR-1002
                      </td>

                      <td>
                        Dr. Sarah Williams
                      </td>

                      <td>
                        Oncology
                      </td>

                      <td>
                        Approved
                      </td>

                    </tr>




                    <tr>

                      <td>
                        DR-1003
                      </td>

                      <td>
                        Dr. James Brown
                      </td>

                      <td>
                        General Medicine
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
                  Doctor Administration
                </h2>

              </div>




              <div className="opportunity-grid">



                <div className="opportunity-card">

                  <h3>
                    Approve Doctors
                  </h3>

                  <p>
                    Verify medical credentials and
                    approve healthcare provider access.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Review Applications
                  </button>

                </div>





                <div className="opportunity-card">

                  <h3>
                    Doctor Verification
                  </h3>

                  <p>
                    Check licenses, hospitals and
                    professional information.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Verify Records
                  </button>

                </div>





                <div className="opportunity-card">

                  <h3>
                    Access Management
                  </h3>

                  <p>
                    Control doctor permissions and
                    platform access levels.
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
                  Doctor Activity
                </h3>



                <ul>

                  <li>
                    24 doctors awaiting approval.
                  </li>

                  <li>
                    52 clinical reports signed this week.
                  </li>

                  <li>
                    18 new physician registrations received.
                  </li>

                  <li>
                    Doctor verification audit completed.
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