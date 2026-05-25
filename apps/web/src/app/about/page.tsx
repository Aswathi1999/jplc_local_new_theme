import { AboutHero } from "@/components/about/about-hero";
import { CompanyStory } from "@/components/about/company-story";
import { MissionVision } from "@/components/about/mission-vision";
import { TeamSection } from "@/components/about/team-section";
import { GlobalInfrastructure } from "@/components/about/global-infrastructure";
import { AboutCta } from "@/components/about/about-cta";

export const metadata = {
  title: "About Us — JPLC | Specialty Coffee Infrastructure Company",
  description:
    "JPLC is a modern specialty coffee infrastructure company operating across sourcing, roasting, engineering, research, manufacturing, hospitality, and training.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <TeamSection />
      <GlobalInfrastructure />
      <AboutCta />
    </main>
  );
}
