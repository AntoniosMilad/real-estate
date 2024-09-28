import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";
import React, { ReactNode } from "react";

export default function PropertyLayout({ children }: { children: ReactNode }) {
  return (
    <section className="">
      <div className="px-[100px] max-w-[1920px] mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </section>
  );
}
