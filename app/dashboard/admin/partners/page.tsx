import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminPartnersPage() {
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
                Partner Management
              </h1>


              <p>
                Manage hospitals, clinics, healthcare partners
                and SeroMark-1 network collaborations.
              </p>


            </div>






            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Total Partners
                </h3>

                <span>
                  92
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Approved Partners
                </h3>

                <span>
                  78
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Pending Requests
                </h3>

                <span>
                  14
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Active Facilities
                </h3>

                <span>
                  65
                </span>

              </div>



            </div>








            <section className="section">


              <div className="section-header">

                <h2>
                  Partner Registry
                </h2>


              </div>





              <div className="comparison-card">



                <table className="dashboard-table">


                  <thead>


                    <tr>

                      <th>
                        Partner ID
                      </th>


                      <th>
                        Organization
                      </th>


                      <th>
                        Type
                      </th>


                      <th>
                        Status
                      </th>


                    </tr>


                  </thead>





                  <tbody>



                    <tr>

                      <td>
                        PR-1001
                      </td>


                      <td>
                        Sero Health Centre
                      </td>


                      <td>
                        Hospital
                      </td>


                      <td>
                        Approved
                      </td>


                    </tr>





                    <tr>

                      <td>
                        PR-1002
                      </td>


                      <td>
                        Advanced Cancer Clinic
                      </td>


                      <td>
                        Clinic
                      </td>


                      <td>
                        Approved
                      </td>


                    </tr>





                    <tr>

                      <td>
                        PR-1003
                      </td>


                      <td>
                        Regional Medical Facility
                      </td>


                      <td>
                        Healthcare Partner
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
                  Partner Administration
                </h2>


              </div>





              <div className="opportunity-grid">






                <div className="opportunity-card">


                  <h3>
                    Approve Partners
                  </h3>


                  <p>
                    Review partnership applications,
                    documents and organization details.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Review Applications
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Facility Management
                  </h3>


                  <p>
                    Manage hospitals, clinics and
                    screening locations.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Manage Facilities
                  </button>


                </div>







                <div className="opportunity-card">


                  <h3>
                    Partnership Analytics
                  </h3>


                  <p>
                    Track partner activity,
                    referrals and screening contribution.
                  </p>


                  <br />


                  <button className="primary-btn">
                    View Analytics
                  </button>


                </div>




              </div>


            </section>








            <section className="section">


              <div className="comparison-card">


                <h3>
                  Partner Activity
                </h3>




                <ul>


                  <li>
                    14 partnership requests awaiting review.
                  </li>


                  <li>
                    5 new healthcare facilities added this month.
                  </li>


                  <li>
                    Partner network performance report generated.
                  </li>


                  <li>
                    All approved partners synchronized successfully.
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