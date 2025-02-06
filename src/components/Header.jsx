import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold px-4 lg:px-14">Matthews Gondwe</h1>
        </Link>
        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent shadow-lg md:shadow-none flex flex-col md:flex-row items-center md:space-x-10 lg:px-14 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="w-full md:w-auto text-center md:text-left ">
            <a
              href="/about"
              className="block py-2 md:py-0 px-6 md:px-0 hover:text-gray-400"
            >
              About Me
            </a>
          </li>
          <li className="w-full md:w-auto text-center md:text-left">
            <a
              href="/projects"
              className="block py-2 md:py-0 px-6 md:px-0 hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li className="w-full md:w-auto text-center md:text-left">
            <a
              href="/experience"
              className="block py-2 md:py-0 px-6 md:px-0 hover:text-gray-400"
            >
              Experience
            </a>
          </li>
          <li className="w-full md:w-auto text-center md:text-left">
            <a
              href="/contact"
              className="block py-2 md:py-0 px-6 md:px-0 hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
