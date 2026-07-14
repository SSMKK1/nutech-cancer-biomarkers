import Link from "next/link";

export default function LoginPage() {
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

        <div className="comparison-card" style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h3>Login To Your Account</h3>

          <form className="contact-form">

            <select>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Laboratory</option>
              <option>Administrator</option>
            </select>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px"
              }}
            >
              <label>
                <input type="checkbox" /> Remember Me
              </label>

              <Link href="/contact">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="primary-btn"
            >
              Sign In
            </button>

          </form>

          <br />

          <p>
            Don't have an account?{" "}
            <Link href="/register">
              Register Here
            </Link>
          </p>

        </div>

        <section className="section">

          <div className="section-header">
            <h2>Quick Portal Access</h2>
          </div>

          <div className="auth-grid">

            <div className="auth-card">
              <h3>Patient Portal</h3>

              <p>
                Access reports, results and screening history.
              </p>

              <Link href="/dashboard/patient">
                <button className="primary-btn">
                  Patient Dashboard
                </button>
              </Link>
            </div>

            <div className="auth-card">
              <h3>Doctor Portal</h3>

              <p>
                Review patient results and clinical reports.
              </p>

              <Link href="/dashboard/doctor">
                <button className="primary-btn">
                  Doctor Dashboard
                </button>
              </Link>
            </div>

            <div className="auth-card">
              <h3>Laboratory Portal</h3>

              <p>
                Manage samples and laboratory workflows.
              </p>

              <Link href="/dashboard/lab">
                <button className="primary-btn">
                  Laboratory Dashboard
                </button>
              </Link>
            </div>

            <div className="auth-card">
              <h3>Administrator</h3>

              <p>
                Manage platform operations and users.
              </p>

              <Link href="/dashboard/admin">
                <button className="primary-btn">
                  Admin Dashboard
                </button>
              </Link>
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
