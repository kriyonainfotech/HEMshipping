import React from 'react'
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <div>
      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 to-cyan-900 text-white rounded-xl overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          {/* Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 px-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Our Vision</h2>
              <p className="text-base md:text-lg leading-relaxed border-l-4 border-blue-400 pl-4">
                "To revolutionize port logistics through cutting-edge technology
                and innovation, ensuring seamless and efficient global trade."
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-base md:text-lg">
                <li>AI-driven cargo management</li>
                <li>Real-time tracking and optimization</li>
                <li>Global networking for seamless trade</li>
              </ul>
            </motion.div>

            {/* Vision Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 md:px-0"
            >
              <div className="overflow-hidden rounded-xl shadow-lg mx-auto max-w-2xl">
                <img
                  src="/port/vision.webp"
                  alt="Our Vision"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </motion.div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-16 md:mt-20">
            {/* Mission Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 md:px-0 order-last md:order-first"
            >
              <div className="overflow-hidden rounded-xl shadow-lg mx-auto max-w-2xl">
                <img
                  src="/port/mission.webp"
                  alt="Our Mission"
                  className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </motion.div>

            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 px-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Our Mission</h2>
              <p className="text-base md:text-lg leading-relaxed border-l-4 border-blue-400 pl-4">
                "Deliver unmatched efficiency in cargo handling while
                prioritizing reliability, teamwork, and customer satisfaction."
              </p>
              <ul className="list-disc list-outside pl-6 space-y-2 text-base md:text-lg">
                <li>24/7 cargo handling operations</li>
                <li>Seamless integration with global supply chains</li>
                <li>Commitment to fast & secure logistics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionMission