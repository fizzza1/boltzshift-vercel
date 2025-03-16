import React, { useState } from "react";
import WebsiteLogo from "/src/assets/Images/website-logo.png";
function Header() {
  const [isOnclick, setOnclick] = useState("");
  return (
    <div className=" pt-[32px] bg-transparent bg-opacity-0 relative ">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div className="text-2xl cursor-pointer font-bold w-[123px]">
          <img src={WebsiteLogo} alt="" />
        </div>

        <nav className=" hidden md:flex justify-center gap-7">
          <button
            className={`cursor-pointer ${
              isOnclick == 1 ? "text-[#FAD008]" : ""
            }`}
            onClick={() => setOnclick(1)}
          >
            Home
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 2 ? "text-[#FAD008]" : ""
            }`}
            onClick={() => setOnclick(2)}
          >
            About
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 3 ? "text-[#FAD008]" : ""
            }`}
            onClick={() => setOnclick(3)}
          >
            Works
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 4 ? "text-[#FAD008]" : ""
            }`}
            onClick={() => setOnclick(4)}
          >
            Blog
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 5 ? "text-[#FAD008]" : ""
            }`}
            onClick={() => setOnclick(5)}
          >
            Contact
          </button>
        </nav>
        <div className="flex justify-end">
          <button className="relative bg-[#FAD008] hover:bg-white button-color duration-500 font-medium text-[14px] cursor-pointer px-[26px] py-2.5 transition group overflow-hidden">
            <span className="relative z-[10] ">Get in touch</span>

            <span className="z-[0] absolute inset-0 bg-white transform translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
