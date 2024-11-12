import { Property } from "@/data/properties";
import React from "react";

export default function PlansDetails(props: {
  singleProperty: Property | null;
}) {
  return (
    <section className="flex flex-col gap-6 w-full lg:w-[80%]">
      {/* <article className="flex lg:flex-row flex-col gap-6 ">
        <div className="border-[1px] border-gray-200 rounded-md w-full lg:w-[15%] h-[255px] flex flex-col items-center py-5">
          <p className="text-[#002E5D] text-[18px] font-bold">Payment Plans</p>
          <div className="flex flex-col gap-3 mt-3">
            <div className="relative">
              <span className="text-black text-xl font-bold">
                {props.singleProperty?.Price.monthlyInstallment} EGP
              </span>
              <p className="text-gray-400 text-[12px]">Max Price :</p>
            </div>
            <div>
              <p className="text-black text-xl font-bold flex items-center gap-1">
                {props.singleProperty?.Price.TotalPrice} EGP
              </p>
              <p className="text-gray-400 text-[12px]">Max Price :</p>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 rounded-md w-full lg:w-[30%] h-[255px] flex flex-col p-5">
          <p className="text-[#002E5D] text-[18px] font-bold">Details</p>
          <div className="flex gap-9 mt-5">
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Home</li>
              <li>About us</li>
              <li>Properties</li>
            </ol>
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Investment</li>
              <li>Expert Advice</li>
              <li>Contact us</li>
            </ol>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 rounded-md w-full lg:w-[50%] min-h-[255px] flex flex-col p-5">
          <p className="text-[#002E5D] text-[18px] font-bold">Amenities</p>
          <div className="flex flex-wrap gap-9 mt-5">
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Home</li>
              <li>About us</li>
              <li>Properties</li>
            </ol>
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Investment</li>
              <li>Expert Advice</li>
              <li>Contact us</li>
            </ol>
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Investment</li>
              <li>Expert Advice</li>
              <li>Contact us</li>
            </ol>
            <ol className="text-black list-disc list-inside space-y-3">
              <li>Investment</li>
              <li>Expert Advice</li>
              <li>Contact us</li>
            </ol>
          </div>
        </div>
      </article> */}
      <article>
        <p className="text-[#002E5D] text-[18px] font-bold">About Apartment</p>
        <p className="my-3 w-full lg:w-[65%] text-black text-[15px] text-justify leading-[27px]">
          {props.singleProperty?.AboutUnit}
        </p>
        {/* <p className="my-3 w-full lg:w-[65%] text-black text-[15px] text-justify leading-[27px] lg:line-clamp-none line-clamp-6">
          A 2 bedroom Apartment in ZED by Ora Developers. The Apartment size is
          127 m2 with 3 bathrooms and a terrace of 38 m2 . This property will be
          ready for delivery finished by 2028-01-01. Unique Selling Points of
          Zed West Y Towers Mall Y Tower Mall is placed at the crown of Zed Park
          El-Sheikh Zayed. It grants the guests access to boundless shopping
          experiences, as well as food and beverage venues. It consists of two
          floors dedicated to dazzling commercial journeys. It is also a
          hospitality gateway and a fine dining experience.  Zed Park The
          dynamic soul of ZED Park has the power to ignite energy and happiness
          for everyone. It is stretched over 65 acres of breathtaking greenery.
          ZED Park offers you a wide range of restaurants, cafes, diverse
          entertainment venues, workspaces, and yoga spaces. Zed Sports Complex
          For all sports enthusiasts, ZED El Sheikh Zayed features a sports
          complex with a variety of physical activities. It also includes court
          rentals, academies, and many other services.
        </p> */}
      </article>
    </section>
  );
}
