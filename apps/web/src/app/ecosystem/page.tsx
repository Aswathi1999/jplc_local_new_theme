import { EcosystemHero } from "@/components/ecosystem/ecosystem-hero";
import { EcosystemProblem } from "@/components/ecosystem/ecosystem-problem";
import { EcosystemVerticals } from "@/components/ecosystem/ecosystem-verticals";
import { EcosystemIntegration } from "@/components/ecosystem/ecosystem-integration";
import { EcosystemFaq } from "@/components/ecosystem/ecosystem-faq";

export const metadata = {
  title:
    "Integrated Coffee Ecosystem UAE — Supply, Engineering & Training | JPLC",
  description:
    "JPLC is an integrated coffee ecosystem UAE businesses and global partners rely on — covering coffee sourcing, roasting, equipment engineering, distribution, private label manufacturing, and barista training under one roof.",
};

export default function EcosystemPage() {
  return (
    <main>
      <EcosystemHero />
      <EcosystemProblem />
      <EcosystemVerticals />
      <EcosystemIntegration />
      <EcosystemFaq />
    </main>
  );
}
