import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white relative overflow-hidden m-6 rounded-xl">

      <div className="mx-auto px-8 py-8 relative z-10">

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Left Column (1/4 width) */}
          <div className="flex flex-col items-center text-center space-y-4 lg:col-span-1">
            {/* Logo */}
            <div>
              <img
                src="/logo2-Photoroom.png"
                alt="Company Logo"
                className="w-42 h-auto"
              />
              <p className='text-sec font-semibold underline montserrat tracking-wide capitalize text-sm pt-3'>Honety.Integrity.value</p>
            </div>

            {/* Image */}
            <img
              src="/Global_network_generated-Photoroom.png"
              alt="Global Coverage"
              className="w-full max-w-xs h-auto object-cover"
            />

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors"></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"></a>
            </div>
          </div>

          {/* Right Column (3/4 width) */}
          <div className="lg:col-span-3 space-y-8 bg-sec px-8 py-12 rounded-xl">
            {/* Newsletter Section (Takes Full Width) */}
            <div className="w-full border-b border-gray-500 pb-6 px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Heading - 40% width on large screens, full width on small screens */}
                <h3 className="text-2xl lg:text-4xl font-semibold tracking-wide w-full lg:w-2/5 text-center lg:text-left space">
                  Subscribe to <br className="hidden lg:block" /> Our Newsletter
                </h3>

                {/* Email Input + Subscribe Button - 60% width on large screens, full width on small screens */}
                <div className="relative w-full lg:w-3/5">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full p-3 rounded-md bg-cyan-900 border border-cyan-800 placeholder-gray-300 pr-24"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-cyan-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>



            {/* Three Columns Below Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1: About */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">About</h4>
                <p className="text-gray-300">
                  We provide top-notch investment solutions tailored to your needs. Our goal is to maximize your returns with minimal risk.
                </p>
              </div>

              {/* Column 2: Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                <p className="text-gray-300">Email: contact@pbmit.com</p>
                <p className="text-gray-300">Phone: +(02) 574 - 328 - 301</p>
              </div>

              {/* Column 3: Address */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Address</h4>
                <p className="text-gray-300">123 Business Street, Suite 100</p>
                <p className="text-gray-300">City, State, ZIP Code</p>
              </div>
            </div>
          </div>

        </div>


        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 Shipping Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;