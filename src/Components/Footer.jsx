import React from 'react'
import WebsiteLogo from "/src/assets/Images/LogoBlack.png"
import Twitter from "/src/assets/svg/twitter-x.svg"
import Instagram from "/src/assets/svg/instagram.svg"
import youtube from "/src/assets/svg/youtube.svg"
import facebook from "/src/assets/svg/facebook.svg"
function Footer() {
  return (
    <div className='bg-white text-black w-[100%]'>
        <div className='pb-8 pt-[48px] px-8 '>
            <div className='text-[#39393B]  flex justify-between'>
            <div>
                <img src={WebsiteLogo} alt="" />
            </div>
            <div className='tracking-wider'>
                <p className='font-medium text-[18px]'>+1(0) 911 18 27 16</p>
                <p className='font-medium text-[18px]'>INFO@BOLTZSHIFT.COM</p>
                <div className='pt-8'>
                    <p className='font-medium text-[18px]'>Based in San Fransisco</p>
                    <p className='font-medium text-[18px]'>United Kingdom</p>
                </div>
            </div>
            </div>
            <div className='pt-17 mb-8 flex gap-4'>
                <p className='font-medium text-[20px]'>Follow us</p>
                <div className='flex gap-4'>
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                </div>
            </div>
            <p className='text-center text-black text-[20px]'>copyright @ 2025 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;