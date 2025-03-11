import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { GrServicePlay } from "react-icons/gr";
import {
  FaShippingFast,
  FaClipboardCheck,
  FaMapMarkedAlt,
} from "react-icons/fa";
import Stats from "./Stats";

const TeamSection = () => {
  const roles = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      name: "Port Operations Team",
      expertise: "Cargo Handling & Customs Experts",
      detail: "24/7 operations management at Kandla & Mundra ports",
      photo: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      icon: <FaClipboardCheck className="text-3xl" />,
      name: "Compliance Specialists",
      expertise: "Regulatory & Documentation",
      detail: "Ensuring seamless international trade compliance",
      photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl" />,
      name: "Logistics Network",
      expertise: "Global Supply Chain Management",
      detail: "150+ international partner connections",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (statsInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [statsInView, controls]);

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat-space pattern-crosses pattern-cyan-500 pattern-size-8" />
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="flex items-center justify-center gap-2 text-md poppins font-bold text-gray-700 mb-4">
            <GrServicePlay className="font-bold text-cyan-900 text-lg" />
            Our Team
          </h2>
          
          <p className="text-4xl space font-semibold text-gray-800 max-w-2xl mx-auto">
            Specialized teams driving <br />{" "}
            <span className="text-cyan-900">Hem's port </span>logistics success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, borderColor: "#0891b2" }}
              transition={{ delay: index * 0.15, type: "spring" }}
              className="group relative bg-white rounded-xl p-8 border-2 border-cyan-100 hover:shadow-lg transition-all"
            >
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
              >
                <img
                  src={role.photo}
                  alt={role.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="pt-16 text-center">
                <h3 className="text-2xl font-bold text-cyan-900 mb-2">
                  {role.name}
                </h3>
                <p className="text-cyan-600 font-medium mb-4">
                  {role.expertise}
                </p>
                <p className="text-gray-600">{role.detail}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        <Stats />
      </div>
    </section>
  );
};

export default TeamSection;
