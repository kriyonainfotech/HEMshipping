import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Stats = () => {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (statsInView) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [statsInView, controls]);

  const stats = [
    { number: 15, label: "Years Experience" },
    { number: 98, label: "On-Time Delivery" },
    { number: 5000, label: "Monthly Containers" },
    { number: 150, label: "Global Partners" },
  ];

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0 }}
      animate={controls}
      className="grid md:grid-cols-4 gap-8 mt-20 text-center"
    >
      {stats.map((stat, index) => {
        // Create a motion value
        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => Math.round(latest));
        const formatted = useMotionTemplate`${rounded}+`;

        useEffect(() => {
          if (statsInView) {
            animate(count, stat.number, { duration: 1.5 });
          }
        }, [statsInView, count, stat.number]);

        return (
          <div key={index} className="p-6 border-b-4 border-cyan-200">
            <motion.div className="text-4xl font-bold text-cyan-900 mb-2">
              <motion.span>{formatted}</motion.span>
            </motion.div>
            <div className="text-cyan-700">{stat.label}</div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Stats;
