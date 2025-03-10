// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const AboutSection = () => {
//   const [activeYear, setActiveYear] = useState(2024);

//   const timeline = [
//     {
//       year: 2010,
//       title: "Humble Beginnings",
//       content: "Founded in a small warehouse with single truck"
//     },
//     {
//       year: 2014,
//       title: "Going Global",
//       content: "Expanded to international shipping routes"
//     },
//     {
//       year: 2018,
//       title: "Tech Revolution",
//       content: "Implemented real-time AI tracking systems"
//     },
//     {
//       year: 2024,
//       title: "Industry Leaders",
//       content: "Serving 100+ countries worldwide"
//     }
//   ];

//   return (
//     <section className="bg-blue-900 text-white py-20 px-4">
//       <div className="container mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">
//             Navigating Success Since 2010
//           </h2>
//           <p className="text-xl text-blue-200 max-w-2xl mx-auto">
//             From local logistics to global shipping solutions
//           </p>
//         </motion.div>

//         {/* Interactive Timeline */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Map Visualization */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="relative h-96 bg-blue-800 rounded-xl overflow-hidden"
//           >
//             <div className="absolute inset-0 opacity-30 bg-[url('https://example.com/world-map.svg')] bg-cover" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <p className="text-6xl font-bold text-blue-400">{activeYear}</p>
//                 <p className="text-xl mt-2">
//                   {timeline.find(t => t.year === activeYear)?.title}
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Timeline Steps */}
//           <div className="space-y-8">
//             {timeline.map((item) => (
//               <motion.div
//                 key={item.year}
//                 whileHover={{ scale: 1.02 }}
//                 onHoverStart={() => setActiveYear(item.year)}
//                 className="p-6 rounded-xl cursor-pointer transition-all duration-300"
//                 style={{
//                   background: activeYear === item.year
//                     ? 'linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%)'
//                     : '#1e3a8a'
//                 }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-blue-400 text-2xl font-bold">
//                     {item.year}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-blue-200">
//                       {item.content}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Core Values */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="grid md:grid-cols-3 gap-8 mt-20"
//         >
//           {['Reliability', 'Innovation', 'Sustainability'].map((value) => (
//             <div
//               key={value}
//               className="p-8 bg-blue-800 rounded-xl text-center hover:bg-blue-700 transition-colors"
//             >
//               <div className="text-4xl mb-4">
//                 {value === 'Reliability' && '🛡️'}
//                 {value === 'Innovation' && '🚀'}
//                 {value === 'Sustainability' && '🌱'}
//               </div>
//               <h3 className="text-2xl font-bold mb-2">{value}</h3>
//               <p className="text-blue-200">
//                 {value === 'Reliability' && '99.9% on-time delivery guarantee'}
//                 {value === 'Innovation' && 'Pioneering smart logistics solutions'}
//                 {value === 'Sustainability' && 'Carbon-neutral shipping options'}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import { motion } from "framer-motion";
import { FaAnchor, FaWarehouse, FaShip, FaCertificate } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-cyan-900 mb-4 poppins">
            HEM Shipping & Logistics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your Trusted Partner in Kandla & Mundra Port Operations
          </p>
        </motion.div>

        {/* Port Expertise Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Kandla Port */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-cyan-50 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-600 p-4 rounded-lg">
                <FaAnchor className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cyan-900">
                Kandla Port Specialists
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>24/7 cargo handling operations</li>
              <li>Customs clearance expertise</li>
              <li>Bonded warehouse facilities</li>
              <li>Project cargo management</li>
            </ul>
          </motion.div>

          {/* Mundra Port */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-cyan-50 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-600 p-4 rounded-lg">
                <FaShip className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cyan-900">
                Mundra Port Operations
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Deep-water terminal management</li>
              <li>Bulk cargo solutions</li>
              <li>Container freight station access</li>
              <li>Export-import documentation</li>
            </ul>
          </motion.div>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaWarehouse className="text-4xl" />,
              title: "Warehousing",
              text: "Secure storage solutions with real-time inventory tracking",
            },
            {
              icon: <FaShip className="text-4xl" />,
              title: "Freight Forwarding",
              text: "Multimodal transport coordination across air, sea & land",
            },
            {
              icon: <FaCertificate className="text-4xl" />,
              title: "Customs Clearance",
              text: "Streamlined documentation and regulatory compliance",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white shadow-lg rounded-xl"
            >
              {/* Center Icon */}
              <div className="flex justify-center items-center text-cyan-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-cyan-900 text-white rounded-xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 poppins">
              Why Partner With HEM?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "98%", label: "On-Time Delivery" },
                { number: "5000+", label: "Containers Handled" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4"
                >
                  <div className="text-4xl font-bold mb-2 space">
                    {stat.number}
                  </div>
                  <div className="text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.button whileHover={{ scale: 1.05 }}>
            <button class="relative flex items-center justify-center overflow-hidden bg-pri text-white px-8 py-4 text-lg font-semibold shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f6b98a]/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl">
              <span class="relative z-10">
                {" "}
                Get Customized Logistics Solutions
              </span>
            </button>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
