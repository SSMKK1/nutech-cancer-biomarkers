import Image from "next/image";

export default function InvestorsPage() {
  return (
    <main>
      <div className="container">

        <section className="section">

          <div className="section-header">

            <span className="eyebrow">
              INVESTOR RELATIONS
            </span>

            <h1>
              Investment Opportunity
            </h1>

            <p>
              Supporting the future of precision oncology,
              biomarker innovation and scalable healthcare
              screening solutions through strategic growth
              and national expansion.
            </p>

          </div>

          <div className="investors-image-wrap">

            <Image
              src="/images/investor-growth.jpg"
              alt="Healthcare Innovation Investment"
              width={1600}
              height={900}
              className="investors-image"
            />

            <div className="investors-image-overlay">

              <h3>
                Investing In Precision Healthcare
              </h3>

              <p>
                Combining biomarker science, digital health
                technology, laboratory infrastructure and
                clinical partnerships to support the next
                generation of cancer screening solutions.
              </p>

            </div>

          </div>

          <div className="metrics-grid">

            <div className="metric-card">
              <h3>Potential Screening Population</h3>
              <span>13.5 Crore</span>
            </div>

            <div className="metric-card">
              <h3>Demand For Early Detection</h3>
              <span>Growing</span>
            </div>

            <div className="metric-card">
              <h3>Expansion Strategy</h3>
              <span>National</span>
            </div>

            <div className="metric-card">
              <h3>Innovation Platform</h3>
              <span>Biomarker</span>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>Why This Opportunity Matters</h2>
          </div>

          <div className="comparison-grid">

            <div className="comparison-card">

              <h3>Healthcare Challenge</h3>

              <ul>
                <li>Growing demand for earlier detection</li>
                <li>Increasing awareness of prostate health</li>
                <li>Need for scalable screening programs</li>
                <li>Expanding healthcare infrastructure</li>
                <li>Demand for data-driven decisions</li>
              </ul>

            </div>

            <div className="comparison-card featured">

              <h3>Our Response</h3>

              <ul>
                <li>Advanced biomarker-based screening</li>
                <li>Digital reporting platform</li>
                <li>Hospital and laboratory network</li>
                <li>Structured clinical workflows</li>
                <li>Scalable national deployment model</li>
              </ul>

            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>Growth Strategy</h2>
          </div>

          <div className="timeline-grid">

            <div className="step-card">
              <div className="step-number">1</div>

              <h3>Expand Network</h3>

              <p>
                Increase participation from hospitals,
                clinics and diagnostic laboratories.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>

              <h3>Technology Scale</h3>

              <p>
                Enhance digital infrastructure,
                reporting systems and provider tools.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>

              <h3>National Reach</h3>

              <p>
                Expand access to biomarker screening
                across major healthcare markets.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>Investment Highlights</h2>
          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>Healthcare</h3>
              <p>
                Positioned within a rapidly growing
                healthcare technology sector.
              </p>
            </div>

            <div className="trust-card">
              <h3>Innovation</h3>
              <p>
                Biomarker-driven screening supported
                by modern digital systems.
              </p>
            </div>

            <div className="trust-card">
              <h3>Scalable</h3>
              <p>
                Designed for expansion through
                healthcare partnerships.
              </p>
            </div>

            <div className="trust-card">
              <h3>Impact</h3>
              <p>
                Focused on improving access to
                earlier risk assessment.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="comparison-card">

            <h3>
              Investor Relations
            </h3>

            <p>
              We welcome discussions with strategic partners,
              healthcare investors, research organizations and
              institutions interested in supporting the future
              of biomarker-driven healthcare innovation.
            </p>

            <br />

            <button className="primary-btn">
              Contact Investor Relations
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}