import ClientSays from "@/widgets/ClientSays";
import Process from "@/components/Process/Index";
import ChooseUsWidget from "@/widgets/ChooseUs";
import Hero from "@/widgets/Hero";
import LayoutWrapper from "@/widgets/LayoutWrapper";
import OurOffer from "@/widgets/OurOffer";
import StartUpIdeas from "@/widgets/StartUpIdeas";

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <ChooseUsWidget />
      <StartUpIdeas />
      <OurOffer />
      <ClientSays />
      <Process />
    </LayoutWrapper>
  );
}
