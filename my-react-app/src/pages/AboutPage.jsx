import { motion } from "framer-motion";
import { FaAnchor, FaShip, FaGlobe, FaTrophy } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[550px] w-full">
          <div className="absolute inset-0">
            <img
              src="/port/port1.jpg"
              alt="Port Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cyan-900/60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-full flex items-center justify-start text-center"
          >
            <div className="text-white max-w-2xl ps-14 text-start">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Journey in Global Logistics
              </h1>
              <p className="text-xl">
                Pioneering Excellence at Kandla & Mundra Ports
              </p>
            </div>
          </motion.div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl font-bold text-cyan-900 mb-4">
                From Humble Beginnings to Industry Leaders
              </h2>
              <p className="text-gray-600 poppins">
                Founded in 2008, Hem Shipping has become synonymous with
                reliable port logistics
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 w-[2px] bg-gray-300 h-full top-0 -ml-0.5" />

              {[
                {
                  year: 2008,
                  icon: <FaAnchor />,
                  title: "Company Founded",
                  content:
                    "Started operations with single warehouse near Kandla port",
                },
                {
                  year: 2012,
                  icon: <FaShip />,
                  title: "Mundra Expansion",
                  content: "Established full-service operations at Mundra port",
                },
                {
                  year: 2016,
                  icon: <FaGlobe />,
                  title: "Global Network",
                  content: "Partnered with 50+ international logistics firms",
                },
                {
                  year: 2024,
                  icon: <FaTrophy />,
                  title: "Industry Recognition",
                  content:
                    "Awarded 'Best Port Logistics Provider' 3 years running",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "pr-20" : "pl-20"
                  } ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`absolute top-4 ${
                      index % 2 === 0 ? "-right-10" : "-left-10"
                    }`}
                  >
                    <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-cyan-600 font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-4 bg-gradient-to-br from-cyan-900 to-cyan-950 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-5xl font-bold flex items-center gap-3">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed border-l-4 border-blue-400 pl-4">
                  "To revolutionize port logistics through cutting-edge
                  technology and innovation, ensuring seamless and efficient
                  global trade."
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>AI-driven cargo management</li>
                  <li>Real-time tracking and optimization</li>
                  <li>Global networking for seamless trade</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <img
                  src="/port/vision.webp"
                  alt="Our Vision"
                  className="rounded-xl shadow-lg w-full max-w-2xl transform hover:scale-105 transition duration-300"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center order-last md:order-first"
              >
                <img
                  src="/port/mission.webp"
                  alt="Our Mission"
                  className="rounded-xl shadow-lg w-full max-w-2xl transform hover:scale-105 transition duration-300"
                />
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-5xl font-bold flex items-center gap-3">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed border-l-4 border-blue-400 pl-4">
                  "Deliver unmatched efficiency in cargo handling while
                  prioritizing reliability, teamwork, and customer
                  satisfaction."
                </p>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>24/7 cargo handling operations</li>
                  <li>Seamless integration with global supply chains</li>
                  <li>Commitment to fast & secure logistics</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
