import { SustainabilityHero } from "@/components/sustainability/sustainability-hero";
import { SustainabilityProblem } from "@/components/sustainability/sustainability-problem";
import { SustainabilityVerticals } from "@/components/sustainability/sustainability-verticals";
import { SustainabilityProcess } from "@/components/sustainability/sustainability-process";
import { SustainabilityFaq } from "@/components/sustainability/sustainability-faq";

export const metadata = {
  title:
    "Sustainable Coffee Sourcing, Ethical Coffee Sourcing & Coffee Sustainability UAE | JPLC",
  description:
    "JPLC's commitment to sustainable coffee sourcing, ethical supply chain practices, and coffee traceability from origin to operation across the UAE.",
};

export default function SustainabilityPage() {
  return (
    <main>
      <SustainabilityHero />
      <SustainabilityProblem />
      <SustainabilityVerticals />
      <SustainabilityProcess />
      <SustainabilityFaq />
    </main>
  );
}
