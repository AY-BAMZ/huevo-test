import ChooseUsWidget from "@/widgets/ChooseUs";
import Hero from "@/widgets/Hero";
import LayoutWrapper from "@/widgets/LayoutWrapper";

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <ChooseUsWidget />
    </LayoutWrapper>
  );
}
