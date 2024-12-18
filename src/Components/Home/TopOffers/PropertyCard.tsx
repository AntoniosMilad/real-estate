"use client";
import React from "react";
import Image from "next/image";
import { Property } from "@/data/properties";
import bedroom from "@/assets/SVG/Beadroom.svg";
import bathroom from "@/assets/SVG/Washroom.svg";
import dim from "@/assets/SVG/Size.svg";
import mail from "@/assets/SVG/Mail.svg";
import whats from "@/assets/SVG/whatsBlue.svg";
import phone from "@/assets/SVG/Phone.svg";
import location from "@/assets/SVG/location.svg";
import status from "@/assets/SVG/Pricelevel.svg";
import share from "@/assets/SVG/heart.svg";
import heart from "@/assets/SVG/Share.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

interface PropertyCardProps {
  content: Property;
}

export default function PropertyCard({
  content: {
    Title,
    Location,
    unitStatus,
    DeliveryIn,
    DeveloperLogo,
    sliderImages,
    investmentStatus,
    Attributes,
    Price,
    AgentWhatsappNumber,
    AgentCallNumber,
    AgentEmail,
  },
}: PropertyCardProps) {
  return (
    <div className="w-full h-[530px] bg-white shadow-md shadow-gray-400/25 rounded-md">
      {/* Slider Section */}
      <div className="w-full h-[300px] relative  rounded-md">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {sliderImages?.map((el, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="bg-black/30 w-full absolute h-full z-10 top-0 left-0 rounded-md" />
                <Image
                  src={el}
                  alt="property image"
                  fill
                  className="rounded-t-md"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Top Section */}
        <div className="absolute flex justify-between w-full left-0 top-3 z-20">
          <div className="bg-white py-1 px-2 ml-2 rounded-[20px] flex flex-row items-center gap-2">
            <div className="bg-[#A32832] w-5 h-5 rounded-full flex justify-center items-center">
              <Image src={status} alt="Bedrooms" width={10} height={10} />
            </div>
            <p className="text-red-500 text-[12px]">{investmentStatus}</p>
          </div>
          <div className="flex items-center gap-2 pr-2">
            <button className="w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center">
              <Image src={heart} alt="Bedrooms" width={16} height={16} />
            </button>
            <button className="w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center">
              <Image src={share} alt="Bedrooms" width={16} height={16} />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute flex justify-between w-full left-0 bottom-3 z-20 h-10">
          <div className="bg-white px-2 ml-2 rounded-[8px] flex flex-row items-center gap-2">
            <Image src={DeveloperLogo} alt="logo" width={95} height={30} />
          </div>
          <div className="pr-2">
            <p>Delivery in</p>
            <p className="text-right">{DeliveryIn}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-[16px] relative">
        {/* Title and Status */}
        <div className="flex justify-between ">
          <Link href={`/${encodeURIComponent(Title)}`}>
            <h3 className="text-[#002E5D] font-bold">{Title}</h3>
          </Link>
          <div className="bg-[#00152B] py-1 px-2 ml-2 right-2 absolute rounded-[20px] flex flex-row items-center gap-2">
            <p className="text-white text-[12px]">{unitStatus}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <Image src={location} alt="Bedrooms" width={16} height={16} />
          <p className="text-[#002E5D] font-normal text-[12px]">{Location}</p>
        </div>

        {/* Attributes */}
        <div className="flex justify-between gap-2 mt-2">
          <div className="w-[120px] h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <p className="text-[#1F3144] font-bold">{Attributes.Bedrooms}</p>
            <Image src={bedroom} alt="Bedrooms" width={24} height={24} />
            <p className="text-[#8C96A0] text-[12px]">Bedrooms</p>
          </div>
          <div className="w-[120px] h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <p className="text-[#1F3144] font-bold">{Attributes.Bathrooms}</p>
            <Image src={bathroom} alt="Bedrooms" width={24} height={24} />
            <p className="text-[#8C96A0] text-[12px]">Bathrooms</p>
          </div>

          <div className="w-[80px]  h-[32px] bg-[#FCFDFD] flex items-center justify-center gap-2 border-[1px] border-[#F0F1F2] rounded-md ">
            <Image src={dim} alt="Bedrooms" width={24} height={24} />
            <p className="text-[#1F3144] font-bold">{Attributes.Space}</p>
            {/* <p className="text-[#8C96A0] text-[12px]">m</p> */}
          </div>
        </div>

        {/* Pricing */}
        <hr className="my-[16px]" />
        <div className="">
          <div>
            <span className="text-[#1F3144] text-[8px]">EGP</span>
            <span className="text-[#1F3144] text-[12px] ml-1">
              {Price.TotalPrice}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[#1F3144] text-[8px]">EGP</span>
            <span className="text-[#00152B] text-[14px] font-bold ml-1">
              {Price.monthlyInstallment} Monthly
            </span>
            <span className="text-[#8C96A0] text-[12px] font-bold ml-1">
              | {Price.yearsOfInstallment} years
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 ">
          {/* <button className="h-[32px] w-[100px] lg:w-[100px] flex items-center justify-center gap-1 bg-[#F1F5FA] text-[#002E5D] rounded-md mt-3">
            <Image src={mail} alt="Mail" width={14} height={11} />
            Mail
          </button> */}
          <button className="h-[32px] w-[48%] flex items-center justify-center gap-1 bg-[#F1F5FA] text-[#002E5D] rounded-md mt-3">
            <Image src={phone} alt="Call" width={14} height={11} />
            Call
          </button>
          <button className="h-[32px] min-w-[48%] flex items-center justify-center gap-1 bg-[#25D366] text-[#fff] rounded-md mt-3">
            <Image src={whats} alt="WhatsApp" width={14} height={11} />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
