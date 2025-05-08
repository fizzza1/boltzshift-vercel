import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import JapaneseCeo from "/src/assets/Images/CEO.Takuya.jpg";
import UAECeo from "/src/assets/Images/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
// import testimonialSign from "../../assets/testimonial-sign.svg";
import Testimonials from "../../Components/Testimonials";
import { Autoplay } from "swiper/modules";

function TestimonialPage() {
  return (
    <div className="mb-20">
      <h2 className="text-center uppercase tracking-wider mb-14">
      Customer Experiences

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
        breakpoints={{
          290: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loopedSlides={4} // Set this to the number of slides
      >
        {/* <SwiperSlide>
          <Testimonials description="Working with [Your Name] was a fantastic experience. We needed a custom e-commerce platform, and they delivered exactly what we envisioned. The team was super professional, communicative, and quick to adapt to feedback. Everything—from design to functionality—was executed perfectly. Looking forward to future projects together!"
          name= "Kenji Nakamura"
          companyName="CEO, Tsuki Digital"
          img={JapaneseCeo} />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials />
        </SwiperSlide> */}
        <SwiperSlide>
          <Testimonials
            description="Absolutely top-notch work! [Your Name] built a site that not only looks stunning but also performs like a dream. They understood our vision right away and executed it flawlessly. Will definitely work with them again!"
            name="David Wilson "
            companyName="CEO, SwiftByte Technologies"
            // img={UsaCeo}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            description="I’ve worked with many developers before, but [Your Name] stands out. They don’t just code; they actually understand business goals. Our website redesign boosted engagement significantly. Highly recommended!"
            name="Rohan Desai"
            companyName="CEO, PixelForge Solutions"
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW8FBHQtrgwUoNnCjq8MbDjpcMrAV8pBqxA&s"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            description="Working with [Your Name] was a fantastic experience. We needed a custom e-commerce platform, and they delivered exactly what we envisioned. The team was super professional, communicative, and quick to adapt to feedback. Everything—from design to functionality—was executed perfectly. Looking forward to future projects together!"
            name="Kenji Nakamura"
            companyName="CEO, Tsuki Digital"
            img={JapaneseCeo}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            description="Amazing work. Fast, efficient, and exactly what we needed!"
            name="Marcus Müller"
            companyName="CEO, WebWerk Innovations"
            // img={GermanCeo}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials
            description="From the first meeting to the final delivery, everything was smooth. [Your Name] understood our requirements perfectly and built a website that truly represents our brand. The UI is sleek, the site runs flawlessly, and our clients love the new experience. Can’t recommend them enough!"
            name="Ali Rahman"
            companyName="CEO, Elevate Tech"
            img={UAECeo}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialPage;
