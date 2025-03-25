import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MUST Library Website",
      description:
        "Developed using React JS, Tailwind CSS for the frontend and Express JS for the backend which runs on MySQL",
      image: "must.png",
      link: "https://library.must.ac.mw/",
    },

    {
      title: "Library_Management_system",
      description: "Developed using Laravel, Tailwind CSS, and MySQL.",
      image: "Library_Management_system.png",
      link: "#",
    },

    {
      title: "Sports Ticketing System",
      description: "Devloped using Laravel, Tailwind CSS, and MySQL.",
      image: "sports-ticketing.png",
    },

    {
      title: "Digital Skills LMS",
      description: "Developed using PHP, HTML, CSS and WordPress.",
      image: "/digitalskills.png",
      link: "https://digitalskillsforafrica.com/",
    },
    {
      title: "Vanguard Life Assurance Website",
      description: "Developed using PHP, HTML, and WordPress.",
      image: "/vanguard.png",
      link: "https://vanguardlifemw.com/",
    },
    {
      title: "Green for Africa",
      description: "Developed using PHP, HTML, and WordPress.",
      image: "/green4africa.png",
      link: "https:green4africa.netlify.app",
    },
    {
      title: "Jesus Power Network Website",
      description: "Developed using PHP, HTML, and WordPress.",
      image: "/jesuspower.png",
      link: "https://jesuspowernet.org/",
    },
    {
      title: "MSA Website",
      description: "Developed using PHP, HTML, and WordPress.",
      image: "/MSA.png",
      link: "https://msa.mw/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-serif font-bold text-gray-900  pl-4 text-center mb-8">
          My Projects
        </h2>

        <p className="text-xl text-center text-gray-800 mb-12">
          This is a collection of projects I have worked on, both individually
          and collaboratively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image with Hover Zoom Effect */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              {/* Action Buttons */}
              <div className="bg-blue-50 py-2 px-6 text-right">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    Visit Website &rarr;
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    View Details &rarr;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal for View Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover mb-4 transition-transform duration-300 transform hover:scale-105"
              />
              <p className="text-gray-600">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
