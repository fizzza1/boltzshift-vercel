import React from 'react';
import WebsiteLogo from "/src/assets/Images/LogoBlack.png";
import Twitter from "/src/assets/svg/twitter-x.svg";
import Instagram from "/src/assets/svg/instagram.svg";
import youtube from "/src/assets/svg/youtube.svg";
import facebook from "/src/assets/svg/facebook.svg";

function Footer() {
  return (
    <div className='bg-white text-black w-full'>
      <div className='pb-8 pt-12 px-8'>
        {/* Parent container: Responsive layout */}
        <div className='text-[#39393B] flex flex-col justify-between lg:flex-row md:flex-row sm:flex-col sm:items-start gap-4 sm:gap-4'>
          {/* Logo */}
          <div>
            <img src={WebsiteLogo} alt="Website Logo" />
          </div>

          {/* Contact Details */}
          <div className='tracking-wider'>
            <p className='font-medium text-[18px]'>+1(0) 911 18 27 16</p>
            <p className='font-medium text-[18px]'>INFO@BOLTZSHIFT.COM</p>
            <div className='pt-8'>
              <p className='font-medium text-[18px]'>Based in San Francisco</p>
              <p className='font-medium text-[18px]'>United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className='pt-8 mb-8 flex flex-col lg:flex-row gap-4 sm:flex-col md:flex-row sm:items-start'>
          <p className='font-medium text-[20px]'>Follow us</p>
          <div className='flex gap-4'>
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={youtube} alt="YouTube" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>

        {/* Copyright (Always Centered) */}
        <p className='text-center text-black text-[20px]'>
          © 2025 All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
