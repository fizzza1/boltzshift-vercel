import React from "react";
import Header from "../../Components/Header";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import PlansSection from "../Components/PlansSection";
import Footer from "../../Components/Footer";
import TestimonialPage from "../Components/TestimonialPage";
import BookingPage from "../Components/BookingPage";

function Home() {
  // Create a ref for the PlansSection
  const plansRef = useRef(null);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  return (
    <div className="px-6 ">
      <div>
      <Header scrollToSection={scrollToSection} />
      </div>
      <div id="hero-section">
        <HeroSection />
      </div>

      <div id="services-section">
        <ServicesSection />
      </div>

      <div id="testimonials-section">
        <TestimonialPage />
      </div>

      <div id="booking-section">
        <BookingPage />
      </div>

      <div id="plans-section">
        <PlansSection />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
