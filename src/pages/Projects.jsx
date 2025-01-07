import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MUST Library Management System",
      description: "Developed using React, Tailwind CSS, and Firebase.",
      image: "must.png",
      link: "https://must-library.netlify.app/",
    },
    {
      title: "Sports Ticketing System",
      description: "Built with Laravel, Tailwind CSS, and MySQL.",
      image: "/images/sports-ticketing.jpg",
    },
    {
      title: "Digital Skills LMS",
      description: "Developed using React, Tailwind CSS, and Firebase.",
      image: "/digitalskills.png",
      link: "https://digitalskillsforafrica.com/",
    },
    {
      title: "Vanguard Life Assurance Website",
      description: "Created with PHP, HTML, and WordPress.",
      image: "/vanguard.png",
      link: "https://vanguardlifemw.com/",
    },
    {
      title: "Green for Africa",
      description: "Developed using React and Tailwind CSS.",
      image: "/green4africa.png",
      link: "https:green4africa.netlify.app",
    },
    {
      title: "Jesus Power Network Website",
      description: "Developed using React and Tailwind CSS.",
      image: "/jesuspower.png",
      link: "https://jesuspowernet.org/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
                className="w-full h-48 object-cover mb-4"
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
