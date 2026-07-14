export default function FAQ() {
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <span className="eyebrow">FAQ</span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Answers to common questions about SeroMark-1
            prostate cancer biomarker screening.
          </p>
        </div>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>What is SeroMark-1?</h3>
            <p>
              SeroMark-1 is a blood-based biomarker screening
              test designed to support earlier prostate cancer
              risk assessment.
            </p>
          </div>

          <div className="faq-card">
            <h3>Who should consider testing?</h3>
            <p>
              Men seeking additional information about
              prostate cancer risk should consult their
              healthcare provider.
            </p>
          </div>

          <div className="faq-card">
            <h3>Is the test invasive?</h3>
            <p>
              No. The test uses a simple blood sample.
            </p>
          </div>

          <div className="faq-card">
            <h3>How long do results take?</h3>
            <p>
              Turnaround times vary by laboratory and
              location.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
