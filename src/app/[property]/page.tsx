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

function DetailsButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <Image src={icon} alt={label} width={24} height={24} />
      <span className="font-medium text-gray-700">{label}</span>
    </button>
  );
}

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
        <p className="text-black flex gap-2 mb-10">
          <Link href="/" className="font-bold">
            Home /
          </Link>{" "}
          {decodeURIComponent(params.property)}
        </p>

        <PropertySliderTwo sliderImages={singleProperty?.sliderImages ?? []} />
        <div className="flex lg:flex-row flex-col my-10 w-full">
          <div className="w-full my-6">
            <div className="flex flex-row items-center gap-6 mb-10">
              <div className="flex justify-center items-center shadow-gray-300/30 shadow-lg rounded-md w-[130px] h-[70px]  lg:w-[130px] lg:h-[70px]">
                <div className="relative w-[100%] h-[30%]">
                  <Image
                    src={singleProperty?.DeveloperLogo as string}
                    alt={singleProperty?.Title as string}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#002E5D] lg:text-3xl font-bold">
                  {decodeURIComponent(params.property)}
                </p>
                <div className="flex items-center gap-1">
                  <Image src={location} alt="location" width={16} height={16} />
                  <p className="text-gray-400 font-semibold text-[14px]">
                    {singleProperty?.Location}
                  </p>
                </div>
                <div className=" border-gray-200 rounded-md w-full">
                  <div className="flex  gap-3 mt-3">
                    <div className="relative">
                      <p className="text-gray-400 text-[12px]">Max Price :</p>
                      <span className="text-black text-xl font-bold">
                        {singleProperty?.Price.monthlyInstallment} EGP
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-[12px]">Max Price :</p>
                      <p className="text-black text-xl font-bold flex items-center gap-1">
                        {singleProperty?.Price.TotalPrice} EGP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 my-10">
              <div className="bg-gray-100 w-[40%] p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  About Property
                </h3>
                <ul className="text-sm text-gray-600 space-y-7">
                  <li>
                    <span className="font-semibold">Size:</span>{" "}
                    {singleProperty?.Price.TotalPrice} m²
                  </li>
                  <li>
                    <span className="font-semibold">Reference No.:</span>{" "}
                    {singleProperty?.Price.TotalPrice}
                  </li>
                  <li>
                    <span className="font-semibold">Bedrooms:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Bathrooms:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Delivery In:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Compound:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Sale Type:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Status:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 w-[40%] p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Details Overview
                </h3>
                <ul className="text-sm text-gray-600 space-y-7">
                  {/* Repeat information as required */}
                  <li>
                    <span className="font-semibold">Size:</span>{" "}
                    {singleProperty?.Price.TotalPrice} m²
                  </li>
                  <li>
                    <span className="font-semibold">Reference No.:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Bedrooms:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Bathrooms:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Delivery In:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Compound:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Sale Type:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                  <li>
                    <span className="font-semibold">Status:</span>{" "}
                    {singleProperty?.Price.TotalPrice}{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-8">
              <h2 className="text-2xl font-semibold mb-4">Details</h2>
              <div className="flex flex-wrap gap-4">
                <DetailsButton icon={location} label="Floor Plan" />
                <DetailsButton icon={location} label="Gallery" />
                <DetailsButton icon={location} label="Master Plan" />
                <DetailsButton icon={location} label="View on Map" />
              </div>
            </div>
            <PlansDetails singleProperty={singleProperty} />
          </div>

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
