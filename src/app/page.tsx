import ContactForm from "@/Components/Home/ContactForm/ContactForm";
import Footer from "@/Components/Home/Footer";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Investors from "@/Components/Home/Investors/Investors";
import Navbar from "@/Components/Home/Navbar";
import TopAreasCarousel from "@/Components/Home/TopAreaCarousel/TopAreaCarousel";
import TopDevelopers from "@/Components/Home/TopDevelopers/TopDevelopers";
import TopOffers from "@/Components/Home/TopOffers/TopOffers";
import PropertySlider from "@/Components/Property/PropertySlider";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen lg:h-[75dvh] bg-white flex items-center">
        <Navbar />
        <HeroSection />
      </section>
      <TopDevelopers />
      <TopOffers />
      <PropertySlider />
      <TopAreasCarousel />
      {/* <Investors /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
