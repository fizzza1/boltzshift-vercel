import React from "react";
import girl from "../assets/Images/girl.png";
import companyLogo from "../assets/Images/companyLogo.png";
import testimonialSign from "../assets/testimonial-sign.svg";

function Testimonials() {
  return (
<div>
    
    <div className="grid grid-cols-1 mb-30">
      <div className="bg-white flex flex-col justify-center p-[30px] mt-6">
        <div className=" flex justify-end mt-[-50px]">
          <img className="w-20 " src={testimonialSign} alt="" />
        </div>
        <h4 className="black mt-[22px] mb-[12px]">
          “I am looking forward to working with the Boltzshift again.”
        </h4>
        <p className="mb-[64px] black">
          I create efficient, adaptable, and engaging websites. No predefined
          patterns. No sluggish, complex code. Webflow forms the foundation of
          my web development approach. I employ it to provide safe, top-notch
          bespoke websites.
        </p>

        <div className="flex justify-between">
          <div className="left-content flex gap-3">
            <img src={girl} className="object-cover" alt="" />
            <div>
              <h5 className="black font-semibold">Dora Dybala </h5>
              <p className="black">CEO & Founder of Company</p>
            </div>
          </div>
          <div>
            <img className="object-cover" src={companyLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
</div>

  );
}

export default Testimonials;
