"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function RegisterPage() {


  const router = useRouter();


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [role,setRole] = useState("PATIENT");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [message,setMessage] = useState("");


  const [hospital,setHospital] = useState("");
  const [specialization,setSpecialization] = useState("");
  const [licenseNumber,setLicenseNumber] = useState("");

  const [labName,setLabName] = useState("");
  const [location,setLocation] = useState("");
  const [contact,setContact] = useState("");

  const [dateOfBirth,setDateOfBirth] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");



  async function handleRegister(e:React.FormEvent){

    e.preventDefault();


    if(password !== confirmPassword){

      setMessage("Passwords do not match");
      return;

    }



    const response =
      await fetch("/api/register",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },


        body:JSON.stringify({

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

        })

      });



    const data =
      await response.json();



    if(!response.ok){

      setMessage(data.message);
      return;

    }



    setMessage(
      "Account created successfully. Redirecting..."
    );


    setTimeout(()=>{

      router.push("/login");

    },1500);


  }




  return (

    <main className="section">

      <div className="container">


        <div className="section-header">

          <span className="eyebrow">
            CREATE ACCOUNT
          </span>

          <h1>
            Join The SeroMark-1 Platform
          </h1>

          <p>
            Register securely for healthcare,
            laboratory or physician access.
          </p>

        </div>




        <div className="comparison-card"
        style={{
          maxWidth:"800px",
          margin:"0 auto"
        }}>


        <form
        className="contact-form"
        onSubmit={handleRegister}>


          <input
          placeholder="Full Name"
          value={name}
          onChange={e=>setName(e.target.value)}
          required
          />



          <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          />



          <select
          value={role}
          onChange={e=>setRole(e.target.value)}>


            <option value="PATIENT">
              Patient
            </option>


            <option value="DOCTOR">
              Doctor
            </option>


            <option value="LAB">
              Laboratory
            </option>


          </select>





          {role==="PATIENT" && (

            <>

            <input
            type="date"
            value={dateOfBirth}
            onChange={e=>setDateOfBirth(e.target.value)}
            />


            <input
            placeholder="Gender"
            value={gender}
            onChange={e=>setGender(e.target.value)}
            />


            <input
            placeholder="Phone Number"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            />

            </>

          )}






          {role==="DOCTOR" && (

            <>

            <input
            placeholder="Hospital"
            value={hospital}
            onChange={e=>setHospital(e.target.value)}
            />


            <input
            placeholder="Specialization"
            value={specialization}
            onChange={e=>setSpecialization(e.target.value)}
            />


            <input
            placeholder="License Number"
            value={licenseNumber}
            onChange={e=>setLicenseNumber(e.target.value)}
            />


            </>

          )}






          {role==="LAB" && (

            <>

            <input
            placeholder="Laboratory Name"
            value={labName}
            onChange={e=>setLabName(e.target.value)}
            />


            <input
            placeholder="Location"
            value={location}
            onChange={e=>setLocation(e.target.value)}
            />


            <input
            placeholder="Contact"
            value={contact}
            onChange={e=>setContact(e.target.value)}
            />


            </>

          )}






          <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          required
          />



          <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e=>setConfirmPassword(e.target.value)}
          required
          />



          <label>

            <input type="checkbox" required />

            I agree to Terms of Service and Privacy Policy

          </label>



          <button
          className="primary-btn"
          type="submit">

            Create Account

          </button>


        </form>



        <p>
          {message}
        </p>



        <p>
          Already have an account?{" "}
          <Link href="/login">
            Sign In
          </Link>
        </p>


        </div>


      </div>


    </main>

  );

}