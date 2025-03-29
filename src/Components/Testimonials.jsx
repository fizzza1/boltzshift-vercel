import React from "react";
import testimonialSign from "../assets/testimonial-sign.svg";
import DummyImage from "/src/assets/Images/dummy-img.jpg"



function Testimonials({description, img, name, companyName}) {
  return (
<div className=" h-100">
    
    <div className="grid grid-cols-1 ">
      <div className="flex  flex-col justify-between  p-[30px] h-100 mt-6 bg-white">
        <div className=" flex justify-end mt-[-50px]">
          <img className="w-20 " src={testimonialSign} alt="" />
        </div>

        <div className="flex flex-col h-100 justify-between pb-5 pt-3">
        <p className="black ">
          {description}
        </p>
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
