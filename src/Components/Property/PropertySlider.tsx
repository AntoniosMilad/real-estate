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
    <div className="w-full h-[600px]  my-7 flex">
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          hoveredIndex !== null ? "w-[200px] grayscale" : "w-[45%]"
        }  h-full`}
      >
        <div
          className={`${
            hoveredIndex === null ? "bg-transparent" : "bg-black/30"
          } w-full absolute h-full z-10 top-0 left-0 rounded-l-lg transition-all ease-in-out duration-500`}
        />
        <Image
          src={sliderImages[0]}
          alt="Property image"
          fill
          className="object-cover rounded-l-lg"
        />
      </div>
      {sliderImages.slice(1).map((image, index) => (
        <div
          key={index}
          className={`relative h-full transition-all ease-in-out duration-500 ml-1 bg-white ${
            hoveredIndex === index ? "w-[45%]" : "w-[200px] grayscale"
          }`}
          onMouseEnter={() => {
            setHoveredIndex(index);
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`${
              hoveredIndex === index ? "bg-transparent" : "bg-black/30"
            } w-full absolute h-full z-10 top-0 left-0 transition-all ease-in-out duration-500`}
          />
          <Image
            src={image}
            alt={`Property image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
      <div className="relative flex-grow max-w-[120px] h-full ml-1">
        <div className="bg-black/30 w-full absolute h-full z-10 top-0 left-0 rounded-r-lg" />
        <Image
          src={sliderImages[0]}
          alt={`Property imag`}
          fill
          className="object-cover rounded-r-lg grayscale"
        />
      </div>
    </div>
  );
}
