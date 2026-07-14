import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import PatientTable from "@/components/dashboard/PatientTable";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";


export default async function DoctorDashboard(){


  const session = await auth();



  const doctor = await prisma.user.findUnique({

    where:{
      email:session?.user?.email || "",
    },


    include:{

      doctorProfile:{

        include:{

          samples:{

            include:{

              patient:{
                include:{
                  user:true
                }
              },

              result:true

            }

          }

        }

      }

    }

  });





  const samples =
    doctor?.doctorProfile?.samples || [];



  const totalPatients =
    new Set(
      samples.map(
        sample=>sample.patientId
      )
    ).size;



  const pendingReviews =
    samples.filter(
      sample =>
      sample.status !== "COMPLETED"
    ).length;



  const reportsSigned =
    samples.filter(
      sample =>
      sample.result !== null
    ).length;



  const activeOrders =
    samples.length;



  return (

    <div className="dashboard-layout">


      <Sidebar />


      <div className="dashboard-main">


        <Topbar />



        <main className="section">


          <div className="container">


            <div className="section-header">


              <span className="eyebrow">
                DOCTOR PORTAL
              </span>


              <h1>
                Doctor Dashboard
              </h1>


              <p>
                Manage patient screening and biomarker reports.
              </p>


            </div>





            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Total Patients
                </h3>

                <span>
                  {totalPatients}
                </span>

              </div>



              <div className="metric-card">

                <h3>
                  Pending Reviews
                </h3>

                <span>
                  {pendingReviews}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Reports Signed
                </h3>

                <span>
                  {reportsSigned}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Active Orders
                </h3>

                <span>
                  {activeOrders}
                </span>

              </div>



            </div>





            <section className="section">


              <div className="section-header">

                <h2>
                  Patient Screening Queue
                </h2>

              </div>




              <PatientTable />



            </section>





            <section className="section">


              <div className="comparison-card">


                <h3>
                  Recent Clinical Activity
                </h3>


                <ul>

                  <li>
                    {pendingReviews} assessments awaiting review.
                  </li>

                  <li>
                    {reportsSigned} completed reports available.
                  </li>

                  <li>
                    {activeOrders} active screening records.
                  </li>

                </ul>


              </div>


            </section>




          </div>


        </main>


      </div>


    </div>


  );


}