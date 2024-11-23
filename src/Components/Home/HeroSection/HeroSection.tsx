"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import heroImage from "@/assets/hero_ads.png";
import zeroIcon from "@/assets/SVG/Zero.svg";
import priceLevel from "@/assets/SVG/Pricelevel.svg";
import cam from "@/assets/SVG/video.svg";
import realTwo from "@/assets/IMG_7502.png";

export default function HeroSection() {
  // Variants for animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  return (
    <section className="flex relative flex-col lg:flex-row lg:justify-between justify-center lg:gap-4 w-full lg:items-center max-w-[1920px] h-full mx-auto lg:px-[100px] px-[20px] gap-7">
      <motion.div
        className="lg:mt-[100px] mt-[80px] z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <motion.h1
          className="lg:text-[48px] text-[40px] font-bold text-[#001F38]"
          variants={textVariants}
        >
          Unlock wealth by investing in
        </motion.h1>
        <motion.span
          className="lg:text-[48px] text-[40px] font-bold text-[#8CC63F] mr-2"
          variants={textVariants}
          custom={0.3}
        >
          Fyndly real estate!
        </motion.span>
        <motion.p
          className="text-[16px] text-[#001F38] mt-4 w-full lg:w-[70%]"
          variants={textVariants}
          custom={0.6}
        >
          Explore top real estate opportunities or get personalized guidance
          from our experts.
        </motion.p>
        <motion.div className="mt-[32px]" variants={buttonVariants}>
          <button className="lg:w-[200px] w-[150px] font-semibold h-[48px] border-[1px] border-white flex justify-center items-center bg-[#002E5D] rounded-md">
            Explore More
          </button>
        </motion.div>
        <div className="lg:flex z-20 hidden md:justify-between gap-6 mt-12 md:flex-row flex-wrap md:flex-nowrap">
          <motion.div
            className="h-[92px] min-w-[177px] flex flex-col px-3 gap-2 text-[#001F38] justify-center rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image src={zeroIcon} alt="zero" width={41} height={30} />
            <p className="text-[#001F38]">Zero Commissions</p>
          </motion.div>
          <motion.div
            className="h-[92px] min-w-[177px] flex flex-col px-3 gap-2 text-[#001F38] justify-center rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <p className="font-bold text-[20px]">Free</p>
            <p>Free Consultations</p>
          </motion.div>
          <motion.div
            className="h-[92px] min-w-[177px] w-[215px] flex flex-col px-3 gap-2 text-[#001F38] justify-center rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image src={priceLevel} alt="price level" width={28} height={28} />
            <p>Investment Assessment</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute right-0 w-[950px] h-[100%] top-[50px] lg:block hidden">
        <Image src={realTwo.src} fill alt="hero" className="object-contain" />
      </div>
    </section>
  );
}
