import React from "react";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Services from "../components/Services"; // Import the Services component

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 min-h-screen flex flex-col justify-between"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-28">
          {/* Left Content */}
          <div
            className="text-center md:text-left md:w-1/2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Hello, I'm <span className="text-blue-600">Matthews Gondwe</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              I am a passionate developer focused on creating seamless digital
              solutions that empower your business and elevate your digital
              presence.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <a
                href="mailto:matthewgondwe1@gmail.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:-translate-y-1 transform transition text-sm md:text-base"
              >
                Hire Me
              </a>

              <a
                href="/MatthewsGondweCV.pdf"
                download
                className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 hover:-translate-y-1 transform transition text-sm md:text-base"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 hover:shadow-2xl transition transform hover:scale-105">
              <img
                src="Banner.jpg"
                alt="Matthews Gondwe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Services /> {/* Use the Services component here */}
        </div>

        {/* Skills and Education Section */}
        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Skills />
        </div>
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Home;
