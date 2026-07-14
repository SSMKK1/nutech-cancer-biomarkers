import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";


export default async function LabDashboard(){


  const session = await auth();



  const lab = await prisma.user.findUnique({

    where:{
      email: session?.user?.email || "",
    },


    include:{

      labProfile:{

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
    lab?.labProfile?.samples || [];



  const received =
    samples.length;


  const processing =
    samples.filter(
      sample =>
      sample.status === "IN_TESTING"
    ).length;



  const completed =
    samples.filter(
      sample =>
      sample.status === "COMPLETED"
    ).length;



  const pending =
    samples.filter(
      sample =>
      !sample.result
    ).length;



  return (

    <div className="dashboard-layout">


      <Sidebar />


      <div className="dashboard-main">


        <Topbar />



        <main className="section">


          <div className="container">


            <div className="section-header">

              <span className="eyebrow">
                LABORATORY PORTAL
              </span>


              <h1>
                Laboratory Dashboard
              </h1>


              <p>
                Manage SeroMark-1 samples,
                biomarker analysis and reports.
              </p>


            </div>





            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Samples Received
                </h3>

                <span>
                  {received}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  In Processing
                </h3>

                <span>
                  {processing}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Completed Tests
                </h3>

                <span>
                  {completed}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Pending Reports
                </h3>

                <span>
                  {pending}
                </span>

              </div>


            </div>





            <section className="section">


              <div className="section-header">

                <h2>
                  Sample Processing Queue
                </h2>

              </div>



              <table className="dashboard-table">


                <thead>

                  <tr>

                    <th>
                      Sample Code
                    </th>

                    <th>
                      Patient
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Result
                    </th>

                  </tr>


                </thead>




                <tbody>


                  {samples.map(sample=>(


                    <tr key={sample.id}>


                      <td>
                        {sample.sampleCode}
                      </td>


                      <td>
                        {sample.patient.user.name}
                      </td>


                      <td>
                        {sample.status}
                      </td>


                      <td>

                        {
                          sample.result
                          ?
                          sample.result.value
                          :
                          "Pending"
                        }

                      </td>


                    </tr>


                  ))}


                </tbody>


              </table>



            </section>



          </div>


        </main>


      </div>


    </div>


  );

}