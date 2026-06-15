import { CommercialMachinesHero } from "@/components/commercial-machines/commercial-machines-hero";
import { CommercialMachinesProblem } from "@/components/commercial-machines/commercial-machines-problem";
import { CommercialMachinesProducts } from "@/components/commercial-machines/commercial-machines-products";
import { CommercialMachinesProcess } from "@/components/commercial-machines/commercial-machines-process";
import { CommercialMachinesFaq } from "@/components/commercial-machines/commercial-machines-faq";

export const metadata = {
  title:
    "Commercial Coffee Machines UAE — Supply, Installation & Servicing | JPLC",
  description:
    "JPLC supplies, installs, and services commercial coffee machines for cafés, hotels, restaurants, and corporate operations across the UAE. In-house engineering capability from an espresso machine supplier with direct accountability.",
};

export default function CommercialCoffeeMachinesPage() {
  return (
    <main>
      <CommercialMachinesHero />
      <CommercialMachinesProblem />
      <CommercialMachinesProducts />
      <CommercialMachinesProcess />
      <CommercialMachinesFaq />
    </main>
  );
}
