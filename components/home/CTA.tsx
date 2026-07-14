import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">

        <div className="cta-banner">

          <span className="eyebrow">
            TAKE THE NEXT STEP
          </span>

          <h2>
            Earlier Insight. Better Decisions.
          </h2>

          <p>
            Discover how SeroMark-1 supports advanced
            prostate cancer risk assessment through
            biomarker-driven screening, physician review
            and a growing healthcare network.
          </p>

          <div className="cta-buttons">

            <Link href="/contact">
              <button className="primary-btn">
                Order The Test
              </button>
            </Link>

            <Link href="/locations">
              <button className="secondary-dark-btn">
                Find A Location
              </button>
            </Link>

            <Link href="/contact">
              <button className="secondary-btn">
                Contact Us
              </button>
            </Link>

          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <strong>Patient Access</strong>
            </div>

            <div>
              <strong>Clinical Collaboration</strong>
            </div>

            <div>
              <strong>National Expansion</strong>
            </div>

            <div>
              <strong>Biomarker Innovation</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
