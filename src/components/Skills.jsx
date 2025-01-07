import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-50 py-16"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Skills & Expertise
        </h2>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Web Development (HTML, CSS, JavaScript, React, Tailwind CSS)</li>
              <li>Backend Development (Laravel, PHP, Node.js)</li>
              <li>Database Management (MySQL, Firebase Firestore)</li>
              <li>API Development and Integration</li>
              <li>Automated Testing for Laravel APIs</li>
            </ul>
          </div>

          {/* IT Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              IT Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>System Administration and IT Infrastructure Services</li>
              <li>ICT Systems Analysis and Optimization</li>
              <li>Software Installation and Troubleshooting</li>
              <li>IT Support and Helpdesk</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Team Collaboration</li>
              <li>Problem Solving and Critical Thinking</li>
              <li>Attention to Detail</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Tools & Technologies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Visual Studio Code</li>
              <li>Git and GitHub</li>
              <li>Firebase</li>
              <li>Ngrok</li>
              <li>Infinity Free Hosting</li>
            </ul>
          </div> */}

          {/* Data Collection */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">
              Data Collection
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enumerator for National Statistical Office - Malawi</li>
              <li>Data Analysis and Reporting</li>
            </ul>
          </div> */}

          {/* Other Skills */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Other Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Professional Writing</li>
              <li>Customer Service</li>
              <li>Photography Basics</li>
              <li>Nutritional Recipe Development</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
