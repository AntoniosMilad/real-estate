"use client";
import PropertySliderTwo from "@/Components/Property/PropertySliderTwo";
import SuggestedProperties from "@/Components/Property/SuggestedProperties";
import { properties, Property } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import location from "@/assets/SVG/location.svg";
import PlansDetails from "@/Components/Property/PlansDetails";
import status from "@/assets/SVG/Pricelevel.svg";
import whats from "@/assets/SVG/whatsBlue.svg";
import phone from "@/assets/SVG/Phone.svg";

export default function PropertyDetails({
  params,
}: {
  params: { property: string };
}) {
  const [singleProperty, setSingleProperty] = useState<Property | null>(null);
  useEffect(() => {
    const findedProperty = properties.find(
      (property) => property.Title === decodeURIComponent(params.property)
    );
    if (findedProperty) setSingleProperty(findedProperty);
  }, [params.property]);

  return (
    <section className="pt-[80px] min-h-[2000px] h-auto">
      <div className="mt-8">
        <p className="text-black flex gap-2">
          <Link href="/" className="font-bold">
            Home /
          </Link>{" "}
          {decodeURIComponent(params.property)}
        </p>
        <div className="w-full my-6">
          <div className="flex flex-row items-center gap-6">
            <div className="flex justify-center items-center shadow-gray-300/30 shadow-lg rounded-full w-[130px] h-[70px]  lg:w-[100px] lg:h-[100px]">
              <div className="relative w-[100%] h-[30%]">
                <Image
                  src={singleProperty?.DeveloperLogo as string}
                  alt={singleProperty?.Title as string}
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#002E5D] lg:text-2xl font-bold">
                 {decodeURIComponent(params.property)} 
                
              </p>
              <div className="flex items-center gap-1">
                <Image src={location} alt="location" width={16} height={16} />
                <p className="text-gray-400 font-semibold text-[14px]">
                  {singleProperty?.Location}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <PropertySlider /> */}
        <PropertySliderTwo sliderImages={singleProperty?.sliderImages}/>
        <div className="flex lg:flex-row flex-col my-10 w-full">
          <PlansDetails singleProperty={singleProperty} />
          <div className="border-[1px] border-gray-200 rounded-md flex-grow h-[400px] flex flex-col p-5 shadow-md shadow-gray-300/30">
            <div className="py-1  rounded-[20px] bg-gray-200 mb-4 w-[100px] flex flex-row items-center gap-2">
              <div className=" w-5 h-5 rounded-full flex justify-center items-center">
                <Image src={status} alt="Bedrooms" width={10} height={10} />
              </div>
              <p className="text-[12px] text-white font-bold">Good Price</p>
            </div>
            <p className="text-gray-400 text-base">Total</p>
            <p className="text-black text-xl font-bold flex items-center gap-1">
              {singleProperty?.Price.TotalPrice} EGP
            </p>
            <div className="flex items-center gap-5 my-3">
              <div className="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
                <Image src={phone} alt="Bedrooms" width={25} height={15} />
              </div>
              <div className="bg-green-400 w-10 h-10 flex justify-center items-center rounded-full">
                <Image src={whats} alt="Bedrooms" width={25} height={15} />
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <p className="text-[18px] text-black mb-2">
                Ready to Invest Smartly?
              </p>
              <p className="text-[#818181]">
                Get expert insights tailored to your needs.
              </p>
              <button className="w-[200px] text-center mx-auto font-semibold h-[48px] border-[1px] border-[#002E5D] text-[#002E5D] flex justify-center items-center bg-[#FFFFFF] rounded-md mt-[20px]">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <SuggestedProperties />
      </div>
    </section>
  );
}
