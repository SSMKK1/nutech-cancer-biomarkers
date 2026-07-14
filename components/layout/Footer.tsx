import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h3>Nutech Cancer Biomarkers</h3>

          <p>
            Advancing prostate cancer screening through
            biomarker-driven innovation, clinical
            collaboration and early risk assessment
            technologies.
          </p>

          <p
            style={{
              marginTop: "20px",
              opacity: 0.8
            }}
          >
            SeroMark-1 supports healthcare professionals
            with structured biomarker-based screening
            insights.
          </p>

        </div>

        <div>

          <h4>Solutions</h4>

          <ul>

            <li>
              <Link href="/test">
                The Test
              </Link>
            </li>

            <li>
              <Link href="/how-it-works">
                How It Works
              </Link>
            </li>

            <li>
              <Link href="/seromark-1">
                Why SeroMark-1
              </Link>
            </li>

            <li>
              <Link href="/locations">
                Find A Location
              </Link>
            </li>

          </ul>

        </div>

        <div>

          <h4>Company</h4>

          <ul>

            <li>
              <Link href="/partners">
                Partners
              </Link>
            </li>

            <li>
              <Link href="/investors">
                Investors
              </Link>
            </li>

            <li>
              <Link href="/opportunity">
                Opportunity
              </Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        <div>

          <h4>Platform</h4>

          <ul>

            <li>
              <Link href="/login">
                Login
              </Link>
            </li>

            <li>
              <Link href="/register">
                Register
              </Link>
            </li>

            <li>
              <Link href="/dashboard/patient">
                Patient Portal
              </Link>
            </li>

            <li>
              <Link href="/dashboard/doctor">
                Doctor Portal
              </Link>
            </li>

          </ul>

        </div>

        <div>

          <h4>Contact</h4>

          <ul>

            <li>info@nutechbiomarkers.com</li>
            <li>Clinical Support Team</li>
            <li>Healthcare Partnerships</li>
            <li>Research Collaboration</li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Nutech Cancer Biomarkers India Pvt. Ltd.
          All Rights Reserved.
        </p>

        <p>
          SeroMark-1 is intended to support healthcare
          professionals and does not replace medical
          advice, diagnosis or treatment.
        </p>

      </div>

    </footer>
  );
}
