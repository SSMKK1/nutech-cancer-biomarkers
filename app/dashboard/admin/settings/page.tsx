import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function AdminSettingsPage() {
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
                Platform Settings
              </h1>


              <p>
                Configure SeroMark-1 platform preferences,
                organization details and system controls.
              </p>


            </div>







            <section className="section">


              <div className="section-header">

                <h2>
                  Organization Settings
                </h2>


              </div>





              <div className="opportunity-grid">





                <div className="opportunity-card">

                  <h3>
                    Company Information
                  </h3>


                  <p>
                    Manage organization name,
                    contact information and platform identity.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Edit Information
                  </button>


                </div>







                <div className="opportunity-card">

                  <h3>
                    Partner Configuration
                  </h3>


                  <p>
                    Configure healthcare network,
                    laboratory and partner settings.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Manage Partners
                  </button>


                </div>







                <div className="opportunity-card">

                  <h3>
                    Platform Preferences
                  </h3>


                  <p>
                    Control dashboard behaviour,
                    notifications and system preferences.
                  </p>


                  <br />


                  <button className="primary-btn">
                    Update Preferences
                  </button>


                </div>




              </div>


            </section>








            <section className="section">


              <div className="section-header">

                <h2>
                  Notification Settings
                </h2>


              </div>





              <div className="comparison-card">


                <ul>

                  <li>
                    Email notifications: Enabled
                  </li>

                  <li>
                    Security alerts: Enabled
                  </li>

                  <li>
                    Laboratory updates: Enabled
                  </li>

                  <li>
                    Partner approval alerts: Enabled
                  </li>

                  <li>
                    System reports: Weekly
                  </li>


                </ul>


              </div>


            </section>








            <section className="section">


              <div className="section-header">

                <h2>
                  Access Management
                </h2>


              </div>





              <div className="metrics-grid">



                <div className="metric-card">

                  <h3>
                    User Roles
                  </h3>

                  <span>
                    4
                  </span>

                </div>




                <div className="metric-card">

                  <h3>
                    Administrators
                  </h3>

                  <span>
                    12
                  </span>

                </div>




                <div className="metric-card">

                  <h3>
                    Doctors
                  </h3>

                  <span>
                    326
                  </span>

                </div>




                <div className="metric-card">

                  <h3>
                    Laboratories
                  </h3>

                  <span>
                    48
                  </span>

                </div>



              </div>


            </section>








            <section className="section">


              <div className="comparison-card">


                <h3>
                  System Configuration
                </h3>



                <ul>


                  <li>
                    Database connection: Active
                  </li>


                  <li>
                    Authentication service: Operational
                  </li>


                  <li>
                    Notification service: Running
                  </li>


                  <li>
                    Backup system: Protected
                  </li>


                  <li>
                    Platform updates: Current
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