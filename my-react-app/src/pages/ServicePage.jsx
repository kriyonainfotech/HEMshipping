import { motion } from "framer-motion";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { GrServicePlay } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GiShield } from "react-icons/gi";
import { FaChartLine, FaGlobe, FaMicrochip } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  FaTruckMoving, // Alternative for GiMineTruck (Fa = FontAwesome)
  FaBolt, // Alternative for GiEnergySword
  FaCapsules, // Alternative for FaCapsules
  FaSeedling, // Alternative for GiFertilizerBag
  FaShoppingCart, // Alternative for GiEcommerce
} from "react-icons/fa";
import { path } from "framer-motion/client";

const services = [
  "Sea Freight",
  "Air Freight",
  "Project Cargo",
  "Customs Clearance",
  "Inland Transportation",
  "Warehousing Distribution",
];
const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Instagram", icon: <IoLogoInstagram /> },
  { name: "WhatsApp", icon: <MdOutlineWhatsapp /> },
  { name: "Email", icon: <MdMail /> },
];
const ServicePage = () => {
  const [activeService, setActiveService] = useState("Service 1");
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <div className="">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
          {/* <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/port/servicePage.mp4" type="video/mp4" />
          </video> */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/port/servicePage.webp"
          >
            <source src="/port/servicePage.mp4" type="video/mp4" />
            <source src="/port/servicePage.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/60 to-cyan-900/20"></div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-5xl font-bold text-white"
          >
            Our Services
          </motion.h1>
        </section>

        {/* Services Section */}
        <section className="relative py-24 bg-gradient-to-r from-gray-50 to-cyan-100 mt-1">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl space font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Comprehensive logistics solutions for seamless global trade
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Sea Freight",
                  img: "/services/sea-freight.webp",
                  path: "/services/Sea-Freight",
                },
                {
                  title: "Air Freight",
                  img: "/services/air-cargo.webp",
                  path: "/services/Air-Freight",
                },
                {
                  title: "Project Cargo",
                  img: "/services/project-cargo.webp",
                  path: "/services/Project-Cargo",
                },
                {
                  title: "Customs Clearance",
                  img: "/services/customs.webp",
                  path: "/services/Customs-Clearance",
                },
                {
                  title: "Inland Transportation",
                  img: "/services/trucking.webp",
                  path: "/services/Inland-Transportation",
                },
                {
                  title: "Warehousing Distribution",
                  img: "/services/warehouse.webp",
                  path: "/services/Warehousing-Distribution",
                },
              ].map((service, index) => (
                // Modified card component
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group relative h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Link to={service.path}>
                    <div className="absolute inset-0">
                      <LazyLoadImage
                        src={service.img}
                        alt={`Hem Shipping - ${service.title}`}
                        wrapperClassName="absolute inset-0 w-full h-full"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        threshold={300}
                        width={600}
                        height={400}
                      />

                      {/* Gradient overlay - appears after image loads */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                    </div>

                    {/* Card content */}
                    <div className="absolute bottom-0 w-full p-6">
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                        <h3 className="text-2xl font-bold text-cyan-900">
                          {service.title}
                        </h3>
                        <button className="mt-3 text-cyan-700 font-semibold flex items-center gap-2 hover:text-cyan-900">
                          Learn More
                          <FiArrowRight className="mt-1 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Section Watermark */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="container mx-auto h-full flex items-center justify-center">
                <span className="text-[180px] lg:text-[240px] font-black opacity-10 text-white">
                  LOGISTICS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-gray-50 to-cyan-100 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-cyan-900 mb-4 space">
                Why Choose Hem Shipping and Logistics ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Delivering excellence through innovation and expertise in global
                logistics solutions
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <GiShield className="text-4xl" />,
                  title: "Experienced & Reliable",
                  text: "Team of professionals committed to personalized service",
                },
                {
                  icon: <FaChartLine className="text-4xl" />,
                  title: "Competitive Rates",
                  text: "Best value with cost-effective solutions",
                },
                {
                  icon: <FaGlobe className="text-4xl" />,
                  title: "Global Network",
                  text: "Worldwide partners for seamless logistics",
                },
                {
                  icon: <FaMicrochip className="text-4xl" />,
                  title: "Technology-Driven",
                  text: "Real-time tracking and advanced systems",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-cyan-900 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 montserrat">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-cyan-900 mb-6">
                Ready to Ship With Confidence?
              </h3>
              <Link
                to={"/contact"}
                className="relative flex h-[50px] w-48 items-center justify-center overflow-hidden bg-cyan-900 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-300/40 before:duration-500 hover:shadow-cyan-900 hover:before:h-56 hover:before:w-56 rounded-xl mx-auto"
              >
                <span className="relative z-10 font-semibold">
                  Get Free Quote
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="bg-gradient-to-r from-gray-50 to-cyan-50 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-cyan-900 mb-4">
                Tailored Solutions for Your Industry
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Customized logistics strategies for diverse industrial
                requirements
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: <FaIndustry className="text-4xl" />,
                  title: "Manufacturing",
                  desc: "Just-in-time delivery for production lines",
                  img: "/js/manufacturing.webp",
                },
                {
                  icon: <FaTruckMoving className="text-4xl" />,
                  title: "Mining & Resources",
                  desc: "Heavy machinery & bulk material handling",
                  img: "/js/mining.webp",
                },
                {
                  icon: <FaBolt className="text-4xl" />,
                  title: "Energy",
                  desc: "Oversized component transportation",
                  img: "/js/energy.webp",
                },
                {
                  icon: <FaCapsules className="text-4xl" />,
                  title: "Pharmaceuticals",
                  desc: "Temperature-controlled logistics",
                  img: "/js/pharma.webp",
                },
                {
                  icon: <FaSeedling className="text-4xl" />,
                  title: "Agriculture",
                  desc: "Perishable goods & bulk commodity handling",
                  img: "/js/agriculture.webp",
                },
                {
                  icon: <FaShoppingCart className="text-4xl" />,
                  title: "E-Commerce",
                  desc: "Last-mile delivery solutions",
                  img: "/js/ecommerce.webp",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group relative h-[550px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background Image */}
                  <div>
                    <LazyLoadImage
                      src={industry.img}
                      alt={`Hem Shipping - ${industry.title}`}
                      effect="blur"
                      wrapperClassName="absolute inset-0 w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      threshold={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-6 ">
                    <div className="bg-white/90 backdrop-blur-sm p-5 opacity-80 rounded-xl">
                      <div className="text-cyan-900 mb-3">{industry.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{industry.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Don't see your industry? We customize solutions for all sectors
              </p>
              <button className="relative flex h-[50px] w-48 items-center justify-center overflow-hidden bg-cyan-900 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-300/40 before:duration-500 hover:shadow-cyan-900 hover:before:h-56 hover:before:w-56 rounded-xl mx-auto">
                <span className="relative z-10 font-semibold">
                  Consult Our Experts
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
