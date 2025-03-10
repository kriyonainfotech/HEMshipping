import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ServicesSection from '../components/ServicesGrid'
import OurProcess from '../components/OurProcess'
import CounterSection from '../components/CounterSection'
import TestimonialSection from '../components/TestimonialSection'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ServicesSection />
      <OurProcess />
      <CounterSection />
      <TestimonialSection   />
      <Footer />
    </div>
  )
}

export default Home
