import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GrServicePlay } from "react-icons/gr";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const services = [
    {
      title: "Sea Freight",
      image: "/cargo-ship-6598149_1280.jpg",
      description: "Global ocean transportation solutions",
    },
    {
      title: "Air Cargo",
      image: "/airport-1152251_1280.jpg",
      description: "Express worldwide air delivery",
    },
    {
      title: "Project Cargo",
      image: "/port-6670684_1280.jpg",
      description: "Expertise in handling oversized & heavy shipments.",
    },
    // {
    //   title: 'Customs Clearance',
    //   image: '/employees-working-warehouse.jpg',
    //   description: 'Hassle-free customs formalities for timely cargo release.'
    // },
    {
      title: "Inland Transportation",
      image: "/airport-1152251_1280.jpg",
      description:
        "Efficient transport services to move cargo to its destination.",
    },
    // {
    //   title: 'Warehousing & Distribution',
    //   image: '/photorealistic-scene-with-warehouse-logistics-operations.jpg',
    //   description: 'Secure storage & streamlined distribution solutions.'
    // },
    // Add more services...
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveService((prev) => (prev + 1) % services.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      {/* <img
        src="/js/pattern1.png"
        alt="Pattern"
        className="absolute bottom-10 left-10 w-96 h-auto opacity-50"
      /> */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 ">
        {/* Header Section */}
        <div className="mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:w-2/5"
            >
              <span className="flex items-center gap-2 text-md text-gray-800 font-semibold tracking-wide poppins">
                <GrServicePlay className="font-bold text-cyan-900 text-lg" />
                Our Services
              </span>

              <p className="text-4xl font-bold text-gray-900 space pt-3 ">
                Logistics Solution <br />
                and <span className="text-cyan-900">Services</span>
              </p>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 text-start md:w-2/5"
            >
              Seamless Logistics, Global Reach – Expert freight, customs,
              transport, and warehousing solutions for smooth cargo flow
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-end md:w-1/5"
            >
              <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f6b98a]/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl">
                <span class="relative z-10">All Services</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Container */}
            {/* <div className="lg:w-2/5 h-[29rem] relative overflow-hidden rounded-xl">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={activeService}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className='service-three-shape z-50'></div>
              </AnimatePresence>
            </div> */}
            <div className="lg:w-2/5 h-[29rem] relative overflow-hidden rounded-xl">
              {services.map((service, index) => (
                <motion.img
                  key={index}
                  src={service.image}
                  alt={service.title}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                    activeService === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="service-three-shape z-50"></div>
            </div>

            {/* Service Cards */}
            <div className="lg:w-3/5 relative">
              <div
                ref={scrollRef}
                className="flex flex-col gap-2 overflow-x-auto pb-6 scrollbar-hide"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    onHoverStart={() => {
                      setIsHovered(true);
                      setActiveService(index);
                    }}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ y: -5 }}
                    className="flex-shrink-0 w-full bg-white p-6 pb-0 cursor-pointer "
                  >
                    <div className="border-b pb-6 border-gray-200">
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { GrServicePlay } from "react-icons/gr";

// const ServicesSection = () => {
//   const [activeService, setActiveService] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const scrollRef = useRef(null);

//   const services = [
//     {
//       title: "Sea Freight",
//       image: "/cargo-ship-6598149_1280.jpg",
//       description: "Global ocean transportation solutions",
//     },
//     {
//       title: "Air Cargo",
//       image: "/airport-1152251_1280.jpg",
//       description: "Express worldwide air delivery",
//     },
//     {
//       title: "Project Cargo",
//       image: "/port-6670684_1280.jpg",
//       description: "Expertise in handling oversized & heavy shipments.",
//     },
//     {
//       title: "Inland Transportation",
//       image: "/airport-1152251_1280.jpg",
//       description:
//         "Efficient transport services to move cargo to its destination.",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered) {
//         setActiveService((prev) => (prev + 1) % services.length);
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <section className="w-full py-20 px-4 bg-gray-50 relative">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16">
//         {/* Header Section */}
//         <div className="mx-auto mb-16">
//           <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="md:w-2/5"
//             >
//               <span className="flex items-center gap-2 text-md text-gray-800 font-semibold tracking-wide poppins">
//                 <GrServicePlay className="text-cyan-900 text-lg" /> Our Services
//               </span>
//               <p className="text-4xl font-bold text-gray-900 pt-3">
//                 Logistics Solution <br />
//                 <span className="text-cyan-900">and Services</span>
//               </p>
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-gray-600 text-start md:w-2/5"
//             >
//               Seamless Logistics, Global Reach – Expert freight, customs,
//               transport, and warehousing solutions.
//             </motion.p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="relative flex items-center justify-center overflow-hidden bg-pri text-white px-8 py-3 rounded-xl shadow-2xl transition-all hover:shadow-orange-900"
//             >
//               All Services
//             </motion.button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="mx-auto flex flex-col lg:flex-row gap-8">
//           {/* Image Section */}
//           <div className="lg:w-2/5 h-[29rem] relative overflow-hidden rounded-xl">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeService}
//                 src={services[activeService].image}
//                 alt={services[activeService].title}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1.05 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-full object-cover absolute inset-0"
//               />
//             </AnimatePresence>
//           </div>

//           {/* Service Cards */}
//           <div className="lg:w-3/5 relative">
//             <div
//               ref={scrollRef}
//               className="flex flex-col gap-2 overflow-x-auto pb-6 scrollbar-hide"
//             >
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   onHoverStart={() => {
//                     setIsHovered(true);
//                     setActiveService(index);
//                   }}
//                   onHoverEnd={() => setIsHovered(false)}
//                   whileHover={{ y: -5 }}
//                   className="flex-shrink-0 w-full bg-white p-6 pb-0 cursor-pointer border-b border-gray-200"
//                 >
//                   <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
