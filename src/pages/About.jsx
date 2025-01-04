import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Section Text */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              Hello! My name is Matthews Gondwe, a detail-oriented and self-motivated professional
              with a Bachelor's degree in <span className="font-semibold">Business Information Technology</span> 
              from <span className="font-semibold">Malawi University of Science and Technology</span>. 
              I have hands-on experience in IT and technology, including:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Web and mobile application development.</li>
              <li>Analyzing, enhancing, and optimizing ICT systems.</li>
              <li>Proficiency in managing cloud platforms like Firebase and Google Cloud.</li>
            </ul>
            <p className="mt-4">
              My journey has been marked by internships, coursework, and professional experience
              that have honed my skills and adaptability in the dynamic tech landscape. I thrive on
              delivering innovative solutions, paying great attention to detail, and supporting
              organizations in achieving their operational goals.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Web Development: React, Laravel, Tailwind CSS</li>
                <li>Mobile Development: Flutter</li>
                <li>Cloud Platforms: Firebase, Google Cloud</li>
                <li>Programming Languages: Java, PHP, Python, Dart</li>
                <li>Automated Testing for Laravel APIs</li>
                <li>System Administration & IT Infrastructure</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Professional Experience</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>
                  Enumerator at <span className="font-semibold">National Statistical Office - Malawi</span>:
                  Conducted data collection, verification, and reporting in Rumphi.
                </li>
                <li>
                  Hands-on experience in <span className="font-semibold">system analysis</span> and enhancing ICT systems.
                </li>
                <li>
                  Designed and deployed <span className="font-semibold">responsive web applications</span> using modern
                  frameworks like React and Laravel.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-800 text-white py-16 mt-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h3 className="text-3xl font-bold text-center mb-8">My Vision</h3>
          <p className="text-center leading-relaxed max-w-3xl mx-auto text-lg">
            My vision is to leverage my technical expertise and creativity to build solutions that
            empower businesses and communities. By combining innovation and adaptability, I aim to
            leave a lasting impact in the ever-evolving field of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
