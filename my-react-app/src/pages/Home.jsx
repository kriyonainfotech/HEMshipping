import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ServicesSection from "../components/ServicesGrid";
import OurProcess from "../components/OurProcess";
import CounterSection from "../components/CounterSection";
import TestimonialSection from "../components/TestimonialSection";
import AboutSection from "../components/AboutSection";

const Home = () => {
  // useEffect(() => {
  //   document.title =
  //     "Hem Shipping & Logistics | Kandla & Mundra Freight Services";
  //   document
  //     .querySelector('meta[name="description"]')
  //     .setAttribute(
  //       "content",
  //       "Hem Shipping provides reliable freight forwarding, customs clearance, and logistics solutions at Kandla & Mundra Port."
  //     );
  // }, []);
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
};

export default Home;
