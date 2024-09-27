import Image from "next/image";
import React from "react";

export default function Investors() {
  return (
    <section className="bg-white w-full min-h-[490px] h-auto flex flex-col justify-center  px-[20px] py-10 max-w-[1920px] mx-auto lg:px-[100px]">
      <p className="text-[#00152B] font-bold text-[36px]">
        Hear from Our Satisfied Investors
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5 mt-10 ">
        <div className="w-full h-[175px] bg-white rounded-lg shadow-md shadow-gray-400/30 p-4">
          <p className="text-[#1F3144]">
            “Investing through was a game-changer for me. The detailed ROI
            projections and expert advice made it easy to choose the right”
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="avatar"
              width={57}
              height={57}
              className="rounded-full "
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#1F3144] font-bold">Maria Chen</p>
              <p className="text-[14px] text-[#1F3144]">Investor</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[175px] bg-white rounded-lg shadow-md shadow-gray-400/30 p-4">
          <p className="text-[#1F3144]">
            “Investing through was a game-changer for me. The detailed ROI
            projections and expert advice made it easy to choose the right”
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="avatar"
              width={57}
              height={57}
              className="rounded-full "
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#1F3144] font-bold">Maria Chen</p>
              <p className="text-[14px] text-[#1F3144]">Investor</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[175px] bg-white rounded-lg shadow-md shadow-gray-400/30 p-4">
          <p className="text-[#1F3144]">
            “Investing through was a game-changer for me. The detailed ROI
            projections and expert advice made it easy to choose the right”
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="avatar"
              width={57}
              height={57}
              className="rounded-full "
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#1F3144] font-bold">Maria Chen</p>
              <p className="text-[14px] text-[#1F3144]">Investor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
