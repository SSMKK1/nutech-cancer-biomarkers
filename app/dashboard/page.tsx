import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function LabDashboard() {
  const session = await auth();

  const lab = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
    include: {
      labProfile: {
        include: {
          samples: {
            include: {
              patient: {
                include: {
                  user: true,
                },
              },
              result: true,
            },
          },
        },
      },
    },
  });

  const samples: any[] = lab?.labProfile?.samples || [];

  const received = samples.length;

  const processing = samples.filter(
    (sample: any) => sample.status === "IN_TESTING"
  ).length;

  const completed = samples.filter(
    (sample: any) => sample.status === "COMPLETED"
  ).length;

  const pending = samples.filter(
    (sample: any) => !sample.result
  ).length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <main className="section">
          <div className="container">
            <h1>Laboratory Dashboard</h1>

            <p>Samples Received: {received}</p>
            <p>In Processing: {processing}</p>
            <p>Completed Tests: {completed}</p>
            <p>Pending Reports: {pending}</p>
          </div>
        </main>
      </div>
    </div>
  );
}