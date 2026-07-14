import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import RequestScreeningButton from "@/components/dashboard/RequestScreeningButton";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";


export default async function PatientDashboard(){


  const session = await auth();



  const patient = await prisma.user.findUnique({

    where:{
      email: session?.user?.email || "",
    },


    include:{

      patientProfile:{

        include:{

          samples:{

            include:{

              result:true

            }

          }

        }

      }

    }


  });




  const samples =
    patient?.patientProfile?.samples || [];



  const completedTests =
    samples.filter(
      sample => sample.status === "COMPLETED"
    ).length;



  const latestResult =
    samples
    .filter(
      sample => sample.result
    )
    .at(-1)
    ?.result;



  return (

    <div className="dashboard-layout">


      <Sidebar />


      <div className="dashboard-main">


        <Topbar />



        <main className="section">


          <div className="container">



            <div className="section-header">


              <span className="eyebrow">
                PATIENT PORTAL
              </span>


              <h1>
                Patient Dashboard
              </h1>


              <p>
                Monitor your SeroMark-1 screening journey.
              </p>


            </div>





            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Tests Completed
                </h3>

                <span>
                  {completedTests}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Latest Status
                </h3>

                <span>
                  {latestResult?.interpretation || "Pending"}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Samples
                </h3>

                <span>
                  {samples.length}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Account
                </h3>

                <span>
                  Active
                </span>

              </div>


            </div>






            <section className="section">


              <div className="comparison-card">


                <h3>
                  New Screening Request
                </h3>


                <p>
                  Start your SeroMark-1 biomarker screening process.
                </p>


                <RequestScreeningButton />


              </div>


            </section>






            <section className="section">


              <div className="section-header">


                <h2>
                  Screening History
                </h2>


              </div>





              <div className="comparison-card">



                {samples.length === 0 && (

                  <p>
                    No screening records available.
                  </p>

                )}





                {samples.map(sample => (


                  <div key={sample.id}>


                    <h3>
                      {sample.sampleCode}
                    </h3>


                    <p>
                      Status: {sample.status}
                    </p>




                    {sample.result && (

                      <p>
                        Result: {sample.result.value}
                      </p>

                    )}



                    <hr />


                  </div>


                ))}


              </div>


            </section>



          </div>


        </main>


      </div>


    </div>

  );


}