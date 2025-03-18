import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [isBot, setIsBot] = useState(false);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    if (isBot) {
      setResponseMessage("Invalid submission");
      return;
    }

    // REPLACE THIS WITH YOUR DEPLOYMENT URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwf7SGpHLvclCrC7guW2heQmPbCCOKsU1QYgyaAmWmDfZRZB2HmDZXE6Jwyllg58-fd/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      setResponseMessage(
        data.result === "success"
          ? "Message sent successfully!"
          : "Error submitting form."
      );
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen overflow-x-hidden">
        <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/port/twomen.webp')" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-cyan-800 to-cyan-600 opacity-80" />

          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
        </section>
        {/* 
        <section className="bg-gradient-to-r from-gray-50 to-cyan-100 py-24">
          <div className="container mx-auto px-4">
            <motion.div className="grid md:grid-cols-2 gap-12">
              <motion.div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-cyan-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="checkbox"
                    style={{ display: "none" }}
                    checked={isBot}
                    onChange={(e) => setIsBot(e.target.checked)}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="relative flex h-[50px] w-full items-center justify-center bg-cyan-900 text-white rounded-xl"
                  >
                    <span>{isSending ? "Sending..." : "Send Message"}</span>
                  </button>
                  {responseMessage && (
                    <p className="text-center mt-4 text-gray-600">
                      {responseMessage}
                    </p>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section> */}

        <section className="bg-gradient-to-r from-gray-50 to-cyan-100 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Contact Form */}
              <motion.div
                variants={staggerItem}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
              >
                <h2 className="text-3xl font-bold text-cyan-900 mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="checkbox"
                    style={{ display: "none" }}
                    checked={isBot}
                    onChange={(e) => setIsBot(e.target.checked)}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="relative flex h-[50px] w-full items-center justify-center bg-cyan-900 text-white rounded-xl"
                  >
                    <span>{isSending ? "Sending..." : "Send Message"}</span>
                  </button>
                  {responseMessage && (
                    <p className="text-center mt-4 text-gray-600">
                      {responseMessage}
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={staggerItem} className="space-y-8">
                {/* Info Cards */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-cyan-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <PiPhoneCallDuotone className="text-3xl text-cyan-900 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600">
                          JADEJA GIRIRAJSINH : +91 9825897999
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PiPhoneCallDuotone className="text-3xl text-cyan-900 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600">
                          ZALA HARSHRAJSINH : +91 7435918212
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MdLocationPin className="text-3xl text-cyan-900 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Office</h4>
                        <p className="text-gray-600">
                          201-202/212, Varunisha Crossway, Plot # 589, Ward
                          12-C,
                          <br />
                          Gandhidham - Kachchh - 370201.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-6">
                    {[
                      {
                        icon: <FaFacebookF />,
                        name: "Facebook",
                        path: "https://www.facebook.com/profile.php?id=61563315823344&mibextid=wwXIfr&mibextid=wwXIfr",
                      },
                      {
                        icon: <IoLogoInstagram />,
                        name: "Instagram",
                        path: "https://www.instagram.com/hemshippingandlogistics?igsh=MW9mdGhocjE2Z2UwMQ%3D%3D&utm_source=qr",
                      },
                      {
                        icon: <FaLinkedinIn />,
                        name: "LinkedIn",
                        path: "https://www.linkedin.com/company/hem-shipping-and-logistics-hsal/",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.path}
                        target="_blank"
                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-xl hover:bg-white hover:text-cyan-900 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
