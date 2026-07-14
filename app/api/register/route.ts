import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  try {


    const body = await request.json();


    const {
      name,
      email,
      password,
      role,
      hospital,
      specialization,
      licenseNumber,
      labName,
      location,
      contact,
      dateOfBirth,
      gender,
      phone,
    } = body;



    if(!name || !email || !password){

      return NextResponse.json(
        {
          message:"Name, email and password are required"
        },
        {
          status:400
        }
      );

    }



    const existingUser =
      await prisma.user.findUnique({

        where:{
          email
        }

      });



    if(existingUser){

      return NextResponse.json(
        {
          message:"User already exists"
        },
        {
          status:409
        }
      );

    }




    const hashedPassword =
      await bcrypt.hash(password,12);





    const user =
      await prisma.user.create({

        data:{


          name,

          email,

          password:hashedPassword,


          role: role || "PATIENT",



          patientProfile:
          role === "PATIENT" || !role

          ?

          {

            create:{

              dateOfBirth:
              dateOfBirth
              ?
              new Date(dateOfBirth)
              :
              null,


              gender,

              phone,

            }

          }

          :

          undefined,





          doctorProfile:

          role === "DOCTOR"

          ?

          {

            create:{

              hospital,

              specialization,

              licenseNumber,

            }

          }

          :

          undefined,






          labProfile:

          role === "LAB"

          ?

          {

            create:{

              name:
              labName || name,

              location,

              contact,

            }

          }

          :

          undefined,


        }

      });





    return NextResponse.json(

      {

        message:"Account created successfully",

        userId:user.id

      },

      {

        status:201

      }

    );





  } catch(error){


    console.error(error);



    return NextResponse.json(

      {

        message:"Something went wrong"

      },

      {

        status:500

      }

    );


  }


}