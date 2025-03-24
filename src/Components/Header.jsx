import React, { useState } from "react";
import WebsiteLogo from "/src/assets/Images/website-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import HamburgerIcon from "/src/assets/svg/Mobile-Menu-toggle.svg"
import Close from "/src/assets/svg/icone-fermer-et-x-jaune-removebg-preview.png"

function Header({ scrollToSection }) {
  const [isOnclick, setOnclick] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" pt-[32px] bg-transparent bg-opacity-0 relative ">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-2xl cursor-pointer font-bold w-[123px]">
          <img src={WebsiteLogo} alt="" />
        </div>

        <nav className=" hidden justify-center sm:text-[14px] md:flex gap-7">
          <button
            className={`cursor-pointer  ${
              isOnclick == 1 ? "text-[#FAD008]" : ""
            }`}
            // onClick={() => setOnclick(1)}
            onClick={() => {
              scrollToSection("hero-section");
              setOnclick(1);
            }}
          >
            Home
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 2 ? "text-[#FAD008]" : ""
            }`}
            // onClick={() => setOnclick(2)}
            onClick={() => {
              scrollToSection("services-section");
              setOnclick(2);
            }}
          >
            Our Services
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 3 ? "text-[#FAD008]" : ""
            }`}
            // onClick={() => setOnclick(3)}
            onClick={() => {
              scrollToSection("testimonials-section");
              setOnclick(3);
            }}
          >
            People Trust
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 4 ? "text-[#FAD008]" : ""
            }`}
            // onClick={() => setOnclick(4)}
            onClick={() => {
              scrollToSection("booking-section");
              setOnclick(4);
            }}
          >
            Free Appointement
          </button>
          <button
            className={`cursor-pointer ${
              isOnclick == 5 ? "text-[#FAD008]" : ""
            }`}
            // onClick={() => setOnclick(5)}
            onClick={() => {
              scrollToSection("plans-section");
              setOnclick(5);
            }}
          >
            Plans
          </button>
        </nav>

        <div className="md:flex hidden justify-end">
          <button className="relative bg-[#FAD008] hover:bg-white button-color duration-500 font-medium text-[14px] cursor-pointer px-[26px] py-2.5 transition group overflow-hidden">
            <span className="relative z-[10] ">Get in touch</span>

            <span className="z-[0] absolute inset-0 bg-white transform translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>
        <div className="md:hidden flex justify-end relative">
          <button
            className="text-3xl cursor-pointer z-[1000] fixed top-5"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <img src={Close} className="w-8" /> : <img src={HamburgerIcon} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 z-[11] left-0 w-full h-[50vh] text-black bg-white flex justify-center items-center">
          <nav className="flex flex-col justify-center xl:text-[14px] gap-7">
            <button
              className={`cursor-pointer ${
                isOnclick == 1 ? "text-[#FAD008]" : ""
              }`}
              onClick={() => {
                scrollToSection("hero-section");
                setOnclick(1);
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              className={`cursor-pointer ${
                isOnclick == 2 ? "text-[#FAD008]" : ""
              }`}
              onClick={() => {
                scrollToSection("services-section");
                setOnclick(2);
                setMenuOpen(false);
              }}
            >
              Our Services
            </button>
            <button
              className={`cursor-pointer ${
                isOnclick == 3 ? "text-[#FAD008]" : ""
              }`}
              onClick={() => {
                scrollToSection("testimonials-section");
                setOnclick(3);
                setMenuOpen(false);
              }}
            >
              People Trust
            </button>
            <button
              className={`cursor-pointer ${
                isOnclick == 4 ? "text-[#FAD008]" : ""
              }`}
              onClick={() => {
                scrollToSection("booking-section");
                setOnclick(4);
                setMenuOpen(false);
              }}
            >
              Free Appointment
            </button>
            <button
              className={`cursor-pointer ${
                isOnclick == 5 ? "text-[#FAD008]" : ""
              }`}
              onClick={() => {
                scrollToSection("plans-section");
                setOnclick(5);
                setMenuOpen(false);
              }}
            >
              Plans
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
