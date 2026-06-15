import { HospitalityHero } from "@/components/hospitality/hospitality-hero";
import { HospitalityProblem } from "@/components/hospitality/hospitality-problem";
import { HospitalitySolutions } from "@/components/hospitality/hospitality-solutions";
import { HospitalityProcess } from "@/components/hospitality/hospitality-process";
import { HospitalityFaq } from "@/components/hospitality/hospitality-faq";

export const metadata = {
  title:
    "Hospitality Coffee Solutions UAE — Commercial Coffee Solutions for Hotels, Restaurants & F&B | JPLC",
  description:
    "JPLC delivers commercial coffee solutions built specifically for hospitality environments — hotels, restaurants, and F&B operations across the UAE.",
};

export default function HospitalitySolutionsPage() {
  return (
    <main>
      <HospitalityHero />
      <HospitalityProblem />
      <HospitalitySolutions />
      <HospitalityProcess />
      <HospitalityFaq />
    </main>
  );
}
