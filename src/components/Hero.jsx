import React from "react";
import profileImg from "../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleHireMeClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProjectsClick = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 flex items-center justify-center overflow-hidden px-6 py-12">
      {/* Subtle Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#ffffff",
            },
          },
          particles: {
            number: { value: 30 },
            color: { value: "#d1d5db" }, // gray-300
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 0.6 },
            links: { enable: false },
          },
        }}
      />

      {/* Content */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-10 z-10">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left md:pl-14">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 drop-shadow-md">
            Hi, I'm <span className="text-red-600">Mohammed Tawfeeq</span>
          </h1>
          <span className="text-2xl md:text-3xl text-red-500 font-semibold">
            <Typewriter
              words={["Front-End Developer", "UI/UX Designer"]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </span>
          <p className="text-lg max-w-xl mt-4 text-gray-600 mb-6">
            Crafting beautiful and responsive web interfaces using React and
            Tailwind CSS.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={handleHireMeClick}
              className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-700 transition"
            >
              Hire Me
            </button>
            <button
              onClick={handleViewProjectsClick}
              className="border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-100 transition"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image with Shadow */}
        <div className="flex-1 flex justify-center items-end">
          <div className="w-full max-w-md max-h-[90vh]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
