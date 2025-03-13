import { useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { GrServicePlay } from "react-icons/gr";

const services = ["Sea Freight", "Air Freight", "Project Cargo", "Customs Clearance", "Inland Transportation", "Warehousing Distribution"];
const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Instagram", icon: <IoLogoInstagram /> },
  { name: "WhatsApp", icon: <MdOutlineWhatsapp /> },
  { name: "Email", icon: <MdMail /> },
];
const Warehousing = () => {
  const { serviceName } = useParams();

  // Animation variants
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
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/port/warehousing.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/60 to-cyan-900/20"></div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-5xl font-bold text-white space"
          >
            Our Services / Warehousing Distribution
          </motion.h1>
        </section>

        <section className="flex flex-col md:flex-row items-start justify-start bg-gradient-to-r from-gray-50 to-cyan-100 p-6 md:p-8 pt-32 md:pt-32">
          <div className="container mx-auto flex flex-col md:flex-row items-start gap-12 min-w-0">
            {/* Left Side: Interactive Cards */}
            <div className="w-full md:w-1/4 space-y-6">
              {/* Services List Card */}
              <motion.div
                className="bg-gray-50 p-6 shadow-xl rounded-2xl border border-gray-200"
                whileTap={{ scale: 0.98 }}
              >
                <h2 className="text-cyan-900 font-bold text-lg mb-4 tracking-wide">
                  All Services
                </h2>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <motion.li
                      key={service}
                      onClick={() =>
                        navigate(`/services/${service.replace(/\s+/g, "-")}`)
                      }
                      className="cursor-pointer px-4 py-2 rounded-lg transition border border-gray-300 duration-300 text-gray-700 hover:text-cyan-900 hover:bg-gray-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Card with Image */}
              <motion.div className="relative h-72 md:h-80 text-white rounded-xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: "url('/port/twomen.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-6 text-center">
                  <span className="text-orange-500 bg-gray-100 p-3 rounded-full inline-block">
                    <PiPhoneCallDuotone className="text-3xl md:text-4xl" />
                  </span>
                  <p className="mt-3 text-lg md:text-xl font-semibold">
                    Have any Questions?
                  </p>
                  <p className="text-md md:text-lg text-gray-300">
                    Call us Today!
                  </p>
                  <p className="pt-2 text-lg md:text-2xl font-bold">
                    +1234567890
                  </p>
                </div>
              </motion.div>

              {/* Social Media Card */}
              <motion.div className="bg-gradient-to-r from-cyan-900 to-cyan-600 p-6 border border-gray-100 shadow-lg flex flex-col justify-center gap-4 rounded-xl">
                <h5 className="flex items-center text-lg md:text-xl border-b pb-2 border-gray-200 gap-2 text-white font-semibold">
                  <GrServicePlay className="text-white text-lg" />
                  Company's Profile
                </h5>
                <div className="flex items-center justify-around">
                  {socialMedia.map((platform) => (
                    <motion.a
                      key={platform.name}
                      href="#"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-50 text-lg md:text-xl hover:text-gray-100 hover:border-gray-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      {platform.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Main Content */}
            <div className="w-full md:w-3/4 space-y-6 min-w-0">
              <motion.div className="flex flex-col justify-between gap-10" initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="relative w-full">
                  <motion.img
                    src="/services/warehouse.jpg"
                    alt="Sea Freight"
                    className="rounded-xl shadow-2xl w-full h-[250px] md:h-[500px] object-cover max-w-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl space md:text-4xl font-bold text-gray-800 leading-tight">
                    Warehousing & Distribution
                  </h2>
                  <div className="text-gray-700 text-md tracking-wide space">
                    <p className="pb-3 pt-6">
                      Logistics services refer to the management of goods
                      movement from one point to another in an efficient manner.
                      Logistics service providers handle everything from
                      warehousing to{" "}
                      <strong>transportation management systems</strong> that
                      optimize shipment routes. They can also offer worldwide
                      shipping solutions.
                    </p>
                    <p className="py-2">
                      These services streamline operations by optimizing
                      delivery times, reducing inventory costs, and improving
                      order accuracy.
                      <strong>Advanced technologies</strong> like route
                      optimization software or automated warehouse systems help
                      businesses increase efficiency while cutting labor costs.
                    </p>
                  </div>
                </div>

                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl space md:text-4xl font-bold text-gray-800 leading-tight">
                    Benefits of Our Services
                  </h2>
                  <div className="text-gray-700 text-md tracking-wide space">
                    <p className="pt-6">
                      Our logistics solutions are designed to enhance efficiency
                      and reduce delays.
                    </p>
                    <ul className="ps-6 md:ps-8">
                      <li className="list-disc">
                        Optimized routes for faster delivery
                      </li>
                      <li className="list-disc">
                        Cost-effective warehousing & storage
                      </li>
                      <li className="list-disc">Real-time shipment tracking</li>
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start pb-20">
                  <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-300/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl">
                    <span className="relative z-10 font-semibold">
                      Get a Quote
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-28 bg-gradient-to-r from-cyan-900 to-cyan-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}>
              {[
                "Countries Served",
                "Annual Shipments",
                "Client Satisfaction",
              ].map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="p-6 border border-white/20 rounded-lg"
                >
                  <div className="text-4xl font-bold mb-2">
                    {["150+", "10,000+", "98%"][index]}
                  </div>
                  <div className="text-lg">{stat}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="bg-gradient-to-r from-cyan-50 to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl space font-bold text-cyan-900 text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Shipping Process
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Booking", "Loading", "Shipping", "Delivery"].map(
                (step, index) => (
                  <motion.div
                    key={step}
                    variants={staggerItem}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-cyan-900 font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-pri">0{index + 1}.</span>
                      {step}
                    </div>
                    <p className="text-gray-600">
                      Detailed description of {step.toLowerCase()} process...
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-16">
          <div className="container mx-auto px-4 rounded-xl">
            <div className="container mx-auto px-6">
              {/* Heading */}
              <h2 className="text-4xl space text-center font-bold">Get in Touch</h2>
              <p className="mt-4 text-md lato md:text-lg text-gray-200 max-w-2xl mx-auto">
                Need reliable logistics solutions? Our team is here to help with
                all your shipping and freight needs. Contact us today for a custom
                quote!
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex justify-center items-center gap-6">
                <button
                  className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all
                  before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-300/40 before:duration-500 before:ease-out  hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl"
                >
                  <span className="relative z-10 font-semibold">Get a Quote</span>
                </button>

                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden border-2 border-white text-white shadow-lg transition-all hover:bg-white hover:text-cyan-900 rounded-xl">
                  <span className="relative z-10 font-semibold">Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Warehousing;