"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.message);
      return;
    }

    setMessage("Account created successfully. Redirecting...");

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  }


  return (
    <main className="section">

      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            CREATE ACCOUNT
          </span>

          <h1>Join The SeroMark-1 Platform</h1>

          <p>
            Create your account to access screening services,
            healthcare tools and secure reporting features.
          </p>

        </div>


        <div
          className="comparison-card"
          style={{
            maxWidth:"800px",
            margin:"0 auto"
          }}
        >

          <h3>Account Registration</h3>


          <form
            className="contact-form"
            onSubmit={handleRegister}
          >

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />


            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />


            <select
              value={role}
              onChange={(e)=>setRole(e.target.value)}
            >

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


            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />


            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />


            <label>
              <input type="checkbox" required />
              I agree to the Terms of Service and Privacy Policy
            </label>


            <button
              type="submit"
              className="primary-btn"
            >
              Create Account
            </button>


          </form>


          <p>{message}</p>


          <br />


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