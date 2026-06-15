import { PrivateLabelHero } from "@/components/private-label/private-label-hero";
import { PrivateLabelProblem } from "@/components/private-label/private-label-problem";
import { PrivateLabelServices } from "@/components/private-label/private-label-services";
import { PrivateLabelProcess } from "@/components/private-label/private-label-process";
import { PrivateLabelFaq } from "@/components/private-label/private-label-faq";

export const metadata = {
  title: "Private Label Coffee & OEM Coffee Manufacturing UAE — JPLC",
  description:
    "JPLC is a full-service white label coffee supplier and OEM coffee manufacturing partner in the UAE. From roast profile development to retail packaging — launch your coffee brand from our DMCC-certified facility.",
};

export default function PrivateLabelPage() {
  return (
    <main>
      <PrivateLabelHero />
      <PrivateLabelProblem />
      <PrivateLabelServices />
      <PrivateLabelProcess />
      <PrivateLabelFaq />
    </main>
  );
}
