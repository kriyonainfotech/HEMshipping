import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
import { GrServicePlay } from "react-icons/gr";
import CounterSection from "./CounterSection";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Logistics Inc.",
      text: "The most reliable shipping partner we've ever worked with. Their real-time tracking system is unparalleled.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Logistics Inc.",
      text: "The most reliable shipping partner we've ever worked with. Their real-time tracking system is unparalleled.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Logistics Inc.",
      text: "The most reliable shipping partner we've ever worked with. Their real-time tracking system is unparalleled.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    // Add more testimonials...
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="min-h-screen bg-sec mx-6 lg:mt-36 rounded-xl pt-24 pb-12 px-4 relative flex items-center">
      <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent rounded-xl pb-20">
        <CounterSection />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Side */}
        <div className="lg:w-1/4 flex-grow-0 flex flex-col justify-between bg-gray-200 p-10 rounded-xl relative bg-[url('/js/pattern2.jpg')] bg-no-repeat bg-bottom-right z-20">
          <div>
            <span className="flex items-center gap-2 text-md text-gray-800 font-semibold tracking-wide poppins">
              <GrServicePlay className="font-bold text-cyan-900 text-lg" />
              Client Testimonials
            </span>
            <h2 className="text-4xl space font-bold text-gray-900 mt-4 mb-8">
              What Clients Say <span className="text-sec">About Us</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() =>
                setActiveIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-3 rounded-full bg-gray-300  hover:bg-gray-100 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="p-3 rounded-full bg-gray-300  hover:bg-gray-100 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-3/4 flex-grow relative z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gray-200 rounded-xl p-12 text-gray-900"
            >
              {/* Client Info */}
              <div className="flex flex-col lg:flex-row lg:justify-between border-b border-gray-300 pb-6 mb-8">
                {/* Testimonial Author */}
                <div>
                  <h3 className="text-2xl font-semibold poppins">
                    {testimonials[activeIndex]?.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeIndex]?.role}
                  </p>
                </div>

                {/* Star Rating (Comes Down on Small Screens) */}
                <div className="flex gap-1 text-yellow-600 text-3xl mt-2 lg:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < (testimonials[activeIndex]?.rating || 0) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="px-8 py-12 border-b border-gray-300">
                <p className="text-xl tracking-wide text-center space leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center pt-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].photo}
                    alt="Hem Shipping Logistics at Kandla & Mundra Port"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <FaQuoteRight className="text-3xl" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
