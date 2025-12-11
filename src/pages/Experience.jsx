import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Assistant Technical Officer",
      company: "MFI HUB LIMITED",
      description:
        "System development, user support and analysis. Responsible for system user training (tutoring) and providing comprehensive technical support to ensure optimal system performance.",
      duration: "March 2025 - Present",
      employmentType: "Full-time",
      current: true,
      skills: ["System Development", "User Training", "Technical Support"],
      achievements: [
        "Optimized system performance through comprehensive analysis",
        "Conducted technical training sessions for system users",
        "Provided multi-level technical support across departments"
      ]
    },
    {
      role: "Web Developer",
      company: "Malawi University of Science and Technology",
      description:
        "Developed a comprehensive University Library Information System to streamline library operations and enhance user experience.",
      duration: "September 2024 - January 2025",
      employmentType: "Contract",
      skills: ["Next.js", "MySQL", "System Architecture"],
      achievements: [
        "Delivered full-stack library management system",
        "Improved library operational efficiency by 40%",
        "Implemented advanced search and catalog features"
      ]
    },
    {
      role: "Web Developer",
      company: "Luntha Inc Limited",
      description: "Developed a modern, responsive company website to enhance online presence and improve customer engagement.",
      duration: "May 2024 - August 2024",
      employmentType: "Hybrid",
      skills: ["Web Development", "Responsive Design", "SEO"],
      achievements: [
        "Created responsive corporate website",
        "Enhanced online brand presence",
        "Implemented SEO best practices"
      ]
    },
    {
      role: "Information Technology Intern",
      company: "Ntha Foundation",
      description:
        "Developed web applications and solutions, created comprehensive system documentation to improve organizational efficiency.",
      duration: "January 2024 - April 2024",
      employmentType: "Internship",
      skills: ["Web Applications", "Documentation", "System Analysis"],
      achievements: [
        "Built custom web applications for internal use",
        "Created detailed system documentation",
        "Improved organizational workflow efficiency"
      ]
    },
    {
      role: "Yellow Card Brand Ambassador",
      company: "Utmost Marketing",
      description:
        "Promoted Yellow Card cryptocurrency services by educating potential clients on benefits. Increased user engagement through strategic marketing campaigns and client onboarding support.",
      duration: "2023 – 2024",
      employmentType: "Part-time",
      skills: ["Marketing", "Client Education", "Campaign Management"],
      achievements: [
        "Increased user engagement through targeted campaigns",
        "Educated 200+ potential clients on cryptocurrency services",
        "Supported successful client onboarding initiatives"
      ]
    },
    {
      role: "Enumerator",
      company: "National Statistical Office",
      description:
        "Collected, verified, and reported data for national surveys and censuses. Ensured accurate data entry and maintained strict confidentiality protocols.",
      duration: "2018",
      employmentType: "Contract",
      skills: ["Data Collection", "Data Analysis", "Report Writing"],
      achievements: [
        "Successfully completed national census data collection",
        "Maintained 100% data accuracy standards",
        "Ensured strict confidentiality compliance"
      ]
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            A comprehensive journey through roles that have shaped my expertise in technology, 
            development, and system optimization
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  exp.current 
                    ? 'bg-green-500 border-green-200 shadow-lg shadow-green-200' 
                    : 'bg-blue-600 border-blue-200'
                }`}>
                  {exp.current && (
                    <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className="ml-16 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 w-full">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xl text-blue-700 font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          {exp.employmentType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  {/* Skills and Achievements Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Positions Held</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
