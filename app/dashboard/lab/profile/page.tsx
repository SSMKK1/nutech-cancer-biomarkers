import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function LabProfilePage() {
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

              <h1>Laboratory Profile</h1>

              <p>
                Manage laboratory information, certification
                details and operational contact information.
              </p>

            </div>


            <section className="section">

              <div className="comparison-card">

                <h3>
                  Laboratory Information
                </h3>


                <ul>

                  <li>
                    Laboratory Name: SeroMark Diagnostic Centre
                  </li>

                  <li>
                    Registration ID: LAB-SM-00482
                  </li>

                  <li>
                    Location: Accra, Ghana
                  </li>

                  <li>
                    Contact Email: laboratory@seromark.com
                  </li>

                  <li>
                    Status: Approved Laboratory Partner
                  </li>

                </ul>


              </div>

            </section>



            <section className="section">

              <div className="metrics-grid">


                <div className="metric-card">

                  <h3>
                    Tests Completed
                  </h3>

                  <span>
                    2,450
                  </span>

                </div>



                <div className="metric-card">

                  <h3>
                    Quality Rating
                  </h3>

                  <span>
                    99.2%
                  </span>

                </div>



                <div className="metric-card">

                  <h3>
                    Active Staff
                  </h3>

                  <span>
                    18
                  </span>

                </div>



                <div className="metric-card">

                  <h3>
                    Partner Status
                  </h3>

                  <span>
                    Verified
                  </span>

                </div>


              </div>

            </section>



            <section className="section">

              <div className="comparison-card">


                <h3>
                  Certification & Compliance
                </h3>


                <ul>

                  <li>
                    Laboratory accreditation verified.
                  </li>

                  <li>
                    Quality control procedures active.
                  </li>

                  <li>
                    Data security requirements satisfied.
                  </li>

                  <li>
                    SeroMark-1 testing standards maintained.
                  </li>

                </ul>


              </div>


            </section>



            <section className="section">

              <div className="comparison-card">

                <h3>
                  Account Actions
                </h3>


                <div className="hero-buttons">

                  <button className="primary-btn">
                    Update Profile
                  </button>


                  <button className="secondary-dark-btn">
                    Upload Documents
                  </button>


                  <button className="secondary-dark-btn">
                    Contact Support
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