import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import Radar from "@/components/home/Radar";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustMetrics />
      <Radar />
      <CTA />
    </main>
  );
}