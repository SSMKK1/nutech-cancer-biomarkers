import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="homepage-hero">

      <div className="homepage-hero-bg">
        <Image
          src="/images/hero-homepage.jpg.png"
          alt="Laboratory Scientist"
          fill
          priority
          sizes="100vw"
        />
        <div className="homepage-hero-fade" />
      </div>

      <div className="container homepage-hero-grid">

        <div className="homepage-hero-content">

          <span className="homepage-eyebrow">
            EARLIER INSIGHT. BETTER OUTCOMES.
          </span>

          <h1>
            Biomarker Innovation
            <br />
            for <span className="text-accent">Earlier</span> Cancer Risk
            <br />
            Assessment
          </h1>

          <p>
            NuTech Cancer Biomarkers is advancing preventive
            healthcare through innovative blood-based biomarker
            solutions that enable earlier risk assessment and
            improved clinical decision support.
          </p>

          <div className="homepage-buttons">
            <Link href="/seromark-1">
              <button className="primary-btn">Explore SeroMark-1</button>
            </Link>
            <Link href="/how-it-works">
              <button className="secondary-btn">How It Works</button>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}