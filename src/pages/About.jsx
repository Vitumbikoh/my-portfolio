import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate IT Professional | Software Developer | Technology Innovator
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Profile Image Section */}
            <div className="lg:col-span-2 relative overflow-hidden">
              <img
                src="/Banner.jpg"
                alt="Matthews Gondwe"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* About Text Section */}
            <div className="lg:col-span-3 p-10">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Matthews Gondwe
              </h3>
              
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p className="text-lg">
                  Hello! I am <span className="font-semibold text-blue-700">Matthews Gondwe</span>, a passionate and highly motivated IT professional
                  with extensive experience in software development, IT infrastructure, and system optimization.
                  I hold a Bachelor's degree in <span className="font-semibold">Business Information Technology</span>
                  from <span className="font-semibold">Malawi University of Science and Technology</span>.
                </p>
                
                <p>
                  My expertise encompasses web and mobile application development, system administration, 
                  and cloud computing solutions. I am driven by innovation, problem-solving, and the desire 
                  to build efficient, scalable solutions that transform businesses and enhance people's lives.
                </p>
                
                <p>
                  My long-term vision is to contribute to impactful projects in software development,
                  cloud computing, and emerging technologies such as IoT and Artificial Intelligence,
                  while continuously pushing the boundaries of technological innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
              Core Competencies
            </h2>          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Development",
                skills: ["React & Next.js", "Laravel & Express.js", "MySQL & PostgreSQL", "API Development"],
                icon: "💻"
              },
              {
                title: "Mobile Development",
                skills: ["Flutter (Dart)", "Cross-platform Apps", "UI/UX Design", "Payment Integration"],
                icon: "📱"
              },
              {
                title: "Cloud & Infrastructure",
                skills: ["Firebase & Google Cloud", "Linux Server Management", "Apache Deployment", "System Optimization"],
                icon: "☁️"
              },
              {
                title: "Programming Languages",
                skills: ["JavaScript & TypeScript", "PHP & Python", "Dart & Java", "Modern Frameworks"],
                icon: "⚡"
              }
            ].map((competency, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{competency.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {competency.title}
                </h3>
                <ul className="space-y-2">
                  {competency.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {[
              {
                role: "Assistant Technical Officer",
                company: "MFI HUB LIMITED",
                period: "March 2025 - Present",
                description: "System development, user support and analysis. Responsible for system user training (tutoring) and providing comprehensive technical support to ensure optimal system performance.",
                technologies: ["System Development", "User Training", "Technical Support"]
              },
              {
                role: "Web Developer",
                company: "Asodzi Photography",
                description: "Designed and deployed an interactive portfolio website for a photography business, focusing on visual storytelling and user experience.",
                technologies: ["React", "Tailwind CSS", "JavaScript"]
              },
              {
                role: "Full-Stack Developer",
                company: "MUST Library Website",
                description: "Developed and deployed a comprehensive digital library system with advanced search capabilities and user management.",
                technologies: ["Next.js", "MySQL", "Node.js"]
              },
              {
                role: "IoT & System Integration Specialist",
                company: "Various Projects",
                description: "Integrated IoT solutions for business process automation and efficiency enhancement across multiple industries.",
                technologies: ["IoT", "Python", "Cloud Services"]
              },
              {
                role: "Mobile App Developer",
                company: "E-Commerce Platform",
                description: "Built a cross-platform mobile application for online shopping with seamless payment integration and real-time inventory management.",
                technologies: ["Flutter", "Dart", "Firebase"]
              }
            ].map((experience, index) => (
              <div key={index} className="pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-blue-700 font-medium mb-1">{experience.company}</p>
                  {experience.period && (
                    <p className="text-gray-500 text-sm font-medium mb-3">{experience.period}</p>
                  )}
                  <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
