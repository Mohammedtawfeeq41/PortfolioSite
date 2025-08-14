import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

import foodWeb from "../assets/mymoon-opticals.png";
import uiux from "../assets/Apm-connect.png";
import gym from "../assets/Musclefit.png";
import sf from "../assets/Salmafoundation.png";

const projects = [
  { id: 1, image: foodWeb, title: "Opticals Application" },
  { id: 2, image: uiux, title: "Fleet Management" },
  { id: 3, image: gym, title: "MuscleFit Web UI Design" },
  { id: 4, image: sf, title: "Web Development - salmafoundation" },
  // { id: 5, image: foodWeb, title: "Travel Landing Page" },
  // { id: 6, image: foodWeb, title: "Ecommerce Store" },
];

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 2 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 2) % projects.length);
  };

  const getVisibleProjects = () => {
    return [projects[index], projects[(index + 1) % projects.length]];
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 px-6 overflow-hidden rounded-[2.5rem] text-white bg-gray-100"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-800 via-gray-600 to-black opacity-30 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-black via-gray-700 to-gray-900 opacity-30 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            Let&apos;s Have a Look at my{" "}
            <span className="text-red-600">Projects</span>
          </h2>
        </div>

        {/* Desktop View: Cards + Arrows Inline */}
        <div className="hidden md:flex items-center gap-4 justify-center">
          <button
            onClick={handlePrev}
            className="min-w-[40px] h-[40px] bg-white text-black rounded-full flex items-center justify-center shadow-md"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex gap-6">
            {getVisibleProjects().map((project) => (
              <div
                key={project.id}
                className="w-[350px] md:w-[500px] bg-white rounded-[2rem] overflow-hidden shadow-lg p-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-[1.5rem] w-full object-cover"
                />
                <h3 className="mt-4 text-center text-black font-semibold text-lg">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="min-w-[40px] h-[40px] bg-red-600 text-white rounded-full flex items-center justify-center shadow-md"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Mobile View: Cards then Arrows Below */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {getVisibleProjects().map((project) => (
                <div
                  key={project.id}
                  className="w-[280px] bg-white rounded-[2rem] overflow-hidden shadow-lg p-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-[1.5rem] w-full object-cover"
                  />
                  <h3 className="mt-4 text-center text-black font-semibold text-base">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
