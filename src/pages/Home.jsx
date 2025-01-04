// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-white min-h-screen flex items-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto text-center px-6 lg:px-20 relative z-10">
        <div className="mb-8">
          <img
            src="/path-to-your-profile-picture.jpg"
            alt="Matthews Gondwe"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto border-4 border-teal-500 shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hi, I'm Matthews Gondwe
        </h1>
        <p className="text-xl md:text-3xl font-medium mb-8">
          Business Information Technology Graduate | Web & Mobile Developer | IT Professional
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-teal-600 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
