import { EquipmentServiceHero } from "@/components/equipment-service/equipment-service-hero";
import { EquipmentServiceProblem } from "@/components/equipment-service/equipment-service-problem";
import { EquipmentServiceServices } from "@/components/equipment-service/equipment-service-services";
import { EquipmentServiceProcess } from "@/components/equipment-service/equipment-service-process";
import { EquipmentServiceFaq } from "@/components/equipment-service/equipment-service-faq";

export const metadata = {
  title:
    "Coffee Machine Maintenance, Repair & Coffee Equipment Service — UAE-Wide Technical Support | JPLC",
  description:
    "JPLC provides coffee machine maintenance, coffee machine repair, and ongoing coffee equipment service for commercial operations across the UAE, managed by the same engineering team that installs the equipment.",
};

export default function EquipmentServicePage() {
  return (
    <main>
      <EquipmentServiceHero />
      <EquipmentServiceProblem />
      <EquipmentServiceServices />
      <EquipmentServiceProcess />
      <EquipmentServiceFaq />
    </main>
  );
}
