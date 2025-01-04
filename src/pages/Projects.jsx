// src/pages/Projects.js
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
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
