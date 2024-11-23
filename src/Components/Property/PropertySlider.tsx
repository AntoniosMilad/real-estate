"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function PropertySlider() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1920px] mx-auto px-[20px] lg:px-[100px]">
      <p className="text-[#8cc63f] font-bold">Offer we Love</p>
      <p className="text-[#00152B] font-bold text-[36px]">Top Compounds</p>
      <div className="w-full h-full  lg:h-[600px]  my-7 flex lg:flex-row flex-col lg:gap-0 gap-3">
        <div
          className={`relative transition-all duration-500 ease-in-out ${
            hoveredIndex !== null
              ? "lg:w-[250px] w-[70%] grayscale"
              : "w-full lg:w-[40%]"
          }  lg:h-full h-[300px]`}
        >
          <div
            className={`${
              hoveredIndex === null ? "bg-transparent" : "bg-black/30"
            } w-full absolute h-full z-10 top-0 left-0 rounded-lg transition-all ease-in-out duration-500`}
          />
          <Image
            src={sliderImages[0]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
          {hoveredIndex === null ? (
            <>
              <div className="absolute top-[0px] right-[20px]">
                <button className="lg:w-[100px] lg:h-[100px] h-[60px] w-[60px] font-medium  border-[1px] text-[#002E5D] border-white flex justify-center items-center bg-white rounded-full mt-[32px]">
                  More
                </button>
              </div>
              <div className="absolute bottom-3 lg:bottom-[50px] left-[15px]">
                <p className="bg-opacity-40 bg-black p-1">
                  Salt in Ras El Hekma by Tatweer Misr
                </p>
                <p className="bg-opacity-40 bg-black p-1">45 Property</p>
                <button className="lg:w-[200px] w-[120px] font-medium h-[35px] lg:h-[48px] lg:px-0 px-2 border-[1px] lg:text-base text-sm text-[#002E5D] border-white flex justify-center items-center bg-white rounded-md mt-2 lg:mt-[32px]">
                  Explore More
                </button>
              </div>
            </>
          ) : (
            <div className="absolute lg:bottom-[20px] bottom-[100px] right-[30%] lg:right-[23%] z-10">
              <button className="lg:w-[100px] lg:h-[100px] h-[60px] w-[60px] font-medium  border-[1px] text-[#002E5D] border-white flex justify-center items-center bg-white rounded-full mt-[32px]">
                More
              </button>
              <p className="my-2">45 Property</p>
            </div>
          )}
        </div>
        {sliderImages.slice(1).map((image, index) => (
          <div
            key={index}
            className={`relative lg:h-full h-[300px] transition-all rounded-lg ease-in-out duration-500 ml-0 lg:ml-6 bg-white ${
              hoveredIndex === index
                ? "lg:w-[45%] w-full"
                : "lg:w-[250px] w-[70%] grayscale"
            }`}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`${
                hoveredIndex === index ? "bg-transparent" : "bg-black/30"
              } w-full absolute h-full z-10 top-0 left-0 rounded-lg transition-all ease-in-out duration-500`}
            />
            <Image
              src={image}
              alt={`Property image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            {hoveredIndex !== index ? (
              <div className="absolute lg:bottom-[20px] bottom-[100px] right-[30%] lg:right-[65px] z-10">
                <button className="lg:w-[100px] lg:h-[100px] h-[60px] w-[60px] font-medium  border-[1px] text-[#002E5D] border-white flex justify-center items-center bg-white rounded-full mt-[32px]">
                  More
                </button>
                <p className="my-2">45 Property</p>
              </div>
            ) : (
              <>
                <div className="absolute top-[0px] right-[20px]">
                  <button className="lg:w-[100px] lg:h-[100px] h-[60px] w-[60px] font-medium  border-[1px] text-[#002E5D] border-white flex justify-center items-center bg-white rounded-full mt-[32px]">
                    More
                  </button>
                </div>
                <div className="absolute bottom-3 lg:bottom-[50px] left-[15px]">
                  <p className="bg-opacity-40 bg-black p-1">
                    Salt in Ras El Hekma by Tatweer Misr
                  </p>
                  <p className="bg-opacity-40 bg-black p-1">45 Property</p>
                  <button className="lg:w-[200px] w-[120px] font-medium h-[35px] lg:h-[48px] lg:px-0 px-2 border-[1px] lg:text-base text-sm text-[#002E5D] border-white flex justify-center items-center bg-white rounded-md mt-2 lg:mt-[32px]">
                    Explore More
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {/* <div className="relative flex-grow max-w-[120px] h-full ml-1">
          <div className="bg-black/30 w-full absolute h-full z-10 top-0 left-0 rounded-r-lg" />
          <Image
            src={sliderImages[0]}
            alt={`Property imag`}
            fill
            className="object-cover rounded-r-lg grayscale"
          />
        </div> */}
      </div>
    </div>
  );
}
