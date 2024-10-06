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
    <div className="pb-2">
      <p className="text-[#002E5D] text-2xl mb-4 font-bold">
        Suggested Properties
      </p>
      <Swiper
        spaceBetween={30}
        className="w-full !h-full !px-2"
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
      >
        {properties.map((property: Property, idx: number) => (
          <SwiperSlide key={idx} className="!h-[600px]">
            <PropertyCard content={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
