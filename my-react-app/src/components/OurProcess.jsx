import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GrServicePlay } from "react-icons/gr";


const OurProcess = () => {
  const steps = [
    {
      icon: "/js/box.png",
      title: "Replenishment & Picking",
      description:
        "Fast, accurate inventory restocking and order picking for seamless supply chain efficiency.",
      step: "Step-1",
    },
    {
      icon: "/js/warehouse.png",
      title: "Warehousing Operation",
      description:
        "Secure, efficient storage and management to keep your inventory organized and accessible.",
      step: "Step-2",
    },
    {
      icon: "/js/distribution-center.png",
      title: "Packaging & Distribution",
      description:
        "Reliable packaging and distribution with real-time tracking for safe, on-time deliveries.",
      step: "Step-3",
    },
    {
      icon: "/js/logistics.png",
      title: "Transportation Process",
      description:
        "Fast, optimized transport across air, sea, and land for seamless delivery.",
      step: "Step-4",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  return (

    <section className="w-full py-20 px-4 bg-gray-50 relative">
      {/* Full-width Dotted Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hidden md:block absolute md:bottom-[35%] lg:bottom-[31%] xl:bottom-[30%] left-0 right-0 h-1 border-t-2 border-dotted border-cyan-900"
      />

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 w-full">
          <span className="flex items-center gap-2 text-md text-gray-800 font-semibold tracking-wide poppins">
            <GrServicePlay className="font-bold text-cyan-900 text-lg" />
            Our Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900 my-6 space">
            Let us take the stress ‍<br /> out of{" "}
            <span className="text-sec">your move.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center relative z-10 group"
            >
              {/* Icon - Centered */}
              <motion.div className="mb-10 transition-transform duration-300 flex flex-col items-center justify-center">
                <img
                  src={step.icon}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </motion.div>

              <h3 className="text-2xl space font-bold text-gray-900 mb-6">
                {step.title}
              </h3>

              {/* Step Number */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-22 h-22 rounded-full bg-white border-2 border-cyan-900 flex items-center justify-center mt-8 mx-auto shadow-lg group-hover:shadow-xl transition-all"
              >
                <span className="text-gray-800 font-semibold">{step.step}</span>
              </motion.div>

              {/* Content */}
              <p className="text-gray-600 mt-7">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
