import React from "react";
import VillaHeader from "@/components/header/VillaHeader";
import VillaHero from "@/components/home/VillaHero";
import VillaOverviewSection from "@/components/overview/VillaOverviewSection";

const Home = () => {
  return (
    <>
      <VillaHeader /> <VillaHero /> <VillaOverviewSection />
    </>
  );
};

export default Home;
