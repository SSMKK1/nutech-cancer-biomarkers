import Image from "next/image";
import Link from "next/link";

export default function Opportunity() {
  return (
    <section id="need" className="section">
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            THE OPPORTUNITY
          </span>

          <h2>
            Earlier Detection Can Change Outcomes
          </h2>

          <p>
            Prostate cancer can develop without obvious symptoms
            during its early stages. Expanding access to advanced
            screening solutions creates opportunities for earlier
            clinical evaluation, improved patient awareness and
            more informed healthcare decisions.
          </p>

        </div>

        <div className="opportunity-image-wrap">

          <Image
            src="/images/partners-network.jpg"
            alt="Healthcare Screening Network"
            width={1600}
            height={900}
            className="opportunity-image"
          />

          <div className="opportunity-image-overlay">

            <h3>
              Expanding Access To Precision Screening
            </h3>

            <p>
              Connecting laboratories, physicians and healthcare
              organizations through scalable screening pathways.
            </p>

          </div>

        </div>

        <div className="opportunity-grid">

          <div className="opportunity-card">
            <h3>13.5 Crore</h3>
            <p>Men within the recommended screening population.</p>
          </div>

          <div className="opportunity-card">
            <h3>40–65</h3>
            <p>Recommended age range for proactive screening.</p>
          </div>

          <div className="opportunity-card">
            <h3>1 Sample</h3>
            <p>Simple blood collection process.</p>
          </div>

          <div className="opportunity-card">
            <h3>Early Action</h3>
            <p>Supports timely clinical evaluation pathways.</p>
          </div>

          <div className="opportunity-card">
            <h3>Growing Demand</h3>
            <p>
              Increasing awareness of preventive healthcare
              and precision screening.
            </p>
          </div>

          <div className="opportunity-card">
            <h3>National Reach</h3>
            <p>
              Expansion through hospitals, laboratories and
              healthcare partners.
            </p>
          </div>

        </div>

        <div
          className="comparison-card"
          style={{ marginTop: "50px" }}
        >

          <h3>
            Expanding Access To Precision Screening
          </h3>

          <p>
            SeroMark-1 is designed to support healthcare
            organizations, physicians and diagnostic networks
            seeking innovative approaches to prostate cancer
            screening.
          </p>

          <br />

          <Link href="/opportunity">
            <button className="primary-btn">
              Explore The Opportunity
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
