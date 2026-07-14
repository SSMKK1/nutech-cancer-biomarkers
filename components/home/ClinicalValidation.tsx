export default function ClinicalValidation() {
  return (
    <>
      <section className="section">
        <div className="container">

          <div className="section-header">
            <span className="eyebrow">Validated Performance</span>
            <h2>Backed By Clinical Evidence</h2>
            <p>
              SeroMark-1 has been evaluated in multi-site clinical studies
              spanning thousands of patient samples, benchmarked against
              standard-of-care diagnostic pathways.
            </p>
          </div>

          <div className="metrics-grid">

            <div className="metric-card">
              <h3>Sensitivity</h3>
              <span>94.2%</span>
              <small>Across all studied cancer stages</small>
            </div>

            <div className="metric-card">
              <h3>Specificity</h3>
              <span>96.8%</span>
              <small>In matched control cohorts</small>
            </div>

            <div className="metric-card">
              <h3>AUC Score</h3>
              <span>0.97</span>
              <small>Receiver operating characteristic</small>
            </div>

            <div className="metric-card">
              <h3>Patients Enrolled</h3>
              <span>4,300+</span>
              <small>Across 12 clinical sites</small>
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="section-header">
            <span className="eyebrow">Study Design</span>
            <h2>How The Data Was Gathered</h2>
          </div>

          <div className="comparison-grid">

            <div className="comparison-card">
              <h3>Methodology</h3>
              <ul>
                <li>Prospective, multi-site cohort design</li>
                <li>Blinded sample processing and analysis</li>
                <li>Independent pathology confirmation</li>
                <li>Peer-reviewed statistical validation</li>
              </ul>
            </div>

            <div className="comparison-card">
              <h3>Population</h3>
              <ul>
                <li>Adults aged 40–85 across risk categories</li>
                <li>Balanced representation across stages I–IV</li>
                <li>Matched healthy control cohort</li>
                <li>12-month post-screening follow-up</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}