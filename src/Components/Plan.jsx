import React from "react";
import CircleArrow from "/src/assets/svg/right-circle.svg";

function Plan({ title, price, features, buttoncolor, bgcolor }) {
  return (
    <div
      className={`border-2 mb-6 ${bgcolor} text-[#000000] Plan-Card_section px-8 py-[40px] sm:w-[80%] md:w-[48%] lg:w-[30%] `}
    >
      <p className="text-[16px] mb-4 font-bold plan-section-titel uppercase">
        {title}
      </p>
      <p className="text-4xl font-bold plan-section-price mb-8">${price}</p>
      <button
        className={`relative mb-8 overflow-hidden ${buttoncolor} flex justify-center py-[12px] w-[100%] cursor-pointer duration-500 transition group`}
      >
        <span className="relative z-10 text-[14px] group-hover:text-white transition duration-500">
          Book a demo
        </span>
        <span className="absolute inset-0 bg-black transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      </button>

      <ul className="text-left space-y-2">
        {features.map((features, index) => (
          <li key={index} className="flex items-center font-medium">
            <img src={CircleArrow} className="pe-1.5" alt="" /> {features}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plan;
