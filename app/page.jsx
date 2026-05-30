import VillaHero from "@/components/home/VillaHero";
import VillaHeader from "@/components/header/VillaHeader";
import VillaOverviewSection from "@/components/overview/VillaOverviewSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <VillaHeader />
      <VillaHero />
      <VillaOverviewSection />
      <Footer />
    </>
  );
}
