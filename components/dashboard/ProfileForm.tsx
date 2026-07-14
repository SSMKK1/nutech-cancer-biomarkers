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


  const [newName,setNewName] =
    useState(name);


  const [message,setMessage] =
    useState("");



  async function updateProfile(){


    const response =
      await fetch("/api/profile",{

        method:"PUT",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify({

          name:newName,

        }),

      });



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
        Personal Information
      </h3>


      <label>
        Name
      </label>


      <input

        value={newName}

        onChange={(e)=>
          setNewName(e.target.value)
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
        Role
      </label>


      <input

        value={role}

        disabled

      />


      <br/><br/>


      <button

        className="primary-btn"

        onClick={updateProfile}

      >

        Save Changes

      </button>


      <p>
        {message}
      </p>


    </div>

  );

}