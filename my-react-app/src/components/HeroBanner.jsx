import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  useEffect(() => {
    document.title =
      "Hem Shipping & Logistics | Kandla & Mundra Freight Services";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "Hem Shipping provides reliable freight forwarding, customs clearance, and logistics solutions at Kandla & Mundra Port.";
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-95"
        >
          <source src="/203404-921381913_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-cyan-800/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl leading-17 md:text-5xl font-bold mb-6 text-white poppins">
              Hem Shipping & Logistics – Trusted Freight Partner
            </h1>

            <p className="space text-lg text-white">
              Providing all types of shipping and logistics solutions at Kandla
              and Mundra ports.
            </p>

            <div className="mt-12 flex justify-center items-center gap-6">
              <Link
                to={"/contact"}
                class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f6b98a]/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl"
              >
                <span class="relative z-10">Get a Quote</span>
              </Link>
              <Link
                to={"/about-hemshipping"}
                class="relative flex h-[50px] w-64 items-center justify-center overflow-hidden bg-pri text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#f6b98a]/40 before:duration-500 before:ease-out hover:shadow-orange-900 hover:before:h-56 hover:before:w-56 rounded-xl"
              >
                <span class="relative z-10">Know More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-4 border-white rounded-full">
          <div className="w-2 h-2 bg-white rounded-full mt-2 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
