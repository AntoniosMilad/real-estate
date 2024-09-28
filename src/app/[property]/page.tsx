"use client";
import PropertySlider from "@/Components/Property/PropertySlider";
import SuggestedProperties from "@/Components/Property/SuggestedProperties";
import { properties, Property } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  console.log(singleProperty);

  return (
    <section className="pt-[80px] h-[2000px]">
      <div className="mt-8">
        <p className="text-black flex gap-2">
          <Link href="/" className="font-bold">
            Home /
          </Link>{" "}
          {decodeURIComponent(params.property)}
        </p>
        <PropertySlider />
        <div className="w-full h-[300px]">
          <div className="flex flex-row items-center gap-6">
            <div className="flex justify-center items-center shadow-gray-300/30 shadow-lg rounded-full  w-[100px] h-[100px]">
              <div className="relative w-[100%] h-[30%]">
                <Image
                  src={singleProperty?.DeveloperLogo as string}
                  alt={singleProperty?.Title as string}
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#002E5D] text-2xl font-bold">
                Apartment for sale in {decodeURIComponent(params.property)} with
                2 Bedrooms
              </p>
              <p className="text-gray-400 font-semibold text-[14px]">
                {singleProperty?.Location}
              </p>
              <div className="flex items-end gap-6 mt-1">
                <div className="relative">
                  <p className="text-gray-400 text-[10px] before:content-['Prices_start_from:_'] before:block before:text-gray-400 before:text-[10px]">
                    <span className="text-black text-xl font-bold">
                      {singleProperty?.Price.monthlyInstallment} EGP
                    </span>
                  </p>
                </div>

                <p className="text-black text-xl font-bold flex items-center gap-1">
                  <span className="text-gray-400 text-[12px]">Max Price :</span>{" "}
                  {singleProperty?.Price.TotalPrice} EGP
                </p>
              </div>
            </div>
          </div>
        </div>
        <SuggestedProperties />
      </div>
    </section>
  );
}
