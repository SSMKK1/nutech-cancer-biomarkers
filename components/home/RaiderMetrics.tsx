export default function RaiderMetrics() {
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <span className="eyebrow">AI RISK INTELLIGENCE</span>

          <h2>SeroMark Raider Risk Assessment</h2>

          <p>
            A visual intelligence dashboard showing how biomarker
            information can support early prostate cancer risk
            assessment.
          </p>
        </div>


        <div className="radar-card">

          <div className="radar-circle">

            <div className="radar-ring ring-1"></div>
            <div className="radar-ring ring-2"></div>
            <div className="radar-ring ring-3"></div>

            <div className="radar-line horizontal"></div>
            <div className="radar-line vertical"></div>

            <div className="scan-line"></div>

            <div className="radar-dot dot-1"></div>
            <div className="radar-dot dot-2"></div>
            <div className="radar-dot dot-3"></div>
            <div className="radar-dot dot-4"></div>

            <div className="radar-center"></div>

          </div>


          <div className="radar-info">

            <p>Current Risk Index</p>

            <h2>0.18</h2>

            <h3>LOW RISK</h3>

            <p>
              Recommended action:
              <br />
              Routine clinical re-screening
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
