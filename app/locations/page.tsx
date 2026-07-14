import Image from "next/image";
import Link from "next/link";

export default function LocationsPage() {
  return (
    <main>
      <div className="container">

        <section className="section">

          <div className="section-header">

            <span className="eyebrow">
              TESTING NETWORK
            </span>

            <h1>
              Find A Screening Location
            </h1>

            <p>
              Locate approved hospitals, clinics and laboratory
              partners offering SeroMark-1 screening services.
              Our healthcare network continues to expand to make
              early screening more accessible.
            </p>

          </div>

          <div className="locations-image-wrap">

            <Image
              src="/images/healthcare-locations.jpg"
              alt="Screening Locations Network"
              width={1600}
              height={900}
              className="locations-image"
            />

            <div className="locations-image-overlay">

              <h3>
                Nationwide Screening Access
              </h3>

              <p>
                Connecting patients with hospitals,
                laboratories and healthcare providers
                through an expanding clinical network.
              </p>

            </div>

          </div>

          <div className="comparison-card">

            <h3>Search Testing Locations</h3>

            <p>
              Enter your city, region or preferred healthcare
              facility to identify participating screening
              centers near you.
            </p>

            <br />

            <input
              type="text"
              placeholder="Enter City, Region or Facility Name"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #ddd",
                borderRadius: "10px"
              }}
            />

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>Featured Screening Centers</h2>
          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>Delhi Regional Center</h3>
              <p>
                Comprehensive screening, physician
                consultation and laboratory support.
              </p>
              <strong>5 Approved Facilities</strong>
            </div>

            <div className="trust-card">
              <h3>Mumbai Diagnostic Network</h3>
              <p>
                Multi-site healthcare network offering
                convenient patient access.
              </p>
              <strong>4 Approved Facilities</strong>
            </div>

            <div className="trust-card">
              <h3>Bangalore Medical Hub</h3>
              <p>
                Specialist healthcare providers supporting
                biomarker-based screening programs.
              </p>
              <strong>3 Approved Facilities</strong>
            </div>

            <div className="trust-card">
              <h3>Chennai Healthcare Group</h3>
              <p>
                Integrated laboratory and physician
                referral services.
              </p>
              <strong>3 Approved Facilities</strong>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>National Coverage Strategy</h2>
          </div>

          <div className="timeline-grid">

            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Hospitals</h3>
              <p>
                Partner hospitals provide patient
                enrollment, physician consultation and
                follow-up support.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Laboratories</h3>
              <p>
                Accredited diagnostic laboratories perform
                biomarker analysis and quality assurance.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Healthcare Centers</h3>
              <p>
                Community healthcare providers help expand
                screening access and patient education.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="metrics-grid">

            <div className="metric-card">
              <h3>Planned Partner Facilities</h3>
              <span>100+</span>
            </div>

            <div className="metric-card">
              <h3>Target Cities</h3>
              <span>25+</span>
            </div>

            <div className="metric-card">
              <h3>Expansion Program</h3>
              <span>National</span>
            </div>

            <div className="metric-card">
              <h3>Healthcare Network</h3>
              <span>Growing</span>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="comparison-card">

            <h3>Need Help Finding A Facility?</h3>

            <p>
              Our support team can help identify the nearest
              participating hospital, clinic or diagnostic
              laboratory in your area.
            </p>

            <br />

            <Link href="/contact">
              <button className="primary-btn">
                Contact Support
              </button>
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}