import { CoffeeBeansHero } from "@/components/coffee-beans/coffee-beans-hero";
import { CoffeeBeansProblem } from "@/components/coffee-beans/coffee-beans-problem";
import { CoffeeBeansSupply } from "@/components/coffee-beans/coffee-beans-supply";
import { CoffeeBeansProcess } from "@/components/coffee-beans/coffee-beans-process";
import { CoffeeBeansFaq } from "@/components/coffee-beans/coffee-beans-faq";

export const metadata = {
  title: "Specialty Coffee Beans Supplier UAE — JPLC",
  description:
    "JPLC supplies premium specialty coffee beans, custom blends, wholesale coffee beans, and private label ranges to cafés, hotels, restaurants, and brands across the UAE.",
};

export default function CoffeeBeansPage() {
  return (
    <main>
      <CoffeeBeansHero />
      <CoffeeBeansProblem />
      <CoffeeBeansSupply />
      <CoffeeBeansProcess />
      <CoffeeBeansFaq />
    </main>
  );
}
