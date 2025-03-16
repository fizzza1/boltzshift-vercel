import React from "react";
import HeroSectionBusinessImg from "/src/assets/Images/Hero-section-business-img.png";
import VideoReel from "/src/assets/Images/video-reel.png";
import ButtonArrow from "/src/assets/svg/link-arrow-right.svg";
function HeroSection() {
  return (
    <div className="grid grid-cols-1 mb-20">
      <section className="flex flex-col items-center justify-center text-center px-6 h-screen w-full bg-[radial-gradient(circle,rgba(72,61,9,1)_4%,#07070A_60%)]">
        <span className="flex gap-3">
          <h1 className="uppercase">We are</h1>
          <img
            src={HeroSectionBusinessImg}
            className="rounded-full w-[236px] h-[130px]"
            alt=""
          />
          <h1 className="uppercase">Creative</h1>
        </span>
        <span className="flex gap-4 mb-[43px] justify-center items-center">
          <h2 className="uppercase font-normal text-[92px]">agencies</h2>
          <img src={VideoReel} className="w-[271px] h-[110px]" alt="" />
          <div>
            <p className="grey text-[19px]">Award-winning studio</p>
            <p className=" grey text-[18px]">Based in San Francisco</p>
          </div>
        </span>

        <p className="white mb-7 max-w-160 text-[20px]">
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
