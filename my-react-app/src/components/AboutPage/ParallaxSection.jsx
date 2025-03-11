import { motion } from "framer-motion";

const ParallaxSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
                  className="w-full h-full bg-[url('/port/hamburg-6849995_1280.jpg')] 
          bg-cover bg-center bg-fixed"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-cyan-800/50" />
        </div>
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-6 border-l-4 border-cyan-800 pl-4 space"
          >
            Pioneering Logistics Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-md text-gray-700 mb-8"
          >
            At Hem Shipping & Logistics, we've redefined port operations through
            innovative solutions and unwavering commitment. With 15+ years of
            expertise in Kandla and Mundra ports, we combine cutting-edge
            technology with deep industry knowledge to deliver seamless cargo
            management, customs clearance, and end-to-end supply chain
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-center flex justify-center items-center gap-6"
          >
            <button class="relative flex h-[50px] w-72 px-8 py-6 text-lg text-center items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f6b98a]/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-lg">
              <span class="relative z-10">Explore Our Capabilities</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
