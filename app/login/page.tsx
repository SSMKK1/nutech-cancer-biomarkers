"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setMessage("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="section">

      <div className="container">

        <div className="section-header">
          <span className="eyebrow">
            SECURE PLATFORM ACCESS
          </span>

          <h1>Welcome Back</h1>

          <p>
            Access patient, physician, laboratory and
            administrative services through the
            SeroMark-1 platform.
          </p>
        </div>

        <div
          className="comparison-card"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >

          <h3>Login To Your Account</h3>

          <form
            className="contact-form"
            onSubmit={handleLogin}
          >

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Sign In
            </button>

          </form>

          <p>{message}</p>

          <br />

          <p>
            Don't have an account?{" "}
            <Link href="/register">
              Register Here
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}