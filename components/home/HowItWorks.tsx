import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            SCREENING WORKFLOW
          </span>

          <h2>
            How SeroMark-1 Works
          </h2>

          <p>
            A streamlined screening pathway designed to
            support early prostate cancer risk assessment
            through biomarker-driven clinical evaluation.
          </p>

        </div>

        {/* LANDSCAPE IMAGE */}

        <div className="workflow-image-wrap">

          <Image
            src="/images/medical-team.jpg"
            alt="Clinical Laboratory Workflow"
            width={1600}
            height={900}
            className="workflow-image"
          />

          <div className="workflow-overlay">
            <h3>
              Biomarker Screening Workflow
            </h3>

            <p>
              From patient assessment through laboratory
              analysis and physician review.
            </p>
          </div>

        </div>

        <div className="steps-grid">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Eligibility Assessment
            </h3>

            <p>
              Individuals within the recommended screening
              age range complete a healthcare assessment
              and physician consultation when required.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Blood Sample Collection
            </h3>

            <p>
              A single blood sample is collected through
              an approved healthcare facility and prepared
              for biomarker analysis.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Laboratory Analysis
            </h3>

            <p>
              The SeroMark-1 platform evaluates multiple
              biomarkers and generates a structured risk
              assessment profile.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <h3>
              Physician Review
            </h3>

            <p>
              Results are reviewed within the clinical
              workflow and interpreted by qualified
              healthcare professionals.
            </p>

          </div>

        </div>

        <div
          className="comparison-card"
          style={{ marginTop: "60px" }}
        >

          <h3>
            End-To-End Clinical Workflow
          </h3>

          <p>
            From sample collection to physician review,
            every stage of the SeroMark-1 process is
            designed to support quality, consistency
            and meaningful clinical insight.
          </p>

          <br />

          <Link href="/how-it-works">
            <button className="primary-btn">
              Explore The Full Process
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
