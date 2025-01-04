import React from "react";

const Services = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        Services I Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition">
          <div className="text-blue-600 text-5xl mb-4">
            <i className="fas fa-code"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Web App Development
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Crafting bespoke web applications tailored to your unique business needs.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition">
          <div className="text-green-500 text-5xl mb-4">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Mobile App Development
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Building sleek and efficient mobile apps to enhance user experiences.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-paint-brush"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Designing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Delivering captivating and user-centric designs that leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
