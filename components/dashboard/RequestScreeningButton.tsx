"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RequestScreeningButton(){

  const router = useRouter();

  const [message,setMessage] = useState("");



  async function requestScreening(){


    const response =
      await fetch("/api/samples",{

        method:"POST"

      });



    const data =
      await response.json();



    if(!response.ok){

      setMessage(data.message);

      return;

    }



    setMessage(
      "Screening request submitted successfully"
    );


    router.refresh();


  }




  return (

    <div>

      <button
        className="primary-btn"
        onClick={requestScreening}
      >

        Request SeroMark-1 Screening

      </button>


      <p>
        {message}
      </p>

    </div>

  );

}