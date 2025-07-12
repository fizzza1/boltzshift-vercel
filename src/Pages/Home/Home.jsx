import React, { useRef } from "react";
import Header from "/src/Components/Header.jsx"; 
import HeroSection from "/src/Pages/Components/HeroSection.jsx"; 
import ServicesSection from "/src/Pages/Components/ServicesSection.jsx"; 
import PlansSection from "/src/Pages/Components/PlansSection.jsx"; 
import Footer from "/src/Components/Footer.jsx"; 
import TestimonialPage from "/src/Pages/Components/TestimonialPage.jsx"; // TestimonialPage from Components folder
import BookingPage from "/src/Pages/Components/BookingPage.jsx"; //                                                                                                                                                                                     ,nmn,,,BookingPage from Components folder


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
