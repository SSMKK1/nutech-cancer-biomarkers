import Link from "next/link";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">

          <span className="eyebrow">
            CONTACT OUR TEAM
          </span>

          <h2>
            Speak With Our Specialists
          </h2>

          <p>
            Learn more about SeroMark-1, screening locations,
            healthcare partnerships, laboratory services and
            clinical collaboration opportunities.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <h3>Email Support</h3>

            <p>
              Contact our team for general enquiries,
              testing information and partnership requests.
            </p>

            <strong>
              info@nutechbiomarkers.com
            </strong>

          </div>

          <div className="contact-card">

            <h3>Clinical Support</h3>

            <p>
              Guidance regarding screening pathways,
              healthcare providers and physician-led
              assessment services.
            </p>

          </div>

          <div className="contact-card">

            <h3>Partnership Enquiries</h3>

            <p>
              Hospitals, laboratories, healthcare
              systems and research organizations
              interested in collaboration.
            </p>

          </div>

          <div className="contact-card">

            <h3>Investor Relations</h3>

            <p>
              Information regarding growth strategy,
              healthcare expansion and innovation
              initiatives.
            </p>

          </div>

        </div>

        <div
          className="comparison-card"
          style={{ marginTop: "50px" }}
        >

          <h3>
            Ready To Get Started?
          </h3>

          <p>
            Whether you are a patient, physician,
            healthcare organization or potential
            partner, our team is available to help
            you find the right next step.
          </p>

          <br />

          <Link href="/contact">
            <button className="primary-btn">
              Contact Us
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
