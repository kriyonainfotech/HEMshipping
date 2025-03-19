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
                  ZALA HARSHRAJSINH : +91 7435918212
                </span>
              </div>
              <div className="flex flex-wrap items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 poppins">
                <IoCall className="text-lg" />
                <span className="text-sm hidden sm:inline">
                  JADEJA GIRIRAJSINH : +91 9825897999
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors duration-200 poppins">
              <FaLocationDot />
              <span className="text-sm hidden sm:inline">
                201-202/212, Varunisha Crossway, Plot # 589, Ward 12-C,
                Gandhidham - Kachchh - 370201.
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="/logo2.JPG"
                alt="Hem Shipping Logistics at Kandla & Mundra Port"
                className="h-22"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link
              to={"/"}
              className={`font-semibold ${
                location.pathname === "/" ? "text-pri" : "text-gray-700"
              } hover:text-cyan-800`}
            >
              Home
            </Link>
            <Link
              to={"/services"}
              className={`font-semibold ${
                location.pathname === "/services" ? "text-pri" : "text-gray-700"
              } hover:text-cyan-800`}
            >
              Services
            </Link>
            <Link
              to={"/about-hemshipping"}
              className={`font-semibold ${
                location.pathname === "/about-hemshipping"
                  ? "text-pri"
                  : "text-gray-700"
              } hover:text-cyan-800`}
            >
              About Us
            </Link>
            <Link
              to={"/contact"}
              className={`font-semibold ${
                location.pathname === "/contact" ? "text-pri" : "text-gray-700"
              } hover:text-cyan-800`}
            >
              Contact
            </Link>
            <Link
              to={"/contact"}
              className="bg-sec text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition duration-300 ml-4"
            >
              Get a Quote
            </Link>
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
              <Link to={"/"} className="text-pri font-semibold border-b">
                Home
              </Link>
              <Link to={"/services"} className="text-gray-700 hover-text-pri">
                Services
              </Link>
              <Link to={"/about"} className="text-gray-700 hover-text-pri">
                About Us
              </Link>
              <Link to={"/contact"} className="text-gray-700 hover-text-pri">
                Contact
              </Link>
              <button className="bg-sec text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition duration-300 mt-2">
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
