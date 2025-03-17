import React from "react";
import Card from "../../Components/Card";
import Idea from "../../assets/Images/idea.png";
// import Mobile from "../../assets/Images/mobile.png"
import Mobile from "../../assets/Images/mobilePic.png";
// import Mobile from "../../assets/Images/mobil.png"
import Web from "../../assets/Images/website.png";

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
      <div className="grid grid-cols-2 p-8 ps-0 pe-0 pb-0">
        <div className="">
          <h2 className="w-[30%] mb-3">KNOW OUR SERVICES</h2>
          <p className="grey">Our Exceptional Services Design</p>
          <ul className="mt-10 flex flex-col gap-5 w-[90%]">
            <li>
              <strong className="text-[#FAD008] ">Scalability</strong> - We
              design web apps that grow with your business. Whether you’re
              handling 10 users or 10 million, our apps scale seamlessly without
              compromising performance.
            </li>
            <li>
              <strong className="text-[#FAD008] ">Complex Architecture</strong>{" "}
              - Our web apps are built with robust, multi-layered architecture,
              ensuring high availability, fault tolerance, and efficient
              handling of complex business logic.
            </li>
            <li>
              <strong className="text-[#FAD008] ">API Integration</strong> - We
              integrate third-party APIs to enhance functionality, whether it's
              payment gateways, social media platforms, or advanced data
              analytics tools.
            </li>
            <li>
              <strong className="text-[#FAD008] ">Security</strong> - With
              security being a top priority, our web apps are built to withstand
              potential cyber threats, using encryption, secure user
              authentication, and compliance with data privacy regulations
              (e.g., GDPR, CCPA).
            </li>
            <li>
              <strong className="text-[#FAD008] ">
                Cross-Platform Compatibility
              </strong>{" "}
              - Our web apps work seamlessly across browsers, devices, and
              platforms. No matter where your users are, your app will look and
              perform flawlessly.
            </li>
            <li>
              <strong className="text-[#FAD008] ">
                Performance Optimization
              </strong>{" "}
              - We optimize every aspect of your web app to ensure fast load
              times, minimal resource consumption, and smooth user experiences,
              even during peak traffic periods.
            </li>
            <li>
              <strong className="text-[#FAD008] ">
                Custom Web Development
              </strong>{" "}
              - We offer fully custom web solutions that are tailored to your
              business needs, whether you're looking for a complex enterprise
              solution or a simple landing page.
            </li>
          </ul>
        </div>

        <div className="">
          <div className="flex justify-between flex-wrap ">
            <Card
              bgColor={"bg-[#39393B]"}
              cardTitle={"Web Apps"}
              cardPara={
                "Our web apps are like that perfect crush – fast, responsive, and always ready to impress. 💖 Forget about those slow-loading sites, we’ll make your web app swoon-worthy. It’ll load faster than your heart races when you see them online. 💘"
              }
              imageSrc={Web}
            />
            <Card
              bgColor={"bg-[#39393B]"}
              cardTitle={"Mobile Apps"}
              cardPara={
                "Mobile apps that will make you fall in love every time you open them. 💞 No more crashes mid-scroll – just smooth, silky interactions. Whether you’re tracking your favorite things or scrolling through heart emojis, we’ve got you covered. ❤️‍🔥"
              }
              imageSrc={Mobile}
            />
            <Card
              bgColor={"bg-[#39393B]"}
              cardTitle={"Product Solutions"}
              cardPara={
                "Our products are like that sweet gift from a secret admirer – thoughtful, functional, and guaranteed to make you smile. 🎁 From tech to tools, we offer the kind of products that’ll make you fall head over heels. 😍"
              }
              imageSrc={Idea}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
