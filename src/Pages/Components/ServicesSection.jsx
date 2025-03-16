import React from "react";
import Card from "../../Components/Card";
import Vector1 from "../../assets/svg/vector1.svg"


function ServicesSection() {
  return (
    <div className="mb-20">
{/* <div className="py-[72px] grid grid-cols-3">
  <div className="text-center">
    <h2 className="font-bold tracking-wide ">8.2 <span className="text-[#FAD008]">k</span></h2>
    <p className="text-[12px] grey">Trusted Users</p>
  </div>
  <div className="text-center">
    <h2 className="font-bold tracking-wide ">120 <span className="text-[#FAD008]">+</span></h2>
    <p className="text-[12px] grey">Project Completed</p>
  </div>
  <div className="text-center">
    <h2 className="font-bold tracking-wide ">97 <span className="text-[#FAD008]">%</span></h2>
    <p className="text-[12px] grey">Clients Satisfaction</p>
  </div>
</div> */}
    <div className="grid grid-cols-2 p-8">
      <div className="">
        <h2 className="w-[30%] mb-3">KNOW OUR SERVICES</h2>
        <p className="grey">Our Exceptional Services Design</p>
      </div>

      <div className="">
        <div className="flex justify-between flex-wrap ">
          
        {/* bg-[#39393b] */}

          <Card bgColor={"bg-[#39393B]"} cardTitle={"Card"} cardPara={"Our Exceptional Services Design"} imageSrc={Vector1} />
          <Card bgColor={"bg-[#39393B]"} cardTitle={"Card"} cardPara={"Our Exceptional Services Design"} />
          <Card bgColor={"bg-[#39393B]"} cardTitle={"Card"} cardPara={"Our Exceptional Services Design"} />
          <Card bgColor={"bg-[#39393B]"} cardTitle={"Card"} cardPara={"Our Exceptional Services Design"} />


        </div>
      </div>
    </div>
    </div>
  );
}

export default ServicesSection;
