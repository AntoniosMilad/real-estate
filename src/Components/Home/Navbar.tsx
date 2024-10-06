import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white  shadow-sm shadow-gray-400/25 z-50 text-black flex flex-col justify-center  px-6 h-[80px] fixed top-0 left-0 w-full">
      <div className="lg:px-[100px] px-[20px] max-w-[1920px] mx-auto w-full">
      <Image src={logo} alt="logo" width={95} height={30} />

      </div>
    </nav>
  );
}
