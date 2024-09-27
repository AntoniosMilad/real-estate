import React from "react";
import Image from "next/image";
import heroImage from "@/assets/hero_ads.png";
import zeroIcon from "@/assets/SVG/Zero.svg";
import priceLevel from "@/assets/SVG/Pricelevel.svg";
import cam from "@/assets/SVG/video.svg";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-4 w-full items-center max-w-[1920px] mx-auto lg:px-[100px] px-[20px] ">
      <div>
        <h1 className="text-[48px] font-bold text-white">Start Investing</h1>
        <span className="text-[48px] font-bold text-white mr-2">with</span>
        <span className="text-[48px] font-bold text-[#F3D42D]">Confidence</span>
        <p className="text-[16px] text-white mt-4 w-[70%]">
          Explore top real estate opportunities or get personalized guidance
          from our experts.
        </p>
        <div>
          <div className="flex lg:flex-row flex-col items-center gap-6">
            <button className="w-[200px] font-semibold h-[48px] flex justify-center gap-2 items-center bg-[#005B5B] rounded-md mt-[32px]">
              <Image src={cam} alt="cam" width={24} height={24} />
              Free Consultation
            </button>
            <button className="w-[200px] font-semibold h-[48px] border-[1px] border-white flex justify-center items-center bg-[#002E5D] rounded-md mt-[32px]">
              View Properties
            </button>
          </div>
          <div className="flex md:justify-between gap-6 mt-12 md:flex-row flex-wrap md:flex-nowrap">
            <div className="h-[92px] min-w-[177px] flex flex-col px-3 gap-2 text-[#F1F5FA]  justify-center bg-[#0e3865] rounded-md">
              <Image src={zeroIcon} alt="zero" width={41} height={30} />
              <p className="">Zero Commissions</p>
            </div>
            <div className="h-[92px] min-w-[177px] flex flex-col px-3  gap-2 text-[#F1F5FA] justify-center bg-[#0e3865] rounded-md">
              <p className="font-bold text-[20px]">Free</p>
              <p>Free Consultations</p>
            </div>
            <div className="h-[92px] min-w-[177px] w-[215px] flex flex-col px-3  gap-2 text-[#F1F5FA] justify-center bg-[#0e3865] rounded-md">
              <Image src={priceLevel} alt="zero" width={28} height={28} />
              <p>Investment Assessment</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={heroImage.src} width={640} height={505} alt="hero" />
    </section>
  );
}
