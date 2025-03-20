import React from "react";
import HeroSectionBusinessImg from "/src/assets/Images/Hero-section-business-img.png";
import VideoReel from "/src/assets/Images/video-reel.png";
import ButtonArrow from "/src/assets/svg/link-arrow-right.svg";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:mb-1 sm:mb-10 md:mb-10">
      <section className="HeroSection flex flex-col items-center justify-center text-center px-6 h-screen w-full">
        <span className="flex flex-col sm:flex-row gap-3 sm:mb-6 mb-1 items-center justify-center text-center">
          <div className="flex gap-3">
          <h1 className="uppercase text-[33px] sm:text-[33px] md:text-[47px] lg:text-[90px]">We are</h1>  
          <img
            src={HeroSectionBusinessImg}
            className="rounded-full w-[118px] h-[51px] md:w-[121px] md:h-[51px] lg:w-[236px]  lg:h-[130px]"
            alt=""
            />
            </div>
          <h1 className="uppercase text-[33px] sm:text-[33px] md:text-[47px] lg:text-[90px] ">Creative</h1>
        </span>

        <span className="flex flex-col sm:flex-row gap-3 mb-[43px] justify-center items-center">
          <h2 className="uppercase font-normal text-[28px] sm:text-[28px] md:text-[47px] lg:text-[90px]">agencies</h2>
          <img src={VideoReel} className=" w-[110px] h-[41px] md:w-[121px] md:h-[51px] lg:w-[236px] lg:h-[130px]" alt="" />
          <div className="hidden sm:flex justify-center flex-col">
            <p className="grey text-[16px] md:text-[16px] lg:text-[19px]">Where Quality </p>
            <p className=" grey text-[15px] md:text-[15px] lg:text-[18px]">Meets Affordability</p>
          </div>
        </span>

        <p className="white mb-7 max-w-160 text-[14px] lg:text-[20px]">
          BoltzSift Studio is a design & develop agency of the future with 120+
          succeful projects in their portfolio
        </p>
        <button className="relative overflow-hidden hover:bg-white bg-[#FAD008] flex button-color gap-2 py-[16px] px-[30px] cursor-pointer duration-500 transition group">
          <span className="relative z-10 text-black group-hover:text-black transition duration-500">
            Book a demo
          </span>
          <span className="relative z-10">
            <img src={ButtonArrow} alt="" />
          </span>
          <span className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        </button>
      </section>
    </div>
  );
}

export default HeroSection;
