import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gradient-to-r from-black via-red-600 to-black bg-opacity-70 backdrop-blur-md text-white py-4 px-6 shadow-md shadow-red-500/20 font-poppins fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] rounded-full z-50">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            <span className="text-red-600">Port</span>folio
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-10 text-base font-medium">
            
            <li>
              <a href="#skills" className="hover:text-black transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-black transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Download CV - Desktop */}
          <a
            href="/MohammedResume.pdf"
            download
            className="hidden md:inline-block ml-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-lg transition"
          >
            Download CV
          </a>

          {/* Hamburger - Mobile */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl text-white p-4 text-center z-40 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 bg-black bg-opacity-95"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        
        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-red-400"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-red-400"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block py-2 hover:text-red-400"
        >
          Contact
        </a>
        <a
          href="/MohammedResume.pdf"
          download
          onClick={() => setIsOpen(false)}
          className="block mt-4 bg-red-600 hover:bg-red-700 rounded-full py-2 font-semibold"
        >
          Download CV
        </a>
      </div>
    </>
  );
};
