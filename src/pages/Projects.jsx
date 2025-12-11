import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Schomas School Management System",
      description: "Comprehensive school management system with student enrollment, grade tracking, staff management, and parent communication features.",
      image: "must.png", // You can replace with actual image
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
      category: "full-stack",
      type: "Education Management",
      features: ["Student Management", "Grade Tracking", "Staff Portal", "Parent Communication"]
    },
    {
      title: "Kakanga Constructions Website",
      description: "Professional construction company website showcasing services, projects portfolio, and client testimonials with modern design.",
      image: "Library_Management_system.png", // You can replace with actual image
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
      category: "full-stack",
      type: "Business Website",
      features: ["Portfolio Showcase", "Service Catalog", "Client Testimonials", "Contact Forms"]
    },
    {
      title: "MUST Library Website",
      description: "Digital library system with advanced search capabilities, user management, and comprehensive book catalog for university students and staff.",
      image: "must.png",
      link: "https://library.must.ac.mw/",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
      category: "full-stack",
      type: "Educational Platform",
      features: ["Digital Catalog", "User Management", "Search System", "Book Reservations"]
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management solution with inventory tracking, member management, and automated check-in/check-out system.",
      image: "Library_Management_system.png",
      link: "https://library-management-system.great-site.net/",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      category: "full-stack",
      type: "Management System",
      features: ["Inventory Management", "Member Portal", "Automated Systems", "Reporting"]
    },
    {
      title: "Vanguard Life Assurance Website",
      description: "Professional insurance company website with policy information, claim processing, and customer service portal.",
      image: "/vanguard.png",
      link: "https://vanguardlifemw.com/",
      technologies: ["PHP", "HTML", "WordPress"],
      category: "web",
      type: "Corporate Website",
      features: ["Policy Management", "Claims Portal", "Customer Service", "Information Hub"]
    },
    {
      title: "Green for Africa",
      description: "Environmental conservation platform promoting sustainable practices and green initiatives across Africa.",
      image: "/green4africa.png",
      link: "https://green4africa.netlify.app/",
      technologies: ["PHP", "HTML", "WordPress"],
      category: "web",
      type: "Non-Profit Platform",
      features: ["Content Management", "Event Promotion", "Resource Library", "Community Engagement"]
    },
    {
      title: "Jesus Power Network Website",
      description: "Religious organization website with event management, sermon streaming, and community engagement features.",
      image: "/jesuspower.png",
      link: "https://jesuspowernet.org/",
      technologies: ["PHP", "HTML", "WordPress"],
      category: "web",
      type: "Religious Platform",
      features: ["Event Management", "Content Streaming", "Community Features", "Donation System"]
    },
    {
      title: "MSA Website",
      description: "Professional association website with member management, news updates, and resource sharing capabilities.",
      image: "/MSA.png",
      link: "https://msa.mw/",
      technologies: ["PHP", "HTML", "WordPress"],
      category: "web",
      type: "Association Portal",
      features: ["Member Management", "News Updates", "Resource Sharing", "Event Calendar"]
    },
    {
      title: "Digital Skills LMS",
      description: "Learning Management System for digital skills training with course management, progress tracking, and certification.",
      image: "/digitalskills.png",
      link: "https://digitalskillsforafrica.com/",
      technologies: ["PHP", "HTML", "CSS", "WordPress"],
      category: "web",
      type: "Learning Platform",
      features: ["Course Management", "Progress Tracking", "Certifications", "Assessment Tools"]
    },
    {
      title: "Sports Ticketing System",
      description: "Event ticketing platform for sports events with seat selection, payment processing, and ticket validation.",
      image: "sports-ticketing.png",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      category: "full-stack",
      type: "E-Commerce Platform",
      features: ["Seat Selection", "Payment Processing", "Ticket Validation", "Event Management"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "full-stack", name: "Full-Stack" },
    { id: "web", name: "Web Development" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Portfolio Projects
          </h1>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions I've crafted, spanning web development, 
            full-stack applications, and digital transformation projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="px-6 pb-6 flex gap-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                ) : null}
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`${project.link ? 'flex-1' : 'w-full'} bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors duration-300`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 text-xl font-bold transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {selectedProject.type}
                    </span>
                  </div>
                  
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                  />
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {selectedProject.link && (
                      <div className="mt-8">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          Visit Live Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
