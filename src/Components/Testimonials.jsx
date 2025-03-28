import React from "react";
// import girl from "../assets/Images/girl.png";
// import companyLogo from "../assets/Images/companyLogo.png";
import testimonialSign from "../assets/testimonial-sign.svg";
import DummyImage from "/src/assets/Images/dummy-img.jpg"



function Testimonials({description, img, name, companyName}) {
  return (
<div>
    
    <div className="grid grid-cols-1 mb-30">
      <div className="bg-white flex flex-col justify-center p-[30px] mt-6">
        <div className=" flex justify-end mt-[-50px]">
          <img className="w-20 " src={testimonialSign} alt="" />
        </div>
        <p className="mb-[64px] black">
          {description}
        </p>

        <div className="flex justify-between">
          <div className="left-content flex gap-3">
            <img src={img ? img : DummyImage} className="object-cover rounded CeoImage" alt="" />
            <div>
              <h5 className="black CeoName font-extrabold">{name} </h5>
              <p className="black">{companyName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  );
}

export default Testimonials;
