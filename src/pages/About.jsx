import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-serif font-bold text-gray-900 pl-4 text-center mb-12">About Me</h2>
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
              Hello! My name is Matthews Gondwe, a passionate and highly motivated IT professional
              with a strong background in software development, IT infrastructure, and system optimization.
              I hold a Bachelor's degree in <span className="font-semibold">Business Information Technology</span>
              from <span className="font-semibold">Malawi University of Science and Technology</span>. My expertise spans various
              areas, including web and mobile application development, system administration, and cloud computing.
            </p>
            <p className="mt-4">
              My journey into technology started with a deep curiosity for how digital systems operate and how they can be optimized
              to solve real-world problems. I am driven by innovation, problem-solving, and the desire to build efficient, scalable solutions
              that improve businesses and people's lives. My long-term goal is to contribute to impactful projects in software development,
              cloud computing, and emerging technologies like IoT and AI.
            </p>
            <p className="mt-4">
              Over the years, I have worked on various projects, from full-stack web applications
              to IoT integrations, showcasing my adaptability and innovative problem-solving skills.
              My key focus areas include:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Developing scalable full-stack applications using React, Next.js, Express, Laravel, and MySQL.</li>
              <li>Building mobile applications using Flutter for dynamic user experiences.</li>
              <li>Implementing and managing IT infrastructure, including Linux servers and Apache deployments.</li>
              <li>Automating software deployment and API testing.</li>
              <li>Leveraging cloud services such as Firebase and Google Cloud for seamless solutions.</li>
            </ul>
          </div>
        </div>

        {/* Skills and Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Frontend Development: React, Next.js, Tailwind CSS</li>
              <li>Backend Development: Laravel, Express.js, Node.js</li>
              <li>Mobile Development: Flutter (Dart)</li>
              <li>Databases: MySQL, PostgreSQL, Firebase</li>
              <li>Programming Languages: JavaScript, PHP, Python, Dart, Java</li>
              <li>Cloud Computing: Firebase, Google Cloud</li>
              <li>Deployment & Infrastructure: Linux, Apache, Ngrok</li>
              <li>Testing & Debugging: API Testing, Jest, Postman</li>
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
                <span className="font-semibold">Full-Stack Developer (MUST Library Website)</span>: Developed and deployed
                a comprehensive digital library system with Next.js and MySQL.
              </li>
              <li>
                <span className="font-semibold">IoT & System Optimization</span>: Integrated IoT solutions
                for business process automation and efficiency enhancement.
              </li>
              <li>
                <span className="font-semibold">Restaurant Seat Reservation System</span>: Engineered a dynamic
                seating reservation system with backend API and database integration.
              </li>
              <li>
                <span className="font-semibold">Flutter E-Commerce App</span>: Built a cross-platform mobile
                application for online shopping with payment integration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
