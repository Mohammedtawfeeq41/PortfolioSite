import React from "react";
import uiuxImg from "../assets/uiuxDesign.png";
import graphicDesign from "../assets/graphicdesigning.jpg";
import WebDev from "../assets/webdevelopment.jpg";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { g } from "framer-motion/client";

const services = [
  {
    title: "UI/UX Designing",
    img: uiuxImg,
    active: false,
  },
  {
    title: "Web Developemnt",
    img: WebDev,
    active: true,
  },
  {
    title: "Graphic designing",
    img: graphicDesign,
    active: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden rounded-[2.5rem] text-white">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-800 via-gray-600 to-black opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-black via-gray-700 to-gray-900 opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-10 rounded-full blur-[200px]"></div>
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-red-600">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-6 overflow-hidden transition-all duration-300 hover:scale-105 ${
                service.active && service.title === "Web Developemnt"
                  ? "bg-gradient-to-br from-black via-red-600 to-red-600"
                  : "bg-white/5 border border-white/10 backdrop-blur-md"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-xl w-full h-48 object-cover shadow-lg"
                />
                <button className="absolute bottom-3 right-3 bg-[#2d2d2d] hover:bg-red-600 text-white rounded-full p-3 transition-colors z-10">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
