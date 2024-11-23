"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useRef } from "react";
import SwiperType from "swiper";

const TopAreasCarousel = () => {
  const topAreas = [
    {
      city: "6th of October City",
      compounds: 101,
      properties: 1317,
      image:
        "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/34893/palm_hills_new_cairo7.jpg",
    },
    {
      city: "New Capital City",
      compounds: 130,
      properties: 1380,
      image:
        "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/34893/palm_hills_new_cairo7.jpg",
    },
    {
      city: "New Cairo",
      compounds: 198,
      properties: 2671,
      image:
        "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/34893/palm_hills_new_cairo7.jpg",
    },
  ];

  const mainSwiperRef = useRef<{ swiper: SwiperType }>(null);
  const leftButton = useRef(null);
  const rightButton = useRef(null);

  const handlePrev = useCallback(() => {
    if (!mainSwiperRef.current) return;
    mainSwiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!mainSwiperRef.current) return;
    mainSwiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center  gap-6 lg:gap-10 py-8 px-[20px] w-full h-auto my-[50px] lg:my-[117px] lg:px-[100px] max-w-[1920px] mx-auto">
      {/* Left Text Section */}
      <div className="max-w-xs">
        <h4 className="text-green-600 font-semibold mb-2">Offer we Love</h4>
        <h2 className="text-3xl font-bold mb-4 text-[#001f38]">Top Areas</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Arcu nulla eros elementum
          massa eget nibh.
        </p>
        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            ref={leftButton}
            className="bg-gray-200 rounded-full w-10 h-10 hover:bg-gray-300 transition"
          >
            <span className="text-gray-700">←</span>
          </button>
          <button
            onClick={handleNext}
            ref={rightButton}
            className="bg-gray-200 rounded-full w-10 h-10 hover:bg-gray-300 transition"
          >
            <span className="text-gray-700">→</span>
          </button>
        </div>
      </div>

      {/* Swiper Carousel Section */}
      <Swiper
        navigation={{
          prevEl: leftButton.current,
          nextEl: rightButton.current,
        }}
        onBeforeInit={(swiper) => {
          if (rightButton.current && leftButton.current) {
            swiper.navigation.nextEl = rightButton.current;
            swiper.navigation.prevEl = leftButton.current;
          }
        }}
        ref={mainSwiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        className="!p-4 w-full"
      >
        {topAreas.map((area, index) => (
          <SwiperSlide
            key={index}
            className="rounded-lg shadow-md shadow-gray-300/20 overflow-hidden !w-full  lg:!w-[35%]"
          >
            <div className="relative">
              <img
                src={area.image}
                alt={area.city}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl text-[#001f38] font-semibold mb-1">
                {area.city}
              </h3>
              <p className="text-[#001f38] text-[18px] ">
                {area.compounds} Compounds
              </p>
              <p className="text-[#001f38] text-[18px] ">
                {area.properties} Properties Available
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopAreasCarousel;
