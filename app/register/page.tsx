import Link from "next/link";

export default function RegisterPage() {
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
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >

          <h3>Account Registration</h3>

          <form className="contact-form">

            <div className="form-grid">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Organization (Optional)"
              />

            </div>

            <select>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Laboratory</option>
            </select>

            <input
              type="password"
              placeholder="Create Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <label>
              <input type="checkbox" /> I agree to the Terms
              of Service and Privacy Policy
            </label>

            <button
              type="submit"
              className="primary-btn"
            >
              Create Account
            </button>

          </form>

          <br />

          <p>
            Already have an account?{" "}
            <Link href="/login">
              Sign In
            </Link>
          </p>

        </div>

        <section className="section">

          <div className="section-header">
            <h2>Account Types</h2>
          </div>

          <div className="timeline-grid">

            <div className="auth-card">

              <h3>Patient</h3>

              <p>
                Access results, reports, screening history
                and health information.
              </p>

            </div>

            <div className="auth-card">

              <h3>Doctor</h3>

              <p>
                Review patient reports, monitor risk scores
                and manage clinical workflows.
              </p>

            </div>

            <div className="auth-card">

              <h3>Laboratory</h3>

              <p>
                Process samples, manage testing workflows
                and submit laboratory results.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}