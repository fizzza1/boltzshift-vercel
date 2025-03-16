import React from 'react'
import Header from '../../Components/Header';
import HeroSection from "../Components/HeroSection"
import ServicesSection from '../Components/ServicesSection';
import PlansSection from '../Components/PlansSection';
import Footer from '../../Components/Footer';
function Home() {
  return (
    <div className='px-6 '>
      <Header />
      <HeroSection />
      <ServicesSection/>
      <PlansSection />
      <Footer />
    </div>
  )
}


export default Home;