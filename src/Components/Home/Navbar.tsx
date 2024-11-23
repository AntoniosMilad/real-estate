"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/Screenshot_2024-10-06_at_9.40.48_am-removebg-preview.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm shadow-gray-400/25 z-50 text-black fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between px-6 lg:px-[100px] h-[80px] max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center space-x-6">
            <Image src={logo} alt="logo" width={95} height={30} />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a href="/" className="text-green-600 hover:text-green-500">
            Home
          </a>
          {/* Properties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPropertiesOpen(true)}
            onMouseLeave={() => setIsPropertiesOpen(false)}
          >
            <button className="text-gray-800 hover:text-gray-600">
              Properties
            </button>
            {isPropertiesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-lg mt-2 p-4">
                <a
                  href="/properties/residential"
                  className="block text-gray-700 hover:text-gray-500"
                >
                  Residential
                </a>
                <a
                  href="/properties/commercial"
                  className="block text-gray-700 hover:text-gray-500 mt-2"
                >
                  Commercial
                </a>
              </div>
            )}
          </div>

          <a href="/developers" className="text-gray-800 hover:text-gray-600">
            Developers
          </a>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button className="text-gray-800 hover:text-gray-600">
              Projects
            </button>
            {isProjectsOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-lg mt-2 p-4">
                <a
                  href="/projects/current"
                  className="block text-gray-700 hover:text-gray-500"
                >
                  Current Projects
                </a>
                <a
                  href="/projects/upcoming"
                  className="block text-gray-700 hover:text-gray-500 mt-2"
                >
                  Upcoming Projects
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="text-gray-800 hover:text-gray-600">
            About Us
          </a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button className="lg:flex hidden items-center space-x-1 text-gray-800 hover:text-gray-600">
            <span className="material-icons text-green-600">language</span>
            <span className="text-sm">العربية</span>
          </button>

          {/* Free Consultation Button */}
          <button className="lg:w-[200px] w-[160px] font-medium h-[48px] border-[1px] px-1 border-white text-white flex justify-center items-center bg-[#002E5D] rounded-md">
            Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
