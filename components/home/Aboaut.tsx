export default function AboutPage() {
  return (
    <main>
      <div className="container">

        <section className="section">

          <div className="section-header">
            <span className="eyebrow">
              OUR MISSION
            </span>

            <h1>About NuTech Cancer Biomarkers</h1>

            <p>
              We're building the next generation of blood-based
              biomarker screening, helping healthcare providers
              detect risk earlier and act with greater confidence.
            </p>
          </div>

          <div className="comparison-grid">

            <div className="comparison-card">
              <h3>Our Story</h3>
              <p>
                NuTech was founded to close a gap in early cancer
                detection — combining laboratory science with
                structured, data-driven risk assessment to give
                patients and physicians clearer answers, sooner.
              </p>
            </div>

            <div className="comparison-card featured">
              <h3>Our Mission</h3>
              <p>
                To make advanced biomarker screening accessible
                across hospitals, clinics and laboratories
                nationwide, supporting earlier intervention and
                better long-term patient outcomes.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>What We Value</h2>
          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>Precision</h3>
              <p>
                Every result is grounded in rigorous, validated
                science.
              </p>
            </div>

            <div className="trust-card">
              <h3>Accessibility</h3>
              <p>
                Expanding screening access across communities and
                healthcare networks.
              </p>
            </div>

            <div className="trust-card">
              <h3>Partnership</h3>
              <p>
                Working closely with physicians, labs and
                hospitals as one connected network.
              </p>
            </div>

            <div className="trust-card">
              <h3>Integrity</h3>
              <p>
                Transparent, evidence-based reporting patients and
                providers can trust.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="metrics-grid">

            <div className="metric-card">
              <h3>Patients Screened</h3>
              <span>50,000+</span>
            </div>

            <div className="metric-card">
              <h3>Partner Facilities</h3>
              <span>60+</span>
            </div>

            <div className="metric-card">
              <h3>Clinical Sites</h3>
              <span>12</span>
            </div>

            <div className="metric-card">
              <h3>Founded</h3>
              <span>2021</span>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="cta-banner">
            <span className="eyebrow">Get Involved</span>
            <h2>Join Us In Advancing Early Detection</h2>
            <p>
              Whether you're a healthcare provider, laboratory
              partner or investor, we'd love to connect.
            </p>

            <div className="cta-buttons">
              <button className="primary-btn">Contact Us</button>
              <button className="secondary-dark-btn">
                Learn About SeroMark-1
              </button>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}