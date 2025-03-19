import { motion } from "framer-motion";
import { FaAnchor, FaShip, FaGlobe, FaTrophy } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompanyOverview from "../components/AboutPage/CompanyOverview";
import ParallaxSection from "../components/AboutPage/ParallaxSection";
import TeamSection from "../components/AboutPage/TeamSection";
import VisionMission from "../components/AboutPage/VisionMission";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[550px] w-full">
          <div className="absolute inset-0">
            <img
              src="/port/port1.webp"
              alt="Port Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-cyan-900/60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-full flex items-center justify-center text-center"
          >
            <div className="text-white max-w-6xl ps-14 text-start">
              <h1 className="text-4xl space md:text-6xl font-bold mb-6 text-center">
                About Hem Shipping & Logistics
              </h1>
              <p className="text-xl text-center">
                Trusted shipping & logistics company at Kandla & Mundra ports,
                offering freight forwarding, customs clearance, and supply chain
                solutions.
              </p>
            </div>
          </motion.div>
        </section>

        <CompanyOverview />

        <ParallaxSection />

        <VisionMission />

        <TeamSection />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
