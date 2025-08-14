import React, { useEffect } from 'react';

const projects = [
  {
    title: "Responsive Portfolio Website",
    description: "Built using React and Tailwind CSS, showcasing modern design and responsive layout.",
    link: "#",
  },
  {
    title: "E-Commerce Frontend",
    description: "Designed a full e-commerce UI with cart, filtering and product listing using React.",
    link: "#",
  },
  {
    title: "Invoice to JSON Converter",
    description: "Used Python Flask and Google API to convert scanned invoices into JSON.",
    link: "#",
  },
  {
    title: "Responsive Portfolio Website",
    description: "Built using React and Tailwind CSS, showcasing modern design and responsive layout.",
    link: "#",
  },
  {
    title: "E-Commerce Frontend",
    description: "Designed a full e-commerce UI with cart, filtering and product listing using React.",
    link: "#",
  },
  {
    title: "Invoice to JSON Converter",
    description: "Used Python Flask and Google API to convert scanned invoices into JSON.",
    link: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-white to-gray-100 font-poppins"
    >
      <h2 className="text-4xl font-bold text-center text-red-600 mb-14">
        <span className="text-black">My</span> Latest Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card opacity-0 translate-y-8 bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-red-300 hover:scale-105 transition-all duration-500 ease-in-out"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-semibold text-[#A98868] mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
