// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
              I am a detail-oriented professional with a Bachelor's degree in Business Information
              Technology from Malawi University of Science and Technology. Experienced in web and
              mobile development, I bring strong analytical skills, adaptability, and a commitment
              to delivering innovative solutions.
            </p>
          </div>
          <div className="md:w-1/2">
            <ul className="list-disc ml-6 space-y-2">
              <li>Web Development (React, Laravel, Tailwind CSS)</li>
              <li>Mobile Development (Flutter)</li>
              <li>Cloud Platforms (Firebase, Google Cloud)</li>
              <li>Programming Languages (Java, PHP, Python, Dart)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
