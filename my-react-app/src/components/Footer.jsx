import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white relative overflow-hidden ">
      <div className="mx-auto px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column (1/4 width) */}
          <div className="flex flex-col items-center text-center space-y-4 lg:col-span-1">
            {/* Logo */}
            <div>
              <img
                src="/logo2-Photoroom.png"
                alt="Company Logo"
                className="w-42 h-auto"
              />
              <p className="text-sec font-semibold underline montserrat tracking-wide capitalize text-sm pt-3">
                Honety.Integrity.value
              </p>
            </div>

            {/* Image */}
            <img
              src="/Global_network_generated-Photoroom.png"
              alt="Global Coverage"
              className="w-full max-w-xs h-auto object-cover"
            />

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
              >
                
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
              >
                
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
              >
                
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
              >
                
              </a>
            </div>
          </div>

          {/* Right Column (3/4 width) */}
          <div className="lg:col-span-3 space-y-8 bg-sec px-8 py-12 rounded-xl">
            {/* Newsletter Section (Takes Full Width) */}
            {/* Latest Updates Section */}
            <div className="w-full border-b border-gray-500 pb-6 px-4">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                {/* Heading */}
                <h3 className="text-xl space lg:text-4xl font-semibold tracking-wide w-full lg:w-1/2 text-center lg:text-left">
                  Latest Updates & News
                </h3>

                {/* Recent News/Updates List */}
                <div className="w-full lg:w-1/2 space-y-3">
                  <div className="text-white p-4 rounded-md">
                    <h4 className="font-semibold">New Shipping Routes Open</h4>
                    <p className="text-sm text-gray-300">
                      We've expanded to new international trade lanes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Columns Below Newsletter */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1: About */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">About</h4>
                <p className="text-gray-300">
                  Seamless Logistics, Global Reach – Expert freight, customs,
                  transport, and warehousing solutions for smooth cargo flow
                </p>
              </div>

              {/* Column 2: Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                <p className="text-gray-300">
                  JADEJA GIRIRAJSINH : +91 98258 97999
                </p>
                <p className="text-gray-300">
                  ZALA HARSHRAJSINH : +91 74359 18212
                </p>
              </div>

              {/* Column 3: Address */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Address</h4>
                <p className="text-gray-300">
                  201-202/212, Varunisha Crossway, Plot # 589, Ward 12-C,
                  Gandhidham - Kachchh - 370201.
                </p>
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