import React from 'react'
import WebsiteLogo from "/src/assets/Images/LogoBlack.png"

function Footer() {
  return (
    <div className='bg-white text-black w-[100%]'>
        <div className='py-[48px] px-8 grid grid-cols-2'>
            <div>
                <img src={WebsiteLogo} alt="" />
            </div>
            <div>
                <p>+1(0) 911 18 27 16</p>
                <p>INFO@BOLTZSHIFT.COM</p>
                <div>
                    <p>Based in San Fransisco</p>
                    <p>United Kingdom</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;