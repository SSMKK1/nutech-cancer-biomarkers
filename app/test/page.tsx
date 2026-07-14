export default function TestPage() {
  return (
    <main className="section">
      <div className="container">

        <div className="section-header">
          <span className="eyebrow">
            SEROMARK-1 SCREENING
          </span>

          <h1>The SeroMark-1 Test</h1>

          <p>
            A next-generation blood-based biomarker screening
            platform designed to support earlier prostate cancer
            risk assessment and help guide clinical decision-making.
          </p>
        </div>

        <div className="comparison-grid">

          <div className="comparison-card">
            <h3>What Is SeroMark-1?</h3>

            <p>
              SeroMark-1 is a multi-biomarker screening approach
              that analyzes specific biological indicators present
              in blood serum. The platform combines biomarker
              evaluation with risk-scoring models to provide
              structured clinical insight.
            </p>
          </div>

          <div className="comparison-card featured">
            <h3>Why It Matters</h3>

            <p>
              Earlier identification of elevated risk may support
              faster clinical investigation, more informed decision
              making and improved patient management strategies.
            </p>
          </div>

        </div>

        <section className="section">

          <div className="section-header">
            <h2>How The Test Works</h2>
          </div>

          <div className="timeline-grid">

            <div className="step-card">
              <div className="step-number">1</div>

              <h3>Blood Collection</h3>

              <p>
                A routine blood sample is collected through an
                approved healthcare provider or partner facility.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>

              <h3>Biomarker Analysis</h3>

              <p>
                Serum biomarkers are evaluated using established
                laboratory procedures and quality controls.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>

              <h3>Risk Assessment</h3>

              <p>
                Results are processed through the SeroMark-1
                scoring framework to generate a structured
                risk profile.
              </p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="section-header">
            <h2>Who May Benefit?</h2>
          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>40+</h3>
              <p>
                Individuals seeking proactive health monitoring.
              </p>
            </div>

            <div className="trust-card">
              <h3>Family History</h3>
              <p>
                Men with a family history of prostate cancer.
              </p>
            </div>

            <div className="trust-card">
              <h3>Routine Screening</h3>
              <p>
                Patients participating in regular health checks.
              </p>
            </div>

            <div className="trust-card">
              <h3>Clinical Follow-Up</h3>
              <p>
                Individuals requiring additional screening insight.
              </p>
            </div>

          </div>

        </section>

        <div className="comparison-card">

          <h3>Clinical Workflow</h3>

          <p>
            Sample collection, laboratory processing, biomarker
            evaluation and structured reporting are integrated into
            a streamlined workflow designed to support healthcare
            providers and patients throughout the screening process.
          </p>

          <br />

          <button className="primary-btn">
            Order The Test
          </button>

        </div>

      </div>
    </main>
  );
}