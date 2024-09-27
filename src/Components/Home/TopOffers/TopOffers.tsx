import React from "react";
import PropertyCard from "./PropertyCard";
import { properties, Property } from "@/data/properties";

export default function TopOffers() {
  return (
    <section className="px-[20px] w-full h-auto my-[117px] lg:px-[100px] max-w-[1920px] mx-auto">
      <div className="mb-[32px] h-[76px] flex items-center ">
        <h3 className="text-[#00152B] text-[36px] font-bold">Offers we love</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5 mb-5 min-h-[30vh]">
        {properties.map((property: Property, idx: number) => {
          return <PropertyCard key={idx} content={property} />;
        })}
      </div>
      <button className="w-[200px] text-center mx-auto font-semibold h-[48px] border-[1px] border-[#002E5D] text-[#002E5D] flex justify-center items-center bg-[#FFFFFF] rounded-md mt-[32px]">
        View more Property
      </button>
    </section>
  );
}
