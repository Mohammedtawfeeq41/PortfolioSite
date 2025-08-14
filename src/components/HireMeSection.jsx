import React from "react";
import profile from "../assets/profile.png"; // make sure your image is saved as profile.png

const HireMeSection = () => {
  return (
    <section className="bg-[#eeeeee] rounded-[30px] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 -mt-25">

      {/* Left Side - Image with red circle */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Circle Container */}
        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-red-600 rounded-full relative flex items-center justify-center">
          {/* Profile Image lifted above the circle */}
          <img
            src={profile}
            alt="Profile"
            className="w-[250px] md:w-[280px] scale-x-[-1] z-10 -mt-20"
          />
        </div>
      </div>

      {/* Right Side - Text and Stats */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why You <span className="text-red-600">Hire Me</span> for <br />
          Your Next Projects?
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          I bring creativity, dedication, and attention to detail in every project I take on. With hands-on 
          experience across design and development, I aim to deliver results that truly stand out.
        </p>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-10 mb-8">
          <div>
            <h3 className="text-xl font-bold text-black">120+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">15+</h3>
            <p className="text-gray-600">Companies Worked With</p>
          </div>
        </div>

        {/* Button */}
        <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default HireMeSection;
