import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function PatientProfilePage() {
  const session = await auth();

  const role = (session?.user as { role?: string })?.role;

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
    include: {
      patientProfile: true,
    },
  });

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
                <strong>Name:</strong> {user?.name || "Not Set"}
              </p>

              <p>
                <strong>Email:</strong> {user?.email || "Not Set"}
              </p>

              <p>
                <strong>Role:</strong> {role}
              </p>

              <hr style={{ margin: "20px 0" }} />

              <h3>Patient Details</h3>

              <br />

              <p>
                <strong>Phone:</strong>{" "}
                {user?.patientProfile?.phone || "Not Provided"}
              </p>

              <p>
                <strong>Gender:</strong>{" "}
                {user?.patientProfile?.gender || "Not Provided"}
              </p>

              <p>
                <strong>Date of Birth:</strong>{" "}
                {user?.patientProfile?.dateOfBirth
                  ? user.patientProfile.dateOfBirth.toLocaleDateString()
                  : "Not Provided"}
              </p>

              <br />

              <div
                style={{
                  padding: "16px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <strong>Next Step:</strong>

                <p style={{ marginTop: "10px" }}>
                  Profile editing will be enabled in the next update.
                  Your patient information is now loading directly
                  from the Neon database.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}