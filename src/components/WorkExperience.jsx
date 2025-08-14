import React from "react";

const WorkExperience = () => {
  const data = [
    {
      company: "Freelancer, CH",
      date: "May 2023 - Sep 2024",
      role: "Graphic Designer",
      color: "bg-red-500",
      description:
        "Created brand assets, promotional graphics, and print materials tailored to client requirements and visual identity standards.",
    },
    {
      company: "Freelancer, CH",
      date: "Oct 2024 - Dec 2024",
      role: "Web Developer",
      color: "bg-gray-800",
      description:
        "Developed responsive websites using HTML, CSS, and JavaScript, ensuring SEO best practices and cross-browser compatibility.",
    },
    {
      company: "Altsense Technology Service, CH",
      date: "Mar 2025 - Present",
      role: "Front-End Developer",
      color: "bg-red-500",
      description:
        "Built dynamic React-based UIs using Tailwind CSS, optimized components, and worked closely with UX teams for product refinement.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-17 bg-white">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          <span className="text-black">My </span>
          <span className="text-red-600">Work Experience</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Dotted Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-400 z-0"></div>

          {/* Timeline Items */}
          {data.map((item, index) => (
            <div
              key={index}
              className="mb-24 flex flex-col md:flex-row items-center justify-between relative z-10"
            >
              {/* Left - Company & Date */}
              <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-56">
                <h3 className="text-[25px] md:text-[28px] font-semibold">
                  {item.company}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl">{item.date}</p>
              </div>

              {/* Center Dot */}
              <div className="w-0 relative my-4 md:my-0">
                <div
                  className={`w-6 h-6 ${item.color} border-4 border-white rounded-full shadow-md z-10`}
                  style={{ transform: "translateX(-50%)" }}
                ></div>
              </div>

              {/* Right - Role & Description */}
              <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-12">
                <h4 className="text-[19px] md:text-[22px] font-semibold">
                  {item.role}
                </h4>
                <p className="text-gray-600 text-[13px] md:text-[16px] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
