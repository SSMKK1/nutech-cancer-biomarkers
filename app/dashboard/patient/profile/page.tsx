import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { auth } from "@/lib/auth";

export default async function PatientProfilePage() {

  const session = await auth();

  const role = (session?.user as any)?.role;

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <main className="section">

          <div className="container">

            <div className="section-header">

              <span className="eyebrow">
                PATIENT PROFILE
              </span>

              <h1>My Profile</h1>

              <p>
                Manage your personal information and account details.
              </p>

            </div>

            <div className="comparison-card">

              <h3>Account Information</h3>

              <br />

              <p>
                <strong>Name:</strong> {session?.user?.name}
              </p>

              <p>
                <strong>Email:</strong> {session?.user?.email}
              </p>

              <p>
                <strong>Role:</strong> {role}
              </p>

            </div>

          </div>

        </main>

      </div>

    </div>

  );

}