import React, { useRef } from "react";
import Header from "../../Components/Header"; 
import HeroSection from "../../Pages/Components/HeroSection"; 
import ServicesSection from "../../Pages/Components/ServicesSection"; 
import PlansSection from "../../Pages/Components/PlansSection"; 
import Footer from "../../Components/Footer"; 
import TestimonialPage from "../../Pages/Components/TestimonialPage"; // TestimonialPage from Components folder
import BookingPage from "../../Pages/Components/BookingPage"; //                                                                                                                                                                                     ,nmn,,,BookingPage from Components folder


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
    <div className="px-6">
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
