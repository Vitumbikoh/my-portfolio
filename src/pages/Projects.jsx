import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'MUST Library Management System',
      description: 'Developed using PHP, Bootstrap, and MySQL.',
    },
    {
      title: 'Sports Ticketing System',
      description: 'Built with Laravel, Tailwind CSS, and MySQL.',
    },
    {
      title: 'Digital Skills LMS',
      description: 'Developed using React, Tailwind CSS, and Firebase.',
    },
    {
      title: 'Vanguard Life Assurance Website',
      description: 'Created with PHP, HTML, and WordPress.',
    },
    {
      title: 'Bedir Student Grading System',
      description: 'Developed using WordPress.',
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="bg-blue-50 py-2 px-6 text-right">
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
