import React from "react";

const Education = () => {
  const educationDetails = [
    {
      institution: "Malawi University of Science and Technology",
      degree: "Bachelor of Science in Business Information Technology",
      duration: "2018 - 2022",
      description:
        "Graduated with hands-on experience in IT, including web development, analyzing, enhancing, and optimizing ICT systems.",
    },
    {
      institution: "Rumphi Secondary School",
      degree: "Malawi School Certificate of Education",
      duration: "2013 - 2017",
      description: "Achieved strong academic results with a focus on science and technology subjects.",
    },
  ];

  const certifications = [
    {
      title: "System Administration and IT Infrastructure Services",
      provider: "Google",
      year: "2024",
    },
    {
      title: "Google IT Support Professional Certificate",
      provider: "Google",
      year: "2024",
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-6">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 animate-fade-in">
          Education & Certifications
        </h2>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-8 animate-fade-in">
            Education
          </h3>
          <div className="space-y-8">
            {educationDetails.map((edu, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <p className="mt-3 text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-green-600 mb-8 animate-fade-in">
            Certifications
          </h3>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-lg text-gray-600 font-medium">{cert.provider}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
