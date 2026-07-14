import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";



export async function POST(request: Request){


  const session = await auth();



  if(!session?.user?.email){

    return NextResponse.json(
      {
        message:"Unauthorized"
      },
      {
        status:401
      }
    );

  }



  const user =
    await prisma.user.findUnique({

      where:{
        email:session.user.email
      },


      include:{
        patientProfile:true
      }

    });




  if(!user?.patientProfile){

    return NextResponse.json(
      {
        message:"Patient profile not found"
      },
      {
        status:404
      }
    );

  }





  const sample =
    await prisma.sample.create({

      data:{


        sampleCode:
        "SM-" + Date.now(),


        patientId:
        user.patientProfile.id,


        status:
        "REGISTERED"


      }

    });





  return NextResponse.json(

    {

      message:"Screening request created",

      sample

    },

    {

      status:201

    }

  );


}