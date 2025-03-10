import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const CounterSection = () => {
  const counters = [
    { number: 150, text: "Projects Completed" },
    { number: 120, text: "Happy Clients" },
    { number: 50, text: "Global Partners" },
  ];

  return (
    <section className="w-full mt-20 lg:mt-0">
      <div className="container mx-auto ">
        <div className="bg-pri flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-60 text-white py-10 px-8 rounded-xl">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Counter Number with Upward Arrow Inside */}
              <motion.span
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl space font-bold  flex items-center gap-2"
              >
                <FaArrowUp className=" mt-4 text-4xl font-normal space animate-bounce" />
                {counter.number}+
              </motion.span>

              {/* Underline */}
              <div className="w-46 h-[1px] bg-gray-50 my-3 opacity-60"></div>

              {/* Success Text */}
              <p className="lato text-lg font-medium">
                {counter.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
