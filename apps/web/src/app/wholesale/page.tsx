import { WholesaleHero } from "@/components/wholesale/wholesale-hero";
import { WholesaleProblem } from "@/components/wholesale/wholesale-problem";
import { WholesaleServices } from "@/components/wholesale/wholesale-services";
import { WholesaleProcess } from "@/components/wholesale/wholesale-process";
import { WholesaleFaq } from "@/components/wholesale/wholesale-faq";

export const metadata = {
  title: "Wholesale Coffee Supplier UAE — Bulk Supply & Distribution | JPLC",
  description:
    "JPLC is a wholesale coffee supplier and coffee distributor UAE-wide, supplying hotels, restaurants, cafés, and commercial operations with consistent bulk coffee supply and active account management.",
};

export default function WholesalePage() {
  return (
    <main>
      <WholesaleHero />
      <WholesaleProblem />
      <WholesaleServices />
      <WholesaleProcess />
      <WholesaleFaq />
    </main>
  );
}
