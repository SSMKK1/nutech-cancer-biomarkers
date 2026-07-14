import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Sidebar() {

  const session = await auth();

  const role = session?.user?.role;


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

            <Link href="/dashboard/profile">
              Profile
            </Link>

            <Link href="/dashboard/profile">
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

            <Link href="/dashboard/doctor">
              Patients
            </Link>

            <Link href="/dashboard/doctor">
              Clinical Reports
            </Link>

            <Link href="/dashboard/doctor">
              Risk Assessments
            </Link>

            <Link href="/dashboard/profile">
              Profile
            </Link>

            <Link href="/dashboard/profile">
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

            <Link href="/dashboard/lab">
              Samples
            </Link>

            <Link href="/dashboard/lab">
              Processing Queue
            </Link>

            <Link href="/dashboard/lab">
              Results
            </Link>

            <Link href="/dashboard/profile">
              Profile
            </Link>

            <Link href="/dashboard/profile">
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

            <Link href="/dashboard/admin">
              Users
            </Link>

            <Link href="/dashboard/admin">
              Doctors
            </Link>

            <Link href="/dashboard/admin">
              Laboratories
            </Link>

            <Link href="/dashboard/admin">
              Patients
            </Link>

            <Link href="/dashboard/admin">
              Partners
            </Link>

            <Link href="/dashboard/admin">
              Analytics
            </Link>

            <Link href="/dashboard/admin">
              Security
            </Link>

            <Link href="/dashboard/profile">
              Profile
            </Link>

            <Link href="/dashboard/profile">
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