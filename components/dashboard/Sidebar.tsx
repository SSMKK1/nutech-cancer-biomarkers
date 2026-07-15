import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Sidebar() {
  const session = await auth();

  const role = (session?.user as any)?.role;

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-brand">
        <h2>Nutech</h2>
        <p>SeroMark-1 Platform</p>
      </div>

      <nav className="dashboard-nav">

        {role === "PATIENT" && (
          <>
            <h4>Patient Portal</h4>

            <Link href="/dashboard/patient">
              Dashboard Overview
            </Link>

            <Link href="/dashboard/patient/reports">
              My Reports
            </Link>

            <Link href="/dashboard/patient/history">
              Screening History
            </Link>

            <Link href="/dashboard/patient/profile">
              Profile
            </Link>

            <Link href="/dashboard/patient/settings">
              Settings
            </Link>
          </>
        )}

        {role === "DOCTOR" && (
          <>
            <h4>Doctor Portal</h4>

            <Link href="/dashboard/doctor">
              Dashboard Overview
            </Link>

            <Link href="/dashboard/doctor/patients">
              Patients
            </Link>

            <Link href="/dashboard/doctor/reports">
              Clinical Reports
            </Link>

            <Link href="/dashboard/doctor/assessments">
              Risk Assessments
            </Link>

            <Link href="/dashboard/doctor/orders">
              Screening Orders
            </Link>

            <Link href="/dashboard/doctor/profile">
              Profile
            </Link>

            <Link href="/dashboard/doctor/settings">
              Settings
            </Link>
          </>
        )}

        {role === "LAB" && (
          <>
            <h4>Laboratory Portal</h4>

            <Link href="/dashboard/lab">
              Dashboard Overview
            </Link>

            <Link href="/dashboard/lab/samples">
              Samples
            </Link>

            <Link href="/dashboard/lab/queue">
              Processing Queue
            </Link>

            <Link href="/dashboard/lab/results">
              Results
            </Link>

            <Link href="/dashboard/lab/quality-control">
              Quality Control
            </Link>

            <Link href="/dashboard/lab/profile">
              Profile
            </Link>

            <Link href="/dashboard/lab/settings">
              Settings
            </Link>
          </>
        )}

        {role === "ADMIN" && (
          <>
            <h4>Administration</h4>

            <Link href="/dashboard/admin">
              Dashboard Overview
            </Link>

            <Link href="/dashboard/admin/users">
              Users
            </Link>

            <Link href="/dashboard/admin/doctors">
              Doctors
            </Link>

            <Link href="/dashboard/admin/laboratories">
              Laboratories
            </Link>

            <Link href="/dashboard/admin/patients">
              Patients
            </Link>

            <Link href="/dashboard/admin/partners">
              Partners
            </Link>

            <Link href="/dashboard/admin/analytics">
              Analytics
            </Link>

            <Link href="/dashboard/admin/security">
              Security
            </Link>

            <Link href="/dashboard/admin/settings">
              Settings
            </Link>
          </>
        )}

        <hr />

        <Link href="/">
          Return To Website
        </Link>

        <Link href="/contact">
          Contact Support
        </Link>

      </nav>
    </aside>
  );
}