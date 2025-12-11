import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileAlt, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          Services I Offer
        </h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital solutions tailored to elevate your business
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out border border-gray-100">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faCode} className="text-blue-700 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Web Development
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Crafting sophisticated web applications with modern technologies and best practices for optimal performance and user experience.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out border border-gray-100">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faMobileAlt} className="text-green-700 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mobile Development
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Building cross-platform mobile applications that deliver seamless experiences across iOS and Android platforms.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out border border-gray-100">
          <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faPaintBrush} className="text-purple-700 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            UI/UX Design
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Creating intuitive and visually compelling designs that enhance user engagement and deliver exceptional digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
