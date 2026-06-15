import { RdHero } from "@/components/research-development/rd-hero";
import { RdProblem } from "@/components/research-development/rd-problem";
import { RdCapabilities } from "@/components/research-development/rd-capabilities";
import { RdProcess } from "@/components/research-development/rd-process";
import { RdFaq } from "@/components/research-development/rd-faq";

export const metadata = {
  title:
    "Coffee Research & Development UAE — Applied Coffee Innovation & Coffee Technology | JPLC",
  description:
    "JPLC's R&D division is a working coffee R&D lab UAE — extraction science, roast profile engineering, flavor chemistry, product development, and applied coffee technology for serious operations.",
};

export default function ResearchDevelopmentPage() {
  return (
    <main>
      <RdHero />
      <RdProblem />
      <RdCapabilities />
      <RdProcess />
      <RdFaq />
    </main>
  );
}
