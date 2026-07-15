import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  const role = (session?.user as any)?.role;

  if (!role) {
    redirect("/login");
  }

  switch (role) {
    case "PATIENT":
      redirect("/dashboard/patient");

    case "DOCTOR":
      redirect("/dashboard/doctor");

    case "LAB":
      redirect("/dashboard/lab");

    case "ADMIN":
      redirect("/dashboard/admin");

    default:
      redirect("/login");
  }
}