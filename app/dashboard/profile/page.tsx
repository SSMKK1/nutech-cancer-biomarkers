"use client";

import { useState } from "react";


export default function ProfileForm({

  name,
  email,
  role,

}: {

  name:string;
  email:string;
  role:string;

}) {


  const [form,setForm] = useState({

    name:name,

    phone:"",
    gender:"",
    dateOfBirth:"",

    hospital:"",
    specialization:"",
    licenseNumber:"",

    labName:"",
    location:"",
    contact:"",

  });



  const [message,setMessage] = useState("");



  function updateField(
    field:string,
    value:string
  ){

    setForm({

      ...form,

      [field]:value

    });

  }





  async function saveProfile(){


    const response = await fetch(
      "/api/profile",
      {

        method:"PUT",

        headers:{

          "Content-Type":"application/json",

        },

        body:JSON.stringify(form),

      }
    );



    if(response.ok){

      setMessage(
        "Profile updated successfully"
      );

    }

    else{

      setMessage(
        "Update failed"
      );

    }


  }




  return (

    <div className="comparison-card">


      <h3>
        Account Information
      </h3>



      <label>
        Name
      </label>


      <input

        value={form.name}

        onChange={(e)=>
          updateField(
            "name",
            e.target.value
          )
        }

      />



      <br/><br/>



      <label>
        Email
      </label>


      <input

        value={email}

        disabled

      />



      <br/><br/>



      <label>
        Account Type
      </label>


      <input

        value={role}

        disabled

      />



      <br/><br/>





      {role === "PATIENT" && (

        <>


          <h3>
            Patient Information
          </h3>


          <input

            placeholder="Phone"

            onChange={(e)=>
              updateField(
                "phone",
                e.target.value
              )
            }

          />


          <br/><br/>


          <input

            placeholder="Gender"

            onChange={(e)=>
              updateField(
                "gender",
                e.target.value
              )
            }

          />


          <br/><br/>


          <input

            type="date"

            onChange={(e)=>
              updateField(
                "dateOfBirth",
                e.target.value
              )
            }

          />


        </>

      )}






      {role === "DOCTOR" && (

        <>


          <h3>
            Doctor Information
          </h3>


          <input

            placeholder="Hospital"

            onChange={(e)=>
              updateField(
                "hospital",
                e.target.value
              )
            }

          />


          <br/><br/>



          <input

            placeholder="Specialization"

            onChange={(e)=>
              updateField(
                "specialization",
                e.target.value
              )
            }

          />


          <br/><br/>



          <input

            placeholder="License Number"

            onChange={(e)=>
              updateField(
                "licenseNumber",
                e.target.value
              )
            }

          />


        </>

      )}






      {role === "LAB" && (

        <>


          <h3>
            Laboratory Information
          </h3>



          <input

            placeholder="Laboratory Name"

            onChange={(e)=>
              updateField(
                "labName",
                e.target.value
              )
            }

          />



          <br/><br/>



          <input

            placeholder="Location"

            onChange={(e)=>
              updateField(
                "location",
                e.target.value
              )
            }

          />



          <br/><br/>



          <input

            placeholder="Contact"

            onChange={(e)=>
              updateField(
                "contact",
                e.target.value
              )
            }

          />



        </>

      )}






      <br/><br/>


      <button

        className="primary-btn"

        onClick={saveProfile}

      >

        Save Profile

      </button>



      <p>
        {message}
      </p>



    </div>

  );

}