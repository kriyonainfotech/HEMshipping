import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
        setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
     }, []);
    
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="lg:w-1/4 flex flex-col justify-between">
          <div>
            <span className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
              Client Testimonials
            </span>
            <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-8">
              What Clients Say About Us
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
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-3/4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl p-12 text-white"
            >
              {/* Client Info */}
              <div className="border-b border-blue-700 pb-6 mb-8">
                <h3 className="text-2xl font-bold">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-blue-300">
                  {testimonials[activeIndex].role}
                </p>
              </div>

              {/* Testimonial Content */}
              <div className="px-8 py-12 border-b border-blue-700">
                <p className="text-xl italic text-center leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center pt-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].photo}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < testimonials[activeIndex].rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

                <svg
                  className="w-20 h-20 text-blue-600 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7 4v16M17 4v16M3 8h4a2 2 0 012 2v4a2 2 0 01-2 2H3M17 8h4a2 2 0 012 2v4a2 2 0 01-2 2h-4"
                  />
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
