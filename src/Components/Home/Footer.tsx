import Image from "next/image";
import whatsapp from "@/assets/SVG/whatsapp.svg";
import phone from "@/assets/SVG/Phone.svg";
import cam from "@/assets/Screenshot_2024-10-06_at_9.40.48_am-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="lg:h-[315px] h-[100dvh] bg-[#04182b] w-full">
      <div className="relative w-full h-full">
        {/* <div className="gradient-overlay" /> */}
        {/* <Image
          src={
            "https://images.unsplash.com/photo-1726390733255-cf7467f6f6a5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="footer"
          fill
          className="object-cover"
        /> */}
        <article className="z-20 w-full h-full py-9">
          <div className="flex flex-col items-center justify-center h-full w-full gap-9">
            {/* <p className="font-bold text-[25px] lg:text-[40px]">
              Got Question? Chat or Call
            </p> */}
            {/* <div className="flex lg:flex-row flex-wrap justify-center gap-6">
              <div className="bg-white rounded-md flex gap-2 flex-col justify-center items-center w-[140px] lg:w-[225px] h-[85px] lg:h-[120px]">
                <Image src={cam} alt="whatsapp" width={40} height={40} />
                <p className="text-[#002E5D]">Free Consultation</p>
              </div>
              <div className="bg-[#f0fff2] rounded-md flex gap-2 flex-col justify-center items-center w-[140px] lg:w-[225px] h-[85px] lg:h-[120px]">
                <Image src={whatsapp} alt="whatsapp" width={40} height={40} />
                <p className="text-[#4CCA5B]">WhatsApp</p>
              </div>
              <div className="bg-white rounded-md flex gap-2 flex-col justify-center items-center w-[140px] lg:w-[225px] h-[85px] lg:h-[120px]">
                <Image src={phone} alt="whatsapp" width={40} height={40} />
                <p className="text-[#002E5D]">Phone</p>
              </div>
            </div> */}
            <div className=" w-full max-w-[80%] lg:max-w-[90%] mx-auto h-[380px] lg:h-[240px] overflow-y-scroll rounded-xl md:flex-row flex-col flex gap-6  p-8">
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
                <div className="flex gap-12 lg:gap-9 ">
                  <ol className="text-white list-disc list-inside ">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Properties</li>
                  </ol>
                  <ol className="text-white list-disc list-inside">
                    <li>Investment Opportunities</li>
                    <li>Expert Advice</li>
                    <li>Contact us</li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[#fff] text-[20px] font-bold">Legal</p>
                <ol className="text-white list-disc list-inside">
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
