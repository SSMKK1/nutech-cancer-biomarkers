import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="dashboard-sidebar">

      <div className="dashboard-brand">
        <h2>Nutech</h2>
        <p>SeroMark-1 Platform</p>
      </div>

      <nav className="dashboard-nav">

        <h4>Patient</h4>

        <Link href="/dashboard/patient">
          Dashboard Overview
        </Link>

        <Link href="/dashboard/patient">
          My Reports
        </Link>

        <Link href="/dashboard/patient">
          Screening History
        </Link>

        <Link href="/dashboard/patient">
          Profile
        </Link>

        <h4>Doctor</h4>

        <Link href="/dashboard/doctor">
          Dashboard Overview
        </Link>

        <Link href="/dashboard/doctor">
          Patients
        </Link>

        <Link href="/dashboard/doctor">
          Clinical Reports
        </Link>

        <Link href="/dashboard/doctor">
          Risk Assessments
        </Link>

        <h4>Laboratory</h4>

        <Link href="/dashboard/lab">
          Dashboard Overview
        </Link>

        <Link href="/dashboard/lab">
          Samples
        </Link>

        <Link href="/dashboard/lab">
          Processing Queue
        </Link>

        <Link href="/dashboard/lab">
          Results
        </Link>

        <h4>Administration</h4>

        <Link href="/dashboard/admin">
          Dashboard Overview
        </Link>

        <Link href="/dashboard/admin">
          Users
        </Link>

        <Link href="/dashboard/admin">
          Partners
        </Link>

        <Link href="/dashboard/admin">
          Analytics
        </Link>

        <hr />

        <Link href="/">
          Return To Website
        </Link>

        <Link href="/contact">
          Contact Support
        </Link>

        <Link href="/login">
          Logout
        </Link>

      </nav>

    </aside>
  );
}
