import Image from "next/image";
import React from "react";

export default function PropertySliderTwo() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <section className="flex flex-col lg:flex-row gap-6 w-full h-[600px] mb-10">
      <div className="relative h-full w-full lg:w-[50%]">
        <Image
          src={sliderImages[0]}
          alt="Property image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 w-full lg:w-[50%] h-full">
        <div className="relative h-full w-full">
          <Image
            src={sliderImages[1]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={sliderImages[2]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={sliderImages[3]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={sliderImages[4]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
