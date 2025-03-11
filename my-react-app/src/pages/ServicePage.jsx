import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = ["Service 1", "Service 2", "Service 3", "Service 4"];
const socialMedia = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

const ServicePage = () => {
  const [activeService, setActiveService] = useState("Service 1");

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
              className="bg-white p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-cyan-900 font-bold mb-4">All Services</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={`cursor-pointer ${
                      activeService === service
                        ? "text-orange-500 font-semibold"
                        : "text-gray-600 hover:text-cyan-900"
                    }`}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative h-48 text-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gray-800/30"></div>
              <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-gray-900/80 p-4">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">📞</span>
                  <div>
                    <p className="text-sm">Have any Questions?</p>
                    <p className="font-bold">+1 234 567 890</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 shadow-lg flex justify-center gap-4"
              whileHover={{ scale: 1.02 }}
            >
              {socialMedia.map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-cyan-900 flex items-center justify-center hover:border-orange-500 hover:text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {platform.slice(0, 1)}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-4/5 space-y-8">
            <motion.img
              src="https://via.placeholder.com/1200x400"
              alt="Service"
              className="w-full max-h-96 object-cover"
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
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
