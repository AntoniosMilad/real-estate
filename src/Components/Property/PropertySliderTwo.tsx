import Image from "next/image";
import React from "react";

export default function PropertySliderTwo({ sliderImages }: { sliderImages: string[] }) {
  console.log(sliderImages, 'sliderImages');
  return (
    <section className="flex flex-col lg:flex-row gap-6 w-full h-[600px] mb-10">
      <div className="relative h-full w-full lg:w-[50%]">
        {sliderImages?.[0] && (
          <Image
            src={sliderImages[0]}
            alt="Property image"
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-6 w-full lg:w-[50%] h-full">
        {sliderImages?.[1] && (
          <div className="relative h-full w-full">
            <Image
              src={sliderImages[1]}
              alt="Property image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {sliderImages?.[2] && (
          <div className="relative h-full w-full">
            <Image
              src={sliderImages[2]}
              alt="Property image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {sliderImages?.[3] && (
          <div className="relative h-full w-full">
            <Image
              src={sliderImages[3]}
              alt="Property image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {sliderImages?.[4] && (
          <div className="relative h-full w-full">
            <Image
              src={sliderImages[4]}
              alt="Property image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
