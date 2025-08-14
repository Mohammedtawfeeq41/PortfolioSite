import React, { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Dribbble,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const footerTop = footer?.getBoundingClientRect().top;

      if (footerTop < window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className="relative text-white px-6 py-16 rounded-t-[2.5rem] bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background Gradient Blur (subtle glow for decoration) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-red-800 via-black to-gray-900 opacity-30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-tr from-gray-800 via-black to-gray-900 opacity-30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 relative z-10">
        {/* Left - Logo & About */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-xl font-bold">
              T
            </div>
            <span className="text-xl font-bold">Tawfeeq</span>
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-sm">
            I’m a dedicated Designer and Developer, combining creative design with clean code to deliver impactful digital experiences.
          </p>
          <div className="flex gap-3">
            <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Facebook size={16} />
            </button>
            <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Dribbble size={16} />
            </button>
            <button className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center">
              <Twitter size={16} />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-red-500 font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonial</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-red-500 font-semibold mb-4">Contact</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>+91 91502 23002</li>
            <li>tawfz4164@gmail.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-red-500 font-semibold mb-4">Book your call</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 rounded-l-lg bg-white text-black text-sm w-48"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-lg text-white text-sm hover:bg-red-700">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>
          Copyright © 2025 <span className="text-red-500">Mohammed Tawfeeq</span>. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">User Terms & Conditions</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>

      {/* Scroll To Top Button (only visible when footer is in view) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 z-50 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
