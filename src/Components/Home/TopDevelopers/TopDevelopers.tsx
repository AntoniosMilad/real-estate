"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import dev1 from "@/assets/Developer Logos/01.png";
import dev2 from "@/assets/Developer Logos/02.png";
import dev3 from "@/assets/Developer Logos/03.png";
import dev4 from "@/assets/Developer Logos/04.png";
import dev5 from "@/assets/Developer Logos/05.png";
import dev6 from "@/assets/Developer Logos/06.png";
import dev7 from "@/assets/Developer Logos/07.png";
import dev8 from "@/assets/Developer Logos/08.png";
import dev9 from "@/assets/Developer Logos/09.png";

export default function TopDevelopers() {
  const developersImg = [
    { src: dev1.src, alt: "Roya" },
    { src: dev2.src, alt: "Dev 2" },
    { src: dev3.src, alt: "Dev 3" },
    { src: dev4.src, alt: "Dev 4" },
    { src: dev5.src, alt: "Dev 5" },
    { src: dev6.src, alt: "Dev 6" },
    { src: dev7.src, alt: "Dev 7" },
    { src: dev8.src, alt: "Dev 8" },
    { src: dev9.src, alt: "Dev 9" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full min-h-[360px] h-auto py-10">
      <div className="max-w-[1920px] mx-auto px-[20px] lg:px-[100px]">
        <motion.p
          className="text-[#00152B] font-bold text-[36px]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Top Developers
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {developersImg.map((el, idx) => (
            <motion.div
              key={idx}
              className="bg-[#f2f2f2] lg:w-[172px] h-[90px] px-1 flex justify-center items-center rounded-md hover:shadow-md hover:shadow-gray-400/30 m-2 transition-shadow duration-200 ease-linear"
              variants={cardVariants}
            >
              <Image src={el.src} alt={el.alt} width={140} height={32} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
