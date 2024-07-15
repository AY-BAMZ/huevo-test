import ChooseUsWidget from "@/widgets/ChooseUs";
import Hero from "@/widgets/Hero";
import LayoutWrapper from "@/widgets/LayoutWrapper";
import OurOffer from "@/widgets/OurOffer";

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <ChooseUsWidget />
      <OurOffer />
    </LayoutWrapper>
  );
}
