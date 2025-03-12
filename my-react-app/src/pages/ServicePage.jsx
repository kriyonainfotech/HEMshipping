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
import { useNavigate } from "react-router-dom";

const services = ["SeaFreight", "Service 2", "Service 3", "Service 4"];
const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Instagram", icon: <IoLogoInstagram /> },
  { name: "WhatsApp", icon: <MdOutlineWhatsapp /> },
  { name: "Email", icon: <MdMail /> },
];
const ServicePage = () => {
  const [activeService, setActiveService] = useState("Service 1");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[470px] flex items-center m-3 rounded-xl"
          style={{
            backgroundImage: "url('/port/port2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-cyan-900/15"></div>

          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="relative text-5xl font-bold text-white ml-8 lg:ml-16"
          >
            Our Services
          </motion.h1>
        </motion.section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full md:w-1/5 space-y-6">
            <motion.div
              className="bg-white p-6 shadow-xl rounded-2xl border border-gray-200"
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
                    } // Navigate on click
                    className="cursor-pointer px-4 py-2 rounded-lg transition duration-300 text-gray-700 hover:text-cyan-900 hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="relative h-96 text-white rounded-xl overflow-hidden group">
              {/* Image wrapper (scales on hover) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: "url('/port/twomen.jpg')" }}
              ></div>

              {/* Full dark overlay at bottom, fading out till 40% */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/90 via-30% to-transparent"></div>

              {/* Content at the bottom */}
              <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-center text-center">
                {/* Icon wrapper */}
                <span className="text-orange-500 bg-gray-100 p-5 rounded-full">
                  <PiPhoneCallDuotone className="text-5xl" />
                </span>

                {/* Text content */}
                <div className="mt-3">
                  <p className="space text-xl font-semibold">
                    Have any Questions?
                    <br /> ‍Call us Today !
                  </p>
                  <p className="pt-3 text-gray-300 text-3xl space font-semibold">
                    +1234567890
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-gradient-to-r from-cyan-900 to-cyan-600 p-6 border border-gray-100 shadow-lg flex flex-col justify-center gap-4 rounded-xl ">
              <h5 className="flex space items-center text-2xl border-b pb-2 border-gray-200 gap-2 text-white font-semibold">
                <GrServicePlay className="text-white-900 text-lg font-bold" />
                Company's Profile
              </h5>

              <div className="flex items-center justify-between">
                {socialMedia.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    className="w-10 h-10 rounded-full border-2 border-gray-100 
                      flex items-center justify-center text-gray-50 text-xl 
                      hover:border-gray-100 hover:text-gray-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-4/5 space-y-8">
            <motion.img
              src="/port/port3.png"
              alt="Service"
              className="w-full max-h-[650px] object-cover rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            <motion.div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyan-900">
                {activeService}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive service solution</li>
                  <li>Expert team support</li>
                  <li>Quality assurance guarantee</li>
                </ul>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((img) => (
                <motion.img
                  key={img}
                  src={`https://via.placeholder.com/400x300?text=Image+${img}`}
                  alt={`Demo ${img}`}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <section className="container mx-auto px-4 py-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-cyan-900"
          >
            Why Choose Our Service?
          </motion.h2>
          <p className="text-gray-600 mt-4">
            We provide top-notch solutions with guaranteed quality and
            reliability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {[
              "Fast & Reliable",
              "Affordable Rates",
              "Expert Team",
              "24/7 Support",
            ].map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-xl shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <FaCheckCircle className="text-cyan-900 text-2xl" />
                <span className="text-lg font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-cyan-900 text-center mb-6">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((img) => (
              <motion.img
                key={img}
                src={`/port/service-image-${img}.jpg`}
                alt={`Service ${img}`}
                className="w-full h-64 object-cover rounded-xl"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </section>


      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
