import React from "react";
import CardArrow from "/src/assets/svg/cardArrow.svg";

function Card({ bgColor, cardTitle, cardPara, imageSrc }) {
  return (
    <div
        className={`card group ${bgColor} md:w-[60%] lg:w-[49%] p-[32px] mb-5 transition-all cursor-pointer duration-300 ease-in-out `}
    >
      <div className="flex justify-between mb-[34px]">
        <img src={imageSrc} className="w-[64px]" />
        <img
          src={CardArrow}
          alt=""
          className="opacity-0 w-[43px] flex justify-start mt-[-22px] items-start 
  group-hover:opacity-100 
  group-hover:translate-y-[-15px] 
  group-hover:translate-x-[20px] 
  transition-all duration-600 ease-in-out"
        />

      </div>
      <div>
        <h2 className="mb-5 tracking-wide white duration-300">
          {cardTitle}
        </h2>
        <p className="white duration-300">{cardPara}</p>
      </div>
    </div>
  );
}

export default Card;
