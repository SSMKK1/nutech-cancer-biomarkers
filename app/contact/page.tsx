import Image from "next/image";

export default function ContactPage() {
  return (
    <main>
      <div className="container">

        <section className="section">

          <div className="section-header">
            <span className="eyebrow">
              CONTACT US
            </span>

            <h1>Get In Touch</h1>

            <p>
              Contact our team regarding testing services,
              healthcare partnerships, physician onboarding,
              laboratory collaboration and general inquiries.
            </p>
          </div>

          <div className="contact-image-wrap">

            <Image
              src="/images/contact-healthcare.jpg"
              alt="Healthcare Support Team"
              width={1600}
              height={900}
              className="contact-image"
            />

            <div className="contact-image-overlay">

              <h3>
                Dedicated Clinical Support
              </h3>

              <p>
                Connecting patients, physicians, laboratories
                and healthcare partners through a unified
                support network.
              </p>

            </div>

          </div>

          <div className="trust-grid">

            <div className="trust-card">
              <h3>Email</h3>
              <p>info@nutechbiomarkers.com</p>
            </div>

            <div className="trust-card">
              <h3>Clinical Support</h3>
              <p>Support for physicians and healthcare providers.</p>
            </div>

            <div className="trust-card">
              <h3>Partner Network</h3>
              <p>Hospitals, clinics and laboratory collaborations.</p>
            </div>

            <div className="trust-card">
              <h3>Investor Relations</h3>
              <p>Corporate and strategic partnership inquiries.</p>
            </div>

          </div>

        </section>

        <section className="section">

          <div className="comparison-card">

            <h3>Send Us A Message</h3>

            <form className="contact-form">

              <div className="form-grid">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Organization (Optional)"
                />

              </div>

              <select>
                <option>General Inquiry</option>
                <option>Patient Support</option>
                <option>Doctor Registration</option>
                <option>Laboratory Partnership</option>
                <option>Investor Relations</option>
              </select>

              <textarea
                rows={6}
                placeholder="How can we help you?"
              ></textarea>

              <button
                type="submit"
                className="primary-btn"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </section>

      </div>
    </main>
  );
}