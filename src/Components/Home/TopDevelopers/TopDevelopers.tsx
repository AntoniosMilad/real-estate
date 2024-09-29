import Image from "next/image";
import React from "react";
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

  return (
    <section className="bg-[#F1F5FA] w-full min-h-[360px] h-auto  py-10 ">
      <div className="max-w-[1920px] mx-auto px-[20px] lg:px-[100px]">
        <p className="text-[#00152B] font-bold text-[36px]">Top Developers</p>
        <div className="mt-10 flex justify-center flex-wrap gap-2 ">
          {developersImg.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-white lg:w-[172px] h-[90px] px-1 flex justify-center items-center rounded-md hover:shadow-md hover:shadow-gray-400/30 m-2 transition-shadow duration-200 ease-linear"
              >
                <Image src={el.src} alt={el.src} width={140} height={32} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
