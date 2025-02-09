import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/Banner.jpg"
              alt="Matthews Gondwe"
              className="w-80 h-96 shadow-lg border-4 border-blue-600 object-cover"
            />
          </div>

          {/* About Section Text */}
          <div className="col-span-2 text-gray-700 text-lg leading-relaxed">
            <p>
              Hello! My name is Matthews Gondwe, a detail-oriented and self-motivated professional
              with a Bachelor's degree in <span className="font-semibold">Business Information Technology</span> 
              from <span className="font-semibold">Malawi University of Science and Technology</span>. 
              I specialize in web development, IT system administration, and software solutions, focusing on:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Full-stack development with React, Express, MySQL, and Laravel.</li>
              <li>Analyzing, optimizing, and managing ICT infrastructures.</li>
              <li>Developing scalable cloud-based applications.</li>
              <li>Deploying applications on Linux servers with Apache.</li>
            </ul>
            <p className="mt-4">
              My professional experience includes deploying applications, system optimization, 
              and leveraging cloud platforms like Firebase and Google Cloud. Passionate about innovation, 
              I thrive in dynamic environments that demand adaptability and problem-solving.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Web Development: React, Laravel, Tailwind CSS, Express.js</li>
              <li>Mobile Development: Flutter</li>
              <li>Cloud & Database: Firebase, Google Cloud, MySQL, PostgreSQL</li>
              <li>Programming Languages: Java, PHP, Python, Dart, JavaScript</li>
              <li>Automated API Testing & Deployment</li>
              <li>System Administration & IT Infrastructure</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Professional Experience</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Web Developer (Asodzi Photography)</span>: Designed and deployed 
                an interactive portfolio website for a photography business.
              </li>
              <li>
                <span className="font-semibold">IoT & System Optimization</span>: Worked on integrating 
                IoT solutions into business processes for enhanced efficiency.
              </li>
              <li>
                <span className="font-semibold">Full-Stack Development</span>: Developed and deployed 
                a React + Express-based library management system with MySQL.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;