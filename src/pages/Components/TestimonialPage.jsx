import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import girl from "../../assets/Images/girl.png";
import companyLogo from "../../assets/Images/companyLogo.png";
import testimonialSign from "../../assets/testimonial-sign.svg";
import Testimonials from "../../Components/Testimonials";
import { Autoplay } from 'swiper/modules';

function TestimonialPage() {
  return (
    // <div className="grid grid-cols-1">
    //   <div className="bg-white flex flex-col justify-center p-[30px] mt-[40px]">
    //     <div className=" flex justify-end mt-[-50px]">
    //       <img className="w-10 " src={testimonialSign} alt="" />
    //     </div>
    //     <h4 className="w-[40%] black mt-[22px] mb-[12px]">
    //       “I am looking forward to working with the Boltzshift again.”
    //     </h4>
    //     <p className="mb-[64px] black">
    //       I create efficient, adaptable, and engaging websites. No predefined
    //       patterns. No sluggish, complex code. Webflow forms the foundation of
    //       my web development approach. I employ it to provide safe, top-notch
    //       bespoke websites.
    //     </p>

    //     <div className="flex justify-between">
    //       <div className="left-content flex gap-3">
    //         <img src={girl} className="object-cover" alt="" />
    //         <div>
    //           <h5 className="black font-semibold">Dora Dybala </h5>
    //           <p className="black">CEO & Founder of Company</p>
    //         </div>
    //       </div>
    //       <div>
    //         <img className="object-cover" src={companyLogo} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <h2 className="text-center uppercase tracking-wider mb-14">
        Testimonials
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{
          delay: "3000",
          disableOnInteraction: false,
        }}
        // loopedSlides={4} // Set this to the number of slides
      >
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialPage;
