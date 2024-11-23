import React from "react";
import Image from "next/image";
import heroImage from "@/assets/hero_ads.png";
import zeroIcon from "@/assets/SVG/Zero.svg";
import priceLevel from "@/assets/SVG/Pricelevel.svg";
import cam from "@/assets/SVG/video.svg";
import realone from "@/assets/rb_208 1.png";
import realTwo from "@/assets/IMG_7502.png";

export default function HeroSection() {
  return (
    <section className="flex relative flex-col lg:flex-row lg:justify-between justify-center lg:gap-4 w-full lg:items-center max-w-[1920px] h-full mx-auto lg:px-[100px] px-[20px] gap-7">
      <div className="lg:mt-[100px] mt-[80px] z-10">
        <h1 className="lg:text-[48px] text-[40px] font-bold text-[#001F38] ">
          Unlock wealth by investing in
        </h1>
        <span className="lg:text-[48px] text-[40px] font-bold text-[#8CC63F] mr-2 ">
          Fyndly real estate!
        </span>
        <p className="text-[16px] text-[#001F38] mt-4 w-full lg:w-[70%] ">
          Explore top real estate opportunities or get personalized guidance
          from our experts.
        </p>
        <div className="">
          <div className="flex flex-row  items-center gap-6">
            <button className="lg:w-[200px] w-[150px] font-semibold h-[48px] border-[1px] border-white flex justify-center items-center bg-[#002E5D] rounded-md mt-[32px]">
              Explore More
            </button>
          </div>
          <div className="lg:flex z-20 hidden md:justify-between gap-6 mt-12 md:flex-row flex-wrap md:flex-nowrap">
            <div className="h-[92px] min-w-[177px] flex flex-col px-3 gap-2 text-[#001F38]  justify-center  rounded-md">
              <Image src={zeroIcon} alt="zero" width={41} height={30} />
              <p className="text-[#001F38]">Zero Commissions</p>
            </div>
            <div className="h-[92px] min-w-[177px] flex flex-col px-3  gap-2 text-[#001F38] justify-center  rounded-md">
              <p className="font-bold text-[20px]">Free</p>
              <p>Free Consultations</p>
            </div>
            <div className="h-[92px] min-w-[177px] w-[215px] flex flex-col px-3  gap-2 text-[#001F38] justify-center  rounded-md">
              <Image src={priceLevel} alt="zero" width={28} height={28} />
              <p>Investment Assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 w-[950px] h-[100%] top-[50px] lg:block hidden">
        <Image src={realTwo.src} fill alt="hero" className="object-contain" />
      </div>
    </section>
  );
}
