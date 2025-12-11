import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Matthews Gondwe. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/matthews-gondwe-429b35238/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl transition-transform transform hover:scale-110 hover:text-blue-500" />
          </a>
          <a href="https://github.com/Vitumbikoh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl transition-transform transform hover:scale-110 hover:text-gray-400" />
          </a>
          <a href="mailto:matthewgondwe1@gmail.com">
            <FaEnvelope className="text-2xl transition-transform transform hover:scale-110 hover:text-red-500" />
          </a>
          <a href="https://twitter.com/MatthewChasowa" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl transition-transform transform hover:scale-110 hover:text-blue-400" />
          </a>
          <a href="https://web.facebook.com/matthews.gondwe.18" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl transition-transform transform hover:scale-110 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
