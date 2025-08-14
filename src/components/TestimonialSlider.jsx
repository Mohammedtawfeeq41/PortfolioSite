import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Abdul Basith",
    role: "CEO, thaalainaturals",
    rating: 5.0,
    message:
      "Designed over 100+ stunning posters—highly creative, dependable, and always delivers before the deadline!",
    
  },
  {
    name: "Mohammed Shameer",
    role: "Architect, Salmafoundations",
    rating: 5.0,
    message:
      "Built a professional, responsive website—great communication, on-time delivery, and exceeded our expectations completely!",
  },
  {
    name: "Ajees",
    role: "Youtuber, TTF Pitstop",
    rating: 5.0,
    message:
      "Delivered a dynamic, powerful logo that perfectly reflects our motorsport brand—fast, creative, and reliable service.",
    
  },
  
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 2) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return [
      testimonials[index],
      testimonials[(index + 1) % testimonials.length],
    ];
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden text-white rounded-[2.5rem]">
      {/* Custom Gradient Background */}
      <div className="absolute inset-0 bg-black -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-800 via-gray-600 to-black opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-black via-gray-700 to-gray-900 opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-10 rounded-full blur-[200px]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Testimonials that Speak to <span className="text-red-600">My Results</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Discover how Mohammed Tawfeeq has helped clients achieve their goals.
        </p>

        {/* Two Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {getVisibleTestimonials().map((t, i) => (
            <div
              key={i}
              className="w-full md:w-[45%] bg-[#1c1c1c] rounded-[1.5rem] shadow-lg p-6 text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-red-600 text-lg">★</span>
                ))}
                <span className="text-white font-medium ml-1">{t.rating}</span>
              </div>
              <p className="text-gray-300 text-sm mb-6">{t.message}</p>
              <div className="flex items-center gap-3">
                
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
