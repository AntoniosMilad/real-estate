"use client";
import { properties, Property } from "@/data/properties";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../Home/TopOffers/PropertyCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SuggestedProperties() {
  return (
    <div className=" pb-2">
      <p className="text-[#002E5D] text-2xl mb-4 font-bold">
        Suggested Properties
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="w-full !h-full !px-2"
        navigation
        modules={[Navigation]}
      >
        {properties.map((property: Property, idx: number) => {
          return (
            <SwiperSlide key={idx} className="!w-[25%] !h-[600px]">
              <PropertyCard content={property} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
