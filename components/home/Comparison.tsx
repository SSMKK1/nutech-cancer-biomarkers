import Image from "next/image";

export default function Comparison() {
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            COMPARATIVE ADVANTAGES
          </span>

          <h2>
            Why SeroMark-1 Matters
          </h2>

          <p>
            Advanced biomarker screening designed to support
            earlier risk assessment and more informed
            clinical decision-making.
          </p>

        </div>

        <div className="comparison-image-wrap">

          <Image
            src="/images/medical-team.jpg"
            alt="Advanced Clinical Diagnostics"
            width={1600}
            height={900}
            className="comparison-image"
          />

          <div className="comparison-image-overlay">

            <h3>
              Precision Biomarker Analysis
            </h3>

            <p>
              Combining laboratory science, clinical
              workflows and data-driven risk assessment.
            </p>

          </div>

        </div>

        <div className="comparison-grid">

          <div className="comparison-card">

            <h3>
              Traditional Screening
            </h3>

            <ul>
              <li>Limited biomarker insight</li>
              <li>Higher uncertainty</li>
              <li>Additional follow-up testing</li>
              <li>Less personalized assessment</li>

            </ul>

          </div>

          <div className="comparison-card featured">

            <h3>
              SeroMark-1 Platform
            </h3>

            <ul>
              <li>Multi-biomarker evaluation</li>
              <li>Structured risk scoring</li>
              <li>Enhanced clinical support</li>
              <li>Actionable decision insights</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
