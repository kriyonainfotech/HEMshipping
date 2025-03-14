import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServicesSection from '../components/ServicesGrid'
import OurProcess from '../components/OurProcess'
import CounterSection from '../components/CounterSection'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ServicesSection />
      <OurProcess />
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default Home
