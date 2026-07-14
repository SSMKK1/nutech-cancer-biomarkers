import Link from "next/link";

export default function PartnersPage() {
  return (
    <>

      <section className="section">
        <div className="container">

          <div className="section-header">

            <span className="eyebrow">
              PARTNERS
            </span>

            <h2>
              Clinical Collaboration Network
            </h2>

            <p>
              Building a nationwide ecosystem of hospitals, diagnostic
              laboratories, healthcare providers and research institutions
              committed to advancing biomarker-based screening solutions.
            </p>

          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>Hospitals</h3>
              <p>Deliver physician-led screening and patient care.</p>
            </div>

            <div className="trust-card">
              <h3>Laboratories</h3>
              <p>Support sample processing and biomarker analysis.</p>
            </div>

            <div className="trust-card">
              <h3>Clinics</h3>
              <p>Expand community access to screening programs.</p>
            </div>

            <div className="trust-card">
              <h3>Research</h3>
              <p>Advance innovation through scientific collaboration.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <h3 className="subsection-heading">
            Partnership Opportunities
          </h3>

          <div className="partner-opportunities-grid">

            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Healthcare Providers</h3>
              <p>
                Integrate SeroMark-1 into existing patient screening
                and preventive healthcare programs.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Diagnostic Laboratories</h3>
              <p>
                Participate in biomarker testing workflows and expand
                laboratory service offerings.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Research Organizations</h3>
              <p>
                Explore clinical studies, innovation programs and
                scientific partnerships.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <h3 className="subsection-heading">
            Benefits Of Joining The Network
          </h3>

          <div className="comparison-grid">

            <div className="comparison-card">

              <h3>For Partners</h3>

              <ul>
                <li>Access to advanced screening technology</li>
                <li>Participation in a growing healthcare network</li>
                <li>Provider education and support resources</li>
                <li>Digital reporting and workflow tools</li>
                <li>Collaborative growth opportunities</li>
              </ul>

            </div>

            <div className="comparison-card">

              <h3>For Patients</h3>

              <ul>
                <li>Improved access to screening services</li>
                <li>Earlier risk assessment opportunities</li>
                <li>Streamlined testing pathways</li>
                <li>Enhanced clinical support</li>
                <li>Better healthcare accessibility</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="cta-banner">

            <span className="eyebrow">
              JOIN THE NETWORK
            </span>

            <h2>
              Become A Partner
            </h2>

            <p>
              We welcome hospitals, clinics, diagnostic laboratories,
              healthcare groups and research institutions interested
              in expanding access to biomarker-driven screening
              solutions.
            </p>

            <div className="cta-buttons">

              <Link href="/contact">
                <button className="primary-btn">
                  Apply For Partnership
                </button>
              </Link>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}