import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Stats = ({ stats }) => {
  const controls = useAnimation();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (statsInView) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [statsInView, controls]);

  // Dynamically set grid columns based on stats length
  const gridCols = stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0 }}
      animate={controls}
      className={`grid ${gridCols} gap-8 text-center`}
    >
      {stats.map((stat, index) => {
        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => Math.round(latest));

        useEffect(() => {
          if (statsInView) {
            animate(count, stat.number, { duration: 1.5, ease: "easeOut" });
          }
        }, [statsInView, count, stat.number]);

        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-4 bg-cyan-800 rounded-lg shadow-lg"
          >
            <motion.div className="text-4xl font-bold mb-2">
              <motion.span>{rounded}</motion.span>+
            </motion.div>
            <div className="text-gray-200">{stat.label}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Stats;
