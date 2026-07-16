import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function PatientTable() {
  const session = await auth();

  const doctor = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },

    include: {
      doctorProfile: {
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

  const samples: any[] =
    doctor?.doctorProfile?.samples || [];

  if (samples.length === 0) {
    return (
      <div className="comparison-card">
        <p>No patient records available.</p>
      </div>
    );
  }

  return (
    <table className="dashboard-table">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Name</th>
          <th>Sample Code</th>
          <th>Status</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        {samples.map((sample: any) => (
          <tr key={sample.id}>
            <td>{sample.patient.id}</td>

            <td>{sample.patient.user.name}</td>

            <td>{sample.sampleCode}</td>

            <td>{sample.status}</td>

            <td>
              {sample.result
                ? sample.result.value
                : "Pending"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}