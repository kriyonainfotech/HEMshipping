// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const AboutOverview = () => {
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

// export default AboutOverview;
import React from 'react'
import { FaAnchor, FaShip, FaGlobe, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const CompanyOverview = () => {
     const timelineItems = [
       {
         year: 2008,
         icon: <FaAnchor />,
         title: "Company Founded",
         content: "Started operations with single warehouse near Kandla port",
       },
       {
         year: 2012,
         icon: <FaShip />,
         title: "Mundra Expansion",
         content: "Established full-service operations at Mundra port",
       },
       {
         year: 2016,
         icon: <FaGlobe />,
         title: "Global Network",
         content: "Partnered with 50+ international logistics firms",
       },
       {
         year: 2024,
         icon: <FaTrophy />,
         title: "Industry Recognition",
         content: "Awarded 'Best Port Logistics Provider' 3 years running",
       },
     ];

     return (
       <div>
         {/* Company Story */}
         <section className="py-20 px-4 bg-gray-50 overflow-x-hidden">
           <div className="container mx-auto max-w-4xl">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="mb-16 text-center px-4"
             >
               <h2 className="text-3xl font-bold text-cyan-900 mb-4">
                 From Humble Beginnings to Industry Leaders
               </h2>
               <p className="text-gray-600 poppins">
                 Founded in 2008, Hem Shipping has become synonymous with
                 reliable port logistics
               </p>
             </motion.div>

             {/* Timeline */}
             <div className="relative">
               {/* Timeline Line - Mobile left, Desktop center */}
               <div className="hidden md:block absolute left-1/2 w-[2px] bg-gray-300 h-full top-0 -ml-0.5" />
               <div className="md:hidden absolute left-4 w-[2px] bg-gray-300 h-full top-0" />

               {timelineItems.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="relative mb-12 md:even:pl-20 md:odd:pr-20 px-4"
                 >
                   {/* Icon Container - Responsive positioning */}
                   <div className="absolute -top-6 md:top-6 right-1 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0">
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center text-white text-lg md:text-2xl">
                       {item.icon}
                     </div>
                   </div>

                   {/* Content Card */}
                   <div className="bg-white p-6 rounded-xl shadow-lg md:ml-8 md:mr-8 mt-8 md:mt-0">
                     <div className="text-cyan-600 font-bold mb-2">
                       {item.year}
                     </div>
                     <h3 className="text-xl font-semibold mb-2">
                       {item.title}
                     </h3>
                     <p className="text-gray-600">{item.content}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       </div>
     );
}

export default CompanyOverview