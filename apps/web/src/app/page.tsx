import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ResearchSection } from "@/components/sections/research-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { HospitalitySection } from "@/components/sections/hospitality-section";
import { ManufacturingSection } from "@/components/sections/manufacturing-section";
import { QualitySection } from "@/components/sections/quality-section";
import { PartnershipSection } from "@/components/sections/partnership-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ResearchSection />
      <EngineeringSection />
      <HospitalitySection />
      <ManufacturingSection />
      <QualitySection />
      <PartnershipSection />
    </main>
  );
}
