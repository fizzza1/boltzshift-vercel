import React, { useRef } from "react";
import Header from "../../Components/Header"; // Header component
import HeroSection from "../../pages/Components/HeroSection"; // HeroSection from Components folder
import ServicesSection from "../../pages/Components/ServicesSection"; // ServicesSection from Components folder
import PlansSection from "../../pages/Components/PlansSection"; // PlansSection from Components folder
import Footer from "../../Components/Footer"; // Footer component
import TestimonialPage from "../../pages/Components/TestimonialPage"; // TestimonialPage from Components folder
import BookingPage from "../../pages/Components/BookingPage"; // BookingPage from Components folder
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
