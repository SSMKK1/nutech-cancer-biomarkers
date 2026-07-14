import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import PatientTable from "@/components/dashboard/PatientTable";

export default function DoctorPatientsPage() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">

              <span className="eyebrow">
                DOCTOR PORTAL
              </span>

              <h1>Patient Management</h1>

              <p>
                View patient records, monitor screening
                progress and review risk assessments.
              </p>

            </div>

            <div className="metrics-grid">

              <div className="metric-card">
                <h3>Total Patients</h3>
                <span>126</span>
              </div>

              <div className="metric-card">
                <h3>New Patients</h3>
                <span>18</span>
              </div>

              <div className="metric-card">
                <h3>Pending Reviews</h3>
                <span>14</span>
              </div>

              <div className="metric-card">
                <h3>High Risk Cases</h3>
                <span>13</span>
              </div>

            </div>

            <section className="section">

              <div className="section-header">
                <h2>Patient Directory</h2>
              </div>

              <PatientTable />

            </section>

            <section className="section">

              <div className="comparison-card">

                <h3>Clinical Notes</h3>

                <ul>
                  <li>2 patients require urgent consultation.</li>
                  <li>8 laboratory reports awaiting review.</li>
                  <li>5 follow-up appointments scheduled.</li>
                  <li>All patient records synchronized successfully.</li>
                </ul>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}