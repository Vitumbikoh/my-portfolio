import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-0"
    >
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Technical proficiency across modern development stack and methodologies
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Technical Skills
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Web Development (HTML, CSS, JavaScript, React, Tailwind CSS)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Backend Development (Laravel, PHP, Node.js)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Database Management (MySQL, Firebase Firestore)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>API Development and Integration</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Automated Testing for Laravel APIs</span>
              </li>
            </ul>
          </div>

          {/* IT Skills */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                IT Skills
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>System Administration and IT Infrastructure Services</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>ICT Systems Analysis and Optimization</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Software Installation and Troubleshooting</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>IT Support and Helpdesk</span>
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Soft Skills
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Team Collaboration</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Problem Solving and Critical Thinking</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Attention to Detail</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Adaptability</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Time Management</span>
              </li>
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
