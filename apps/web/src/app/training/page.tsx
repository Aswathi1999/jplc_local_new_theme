import { TrainingHero } from "@/components/sections/training-hero";
import { TrainingSection } from "@/components/sections/training-section";

export const metadata = {
  title: "Coffee Training & Education — JPLC Coffee Academy",
  description:
    "Professional specialty coffee education for baristas, roasters, hospitality teams, and coffee professionals. Programmes covering barista certification, brewing, roasting, sensory evaluation, and hospitality operations.",
};

export default function TrainingPage() {
  return (
    <main>
      <TrainingHero />
      <TrainingSection />
    </main>
  );
}
