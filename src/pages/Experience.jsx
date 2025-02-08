import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer",
      company: "Malawi University of Science and Technology",
      description:
        "Developed a University Library Information System to streamline library operations.",
      duration: "Septemeber 2024 - January 2025",
      employmentType: "Contract",
    },

    {
      role: "Web Developer",
      company: "Luntha Inc Limited",
      description: "Developed a company website to enhance online presence.",
      duration: "May 2024 - August 202",
      employmentType: "Hybrid",
    },
    {
      role: "Information Technology Intern",
      company: "Ntha Foundation",
      description:
        "Developed web applications and solutions, created system documentation to improve efficiency.",
      duration: "January 2024 - April 2024",
      employmentType: "Internship",
    },

    {
      role: "Yellow Card Brand Ambassador",
      company: "Utmost Marketing",
      description:
        "Promoted Yellow Card cryptocurrency services by educating potential clients on its benefits. Increased user engagement through strategic marketing campaigns and client onboarding support.",
      duration: "2023 – 2024",
      employmentType: "Internship",
    },
    {
      role: "Enumerator",
      company: "National Statistical Office",
      description:
        "Collected, verified, and reported data for national surveys and censuses. Ensured accurate data entry and maintained confidentiality.",
      duration: "2018",
      employmentType: "Contract",
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-600 italic mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">
                {exp.duration} | {exp.employmentType}
              </p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
