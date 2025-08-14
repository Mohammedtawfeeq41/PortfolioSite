import React, { useEffect } from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiAdobeillustrator, SiAdobexd,SiAdobephotoshop,SiCanva } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach((card) => observer.observe(card));

    return () => skillCards.forEach((card) => observer.unobserve(card));
  }, []);

  const skills = [
    { name: "ReactJS", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-4xl" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600 text-4xl" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-purple-600 text-4xl" /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-pink-500 text-4xl" /> },
    { name: "Canva", icon: <SiCanva className="text-orange-600 text-4xl" /> },
    { name: "Wordpress", icon: <FaWordpress className="text-purple-600 text-4xl" /> },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden rounded-[2.5rem]">

      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-gray-800 via-gray-600 to-black opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-black via-gray-700 to-gray-900 opacity-40 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-10 rounded-full blur-[200px]"></div>
      </div>

      {/* Foreground Content with fully rounded background */}
      <div className="relative z-10 max-w-7xl mx-auto rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-10">
        <h2 className="text-4xl font-bold mb-12 text-red-600 text-center tracking-wide">
          <span className="text-white">My</span> Skills Set
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 translate-y-10
                bg-white/10 backdrop-blur-md
                border border-white/20 rounded-xl p-6
                shadow-md shadow-white/10
                transition-all duration-500 ease-in-out
                hover:shadow-white/20 hover:scale-105 text-center"
              style={{ transitionDelay: `${i * 10}ms` }}
            >
              <div className="mb-3 flex justify-center text-3xl text-white">
                {skill.icon}
              </div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
