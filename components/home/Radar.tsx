import Image from "next/image";
import Link from "next/link";

export default function Radar() {
  return (
    <section className="seromark-section">

      <div className="container">

        <div className="seromark-grid">

          <div className="seromark-content">

            <span className="eyebrow">
              OUR INNOVATION
            </span>

            <h2>SeroMark-1</h2>

            <p>
              A next-generation biomarker test supporting
              earlier risk assessment across multiple
              cancer types through advanced blood-based
              screening technology.
            </p>

            <Link href="/seromark-1">
              <button className="primary-btn">
                Learn More About SeroMark-1
              </button>
            </Link>

          </div>

          <div className="seromark-features">

            <div className="feature-row">
              <div className="feature-row-top">
                <span className="feature-icon">🧬</span>
                <h3>Multi-Cancer Risk Assessment</h3>
              </div>

              <p>
                Evaluates biological signals associated
                with multiple cancer types.
              </p>
            </div>

            <div className="feature-row">
              <div className="feature-row-top">
                <span className="feature-icon">🛡️</span>
                <h3>High Accuracy</h3>
              </div>

              <p>
                Advanced biomarker algorithm designed
                for reliability and precision.
              </p>
            </div>

            <div className="feature-row">
              <div className="feature-row-top">
                <span className="feature-icon">⏱️</span>
                <h3>Fast &amp; Convenient</h3>
              </div>

              <p>
                Simple blood draw with efficient
                laboratory processing.
              </p>
            </div>

          </div>

          <div className="seromark-product">

            <Image
              src="/images/medical-team.jpg"
              alt="SeroMark-1"
              width={700}
              height={500}
              className="seromark-product-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}