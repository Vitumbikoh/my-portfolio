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

        {/* Skills & Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h3>
            <ul className="list-none space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span>
                Web Development: React, Next.js, Laravel, Tailwind CSS, Express.js.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span>
                Mobile Development: Flutter.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span>
                Cloud & Database: Firebase, Google Cloud, MySQL, PostgreSQL.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span>
                Programming: Java, PHP, Python, Dart, JavaScript.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-600">✔</span>
                System Administration & IT Infrastructure.
              </li>
            </ul>
          </div>

          {/* Personal Values & Work Ethic */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Personal Values & Work Ethic
            </h3>
            <ul className="list-none space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span>
                <span className="font-semibold">Innovation</span> – Striving to create impactful solutions.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span>
                <span className="font-semibold">Adaptability</span> – Learning and evolving with new technologies.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span>
                <span className="font-semibold">Collaboration</span> – Thriving in teamwork and knowledge sharing.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-indigo-600">✔</span>
                <span className="font-semibold">Problem-Solving</span> – Applying analytical skills to tackle challenges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
