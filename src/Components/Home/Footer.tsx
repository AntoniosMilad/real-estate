import Image from "next/image";
import whatsapp from "@/assets/SVG/whatsapp.svg";
import phone from "@/assets/SVG/Phone.svg";
import cam from "@/assets/Screenshot_2024-10-06_at_9.40.48_am-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="lg:h-[315px] h-[90dvh] bg-[#04182b] w-full">
      <div className="relative w-full h-full">
        <article className="z-20 w-full h-full py-9">
          <div className="flex flex-col items-center justify-center h-full w-full gap-9">
            <div className=" w-full max-w-[100%] lg:max-w-[90%] mx-auto lg:h-[240px]  rounded-xl md:flex-row flex-col flex gap-6  p-8">
              <div className="flex flex-col gap-0 w-full lg:w-[33%]">
                <Image src={cam.src} width={123} height={4} alt="fff" />
                <p className="text-[#fff]">
                  Lorem ipsum dolor sit amet consectetur. Arcu nulla eros
                  elementum massa eget nibh. Auctor posuere dui habitasse dictum
                </p>
              </div>
              <div className="flex flex-col gap-6 w-full lg:w-[40%]">
                <p className="text-[#fff] text-[20px] font-bold">
                  Navigation Links
                </p>
                <div className="flex lg:flex-row flex-col gap-2 lg:gap-9 ">
                  <ol className="text-white lg:text-base text-sm list-disc list-inside space-y-1 ">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Properties</li>
                  </ol>
                  <ol className="text-white list-disc list-inside lg:text-base text-sm  space-y-1">
                    <li>Investment Opportunities</li>
                    <li>Expert Advice</li>
                    <li>Contact us</li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:text-base text-sm ">
                <p className="text-[#fff] text-[20px] font-bold">Legal</p>
                <ol className="text-white list-disc list-inside  space-y-1">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                </ol>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="bg-black/85 w-full h-[62px] flex justify-center items-center">
        <p>Copyright © 2024 </p>
      </div>
    </footer>
  );
};

export default Footer;
