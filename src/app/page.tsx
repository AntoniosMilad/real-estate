import Footer from "@/Components/Home/Footer";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Investors from "@/Components/Home/Investors/Investors";
import Navbar from "@/Components/Home/Navbar";
import TopDevelopers from "@/Components/Home/TopDevelopers/TopDevelopers";
import TopOffers from "@/Components/Home/TopOffers/TopOffers";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen lg:h-[70dvh] bg-[#002E5D] flex items-center">
        <Navbar />
        <HeroSection />
      </section>
      <TopOffers />
      <TopDevelopers />
      <Investors />
      <Footer />
    </>
  );
}
