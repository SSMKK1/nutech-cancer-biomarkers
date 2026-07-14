import Link from "next/link";

export default function DashboardPage() {

  return (

    <main className="section">

      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            SEROMARK-1 SECURE PLATFORM
          </span>

          <h1>
            Welcome to Your Dashboard
          </h1>

          <p>
            Access your SeroMark-1 services and account features.
          </p>

        </div>


        <div className="auth-grid">


          <div className="auth-card">

            <h3>
              Patient Portal
            </h3>

            <p>
              View screening reports, results and health records.
            </p>

            <Link href="/dashboard/patient">
              Open Portal
            </Link>

          </div>



          <div className="auth-card">

            <h3>
              Doctor Portal
            </h3>

            <p>
              Review patient information and clinical reports.
            </p>

            <Link href="/dashboard/doctor">
              Open Portal
            </Link>

          </div>



          <div className="auth-card">

            <h3>
              Laboratory Portal
            </h3>

            <p>
              Manage samples and laboratory workflows.
            </p>

            <Link href="/dashboard/lab">
              Open Portal
            </Link>

          </div>



          <div className="auth-card">

            <h3>
              Administrator
            </h3>

            <p>
              Manage users and platform operations.
            </p>

            <Link href="/dashboard/admin">
              Open Portal
            </Link>

          </div>


        </div>


      </div>

    </main>

  );

}