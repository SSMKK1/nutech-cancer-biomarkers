import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

import { prisma } from "@/lib/prisma";


export default async function AdminDashboard(){


  const totalUsers =
    await prisma.user.count();



  const doctors =
    await prisma.user.count({

      where:{
        role:"DOCTOR"
      }

    });



  const laboratories =
    await prisma.user.count({

      where:{
        role:"LAB"
      }

    });



  const patients =
    await prisma.user.count({

      where:{
        role:"PATIENT"
      }

    });



  const samples =
    await prisma.sample.count();



  const completedTests =
    await prisma.result.count();



  return (

    <div className="dashboard-layout">


      <Sidebar />


      <div className="dashboard-main">


        <Topbar />



        <main className="section">


          <div className="container">


            <div className="section-header">


              <span className="eyebrow">
                ADMINISTRATION
              </span>


              <h1>
                Admin Dashboard
              </h1>


              <p>
                Monitor users, laboratories,
                doctors, patients and SeroMark-1
                platform activity.
              </p>


            </div>





            <div className="metrics-grid">


              <div className="metric-card">

                <h3>
                  Total Users
                </h3>

                <span>
                  {totalUsers}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Doctors
                </h3>

                <span>
                  {doctors}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Laboratories
                </h3>

                <span>
                  {laboratories}
                </span>

              </div>




              <div className="metric-card">

                <h3>
                  Patients
                </h3>

                <span>
                  {patients}
                </span>

              </div>


            </div>





            <section className="section">


              <div className="metrics-grid">


                <div className="metric-card">

                  <h3>
                    Total Samples
                  </h3>

                  <span>
                    {samples}
                  </span>

                </div>




                <div className="metric-card">

                  <h3>
                    Completed Results
                  </h3>

                  <span>
                    {completedTests}
                  </span>

                </div>


              </div>


            </section>



          </div>


        </main>


      </div>


    </div>

  );

}