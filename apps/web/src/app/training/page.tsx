import { TrainingHero } from "@/components/training/training-hero";
import { TrainingProblem } from "@/components/training/training-problem";
import { TrainingProgrammes } from "@/components/training/training-programmes";
import { TrainingProcess } from "@/components/training/training-process";
import { TrainingFaq } from "@/components/training/training-faq";

export const metadata = {
  title:
    "Barista Training UAE — Barista Courses Built for the Real Bar Environment | JPLC",
  description:
    "JPLC barista training programmes run from beginner foundation through to advanced certification — structured around real equipment, real coffee, and the specific demands of working café environments.",
};

export default function TrainingPage() {
  return (
    <main>
      <TrainingHero />
      <TrainingProblem />
      <TrainingProgrammes />
      <TrainingProcess />
      <TrainingFaq />
    </main>
  );
}
