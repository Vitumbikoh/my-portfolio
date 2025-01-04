// src/pages/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Developer',
      company: 'Luntha Inc Limited',
      description: 'Developed a company website to enhance online presence.',
    },
    {
      role: 'Information Technology Intern',
      company: 'Ntha Foundation',
      description: 'Developed web applications and solutions, created system documentation to improve efficiency.',
    },
    {
      role: 'Web Developer',
      company: 'Malawi University of Science and Technology',
      description: 'Developed a Library Management System to streamline library operations.',
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{exp.role}</h3>
              <p className="text-gray-600 italic mb-4">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
