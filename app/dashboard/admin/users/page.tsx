import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminUsersPage() {
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

              <h1>User Management</h1>

              <p>
                Manage SeroMark-1 platform users,
                account approvals, roles and access permissions.
              </p>

            </div>



            <div className="metrics-grid">


              <div className="metric-card">
                <h3>Total Users</h3>
                <span>4,825</span>
              </div>


              <div className="metric-card">
                <h3>Patients</h3>
                <span>4,451</span>
              </div>


              <div className="metric-card">
                <h3>Doctors</h3>
                <span>326</span>
              </div>


              <div className="metric-card">
                <h3>Laboratories</h3>
                <span>48</span>
              </div>


            </div>




            <section className="section">

              <div className="section-header">

                <h2>
                  Registered Users
                </h2>

              </div>



              <div className="comparison-card">


                <table className="dashboard-table">

                  <thead>

                    <tr>

                      <th>
                        User ID
                      </th>

                      <th>
                        Name
                      </th>

                      <th>
                        Role
                      </th>

                      <th>
                        Status
                      </th>

                    </tr>

                  </thead>


                  <tbody>


                    <tr>

                      <td>
                        US-1001
                      </td>

                      <td>
                        Eunice Odame
                      </td>

                      <td>
                        Patient
                      </td>

                      <td>
                        Active
                      </td>

                    </tr>



                    <tr>

                      <td>
                        US-1002
                      </td>

                      <td>
                        Dr. Michael Adams
                      </td>

                      <td>
                        Doctor
                      </td>

                      <td>
                        Approved
                      </td>

                    </tr>




                    <tr>

                      <td>
                        US-1003
                      </td>

                      <td>
                        Sero Diagnostic Lab
                      </td>

                      <td>
                        Laboratory
                      </td>

                      <td>
                        Verified
                      </td>

                    </tr>



                    <tr>

                      <td>
                        US-1004
                      </td>

                      <td>
                        Ama Health Centre
                      </td>

                      <td>
                        Partner
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
                  User Actions
                </h2>

              </div>



              <div className="opportunity-grid">



                <div className="opportunity-card">

                  <h3>
                    Create User
                  </h3>

                  <p>
                    Register new administrators,
                    doctors, laboratories or patients.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Add User
                  </button>

                </div>




                <div className="opportunity-card">

                  <h3>
                    Account Approval
                  </h3>

                  <p>
                    Review pending healthcare provider
                    registrations.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Review Requests
                  </button>

                </div>




                <div className="opportunity-card">

                  <h3>
                    Access Control
                  </h3>

                  <p>
                    Manage user roles and platform permissions.
                  </p>

                  <br />

                  <button className="primary-btn">
                    Manage Roles
                  </button>

                </div>



              </div>


            </section>





            <section className="section">


              <div className="comparison-card">


                <h3>
                  Recent User Activity
                </h3>


                <ul>

                  <li>
                    New patient account registered today.
                  </li>

                  <li>
                    Two doctors awaiting verification.
                  </li>

                  <li>
                    Laboratory partner approved.
                  </li>

                  <li>
                    Security permissions updated.
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