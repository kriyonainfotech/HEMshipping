import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md">
        {/* Top Bar */}
        <div className="hidden lg:flex bg-sec text-white py-3">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="md:flex space-x-6">
              <div className="flex flex-wrap items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 poppins">
                <IoCall className="text-lg" />
                <span className="text-sm hidden sm:inline">
                  +1 (123) 456-7890
                </span>
              </div>
              <div className="flex flex-wrap items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 poppins">
                <IoMdMailUnread className="text-lg " />
                <span className="text-sm hidden sm:inline">
                  info@shippinglogistics.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 poppins">
              <FaLocationDot />
              <span className="text-sm hidden sm:inline">
                1234 Sed ut perspiciatis Road, At vero eos, D58 8975, London.
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo2.JPG" alt="Shipping Logo" className="h-22" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link
              to={"/"}
              className="text-pri hover:text-blue-800 font-semibold"
            >
              Home
            </Link>
            <Link
              to={"/services"}
              className="text-gray-700 hover-text-pri font-semibold"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover-text-pri font-semibold"
            >
              Tracking
            </Link>
            <Link
              to={"/about"}
              className="text-gray-700 hover-text-pri font-semibold"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover-text-pri font-semibold"
            >
              Contact
            </Link>
            <button className="bg-sec text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 ml-4">
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-gray-100 border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full flex justify-center text-center">
            <div className="px-8 py-4 flex flex-col space-y-4">
              <a href="#" className="text-pri font-semibold border-b">
                Home
              </a>
              <a href="#" className="text-gray-700 hover-text-pri">
                Services
              </a>
              <a href="#" className="text-gray-700 hover-text-pri">
                Tracking
              </a>
              <a href="#" className="text-gray-700 hover-text-pri">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover-text-pri">
                Contact
              </a>
              <button className="bg-sec text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-2">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
// import { useState, useRef, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import { IoCall } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const menuRef = useRef(null);

//   // Function to handle click outside
//   const handleClickOutside = useCallback((event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//       // setIsMobileDropdownOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [handleClickOutside]);

//   return (
//     <div className="bg-white shadow-md">
//       {/* Top Bar */}
//       <div className="hidden lg:flex bg-sec text-white py-3">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="md:flex space-x-6">
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200">
//               <IoCall className="text-lg" />
//               <span className="text-sm hidden sm:inline">
//                 +1 (123) 456-7890
//               </span>
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200">
//               {/* <IoMdMailUnread className="text-lg" /> */}
//               <span className="text-sm hidden sm:inline">
//                 info@shippinglogistics.com
//               </span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200">
//             <FaLocationDot />
//             <span className="text-sm hidden sm:inline">
//               1234 Sed ut perspiciatis Road, At vero eos, D58 8975, London.
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-12 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo2.JPG" alt="Shipping Logo" className="h-22" />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-8 items-center relative">
//           <Link to={"/"} className="text-pri hover:text-blue-800 font-semibold">
//             Home
//           </Link>

//           {/* Services Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="text-gray-700 hover:text-pri font-semibold focus:outline-none"
//             >
//               Services
//             </button>

//             <div
//               ref={dropdownRef}
//               className={`absolute z-50 left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
//                 isDropdownOpen
//                   ? "opacity-100 translate-y-0 scale-100"
//                   : "opacity-0 translate-y-2 scale-95 pointer-events-none"
//               }`}
//             >
//               <Link
//                 to="/service1"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
//               >
//                 Service 1
//               </Link>
//               <Link
//                 to="/service2"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
//               >
//                 Service 2
//               </Link>
//               <Link
//                 to="/service3"
//                 className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
//               >
//                 Service 3
//               </Link>
//             </div>
//           </div>

//           <Link to="#" className="text-gray-700 hover:text-pri font-semibold">
//             Tracking
//           </Link>
//           <Link
//             to={"/about"}
//             className="text-gray-700 hover:text-pri font-semibold"
//           >
//             About Us
//           </Link>
//           <Link to="#" className="text-gray-700 hover:text-pri font-semibold">
//             Contact
//           </Link>
//           <button className="bg-sec text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 ml-4">
//             Get a Quote
//           </button>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden m-4 rounded-md text-gray-700 hover:bg-gray-100"
//           onClick={() => {
//             setIsMenuOpen(!isMenuOpen);
//             setIsMobileDropdownOpen(false); // Close dropdown when closing menu
//           }}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={
//                 isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//               }
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={menuRef}
//         className={`lg:hidden bg-gray-100 border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="w-full flex justify-center text-center">
//           <div className="px-8 py-4 flex flex-col space-y-4">
//             <a href="#" className="text-pri font-semibold border-b">
//               Home
//             </a>
//             <button
//               onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//               className="text-gray-700 hover:text-pri"
//             >
//               Services
//             </button>
//             {isMobileDropdownOpen && (
//               <div className="flex flex-col pl-4">
//                 <a
//                   href="/service1"
//                   className="text-gray-700 bg-orange-200 my-1 py-2 hover:text-pri"
//                 >
//                   Service 1
//                 </a>
//                 <a
//                   href="/service1"
//                   className="text-gray-700 bg-orange-200 my-1 py-2 hover:text-pri"
//                 >
//                   Service 2
//                 </a>
//                 <a
//                   href="/service1"
//                   className="text-gray-700 bg-orange-200 my-1 py-2 hover:text-pri"
//                 >
//                   Service 3
//                 </a>
//               </div>
//             )}
//             <a href="#" className="text-gray-700 hover:text-pri">
//               Tracking
//             </a>
//             <a href="#" className="text-gray-700 hover:text-pri">
//               About Us
//             </a>
//             <a href="#" className="text-gray-700 hover:text-pri">
//               Contact
//             </a>
//             <button className="bg-sec text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-2">
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
