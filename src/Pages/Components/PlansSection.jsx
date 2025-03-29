import React from "react";
import PlanCard from "../../Components/Plan";

function PricingPlans() {
  return (
    <div className="mb-20">
      <h2 className="uppercase tracking-[1px] mb-7 mt-28 bg-[radial-gradient(circle,rgba(72,61,9,1)_4%,#07070A_60%)] text-center">
        Choose your plan
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap Plancard items-center  justify-center gap-6 p-8">
        <PlanCard 
          title="Basic"
          price="49"
          features={[
            "Weekly updates",
            "Secure and Reliable",
            "Limited data points",
            "10+ Free Templates",
            "No Support",
            "Budget-friendly pricing",
          ]}
          bgcolor={"bg-[#fff]"}
          buttoncolor={"bg-[#FAD008] hover:bg-black"}
        />

        <PlanCard
          title="Pro"
          price="249"
          features={[
            "Daily updates",
            "Secure and Reliable",
            "Hosting + Domain setup",
            "Website design & development",
            "Priority support",
            "For businesses and professionals",
          ]}
          bgcolor={"bg-[#FAD008]"}
          buttoncolor={"bg-[#000] text-white hover:bg-[#FAD008]"}
        />

        <PlanCard
          title="Enterprise"
          price="499"
          features={[
            "For Enterprises",
            "Secure and Reliable",
            "Real-time data updates",
            "Comprehensive data points",
            "Priority support",
            "Budget-friendly pricing",
          ]}
          bgcolor={"bg-[#fff]"}
          buttoncolor={"bg-[#FAD008] hover:bg-black"}
        />
      </div>
    </div>
  );
}

export default PricingPlans;
