import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function DashboardPage(){

  const session = await auth();


  if(!session?.user?.role){

    redirect("/login");

  }



  switch(session.user.role){


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