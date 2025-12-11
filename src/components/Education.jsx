import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Education = () => {
  const educationDetails = [
    {
      institution: "Malawi University of Science and Technology",
      degree: "BSc in Business Information Technology",
      duration: "2018 - 2022",
      description:
        "Graduated with hands-on experience in IT, web development, and ICT system optimization.",
    },
    {
      institution: "Rumphi Secondary School",
      degree: "Malawi School Certificate of Education",
      duration: "2013 - 2017",
      description: "Achieved strong academic results with a focus on STEM subjects.",
    },
  ];

  const certifications = [
    { title: "System Administration & IT Infrastructure", provider: "Google", year: "2024" },
    { title: "Google IT Support Professional", provider: "Google", year: "2024" },
  ];

  return (
    <section id="education" className="py-0">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Academic foundation and professional certifications driving excellence
          </p>
        </div>
        
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Side - Education & Certifications */}
        <motion.div className="lg:w-2/3 w-full flex flex-col space-y-12" variants={fadeInUp}>

          {/* Education Section */}
          <motion.div variants={fadeInUp}>
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center" variants={fadeInUp}>
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
              Education
            </motion.h3>
            <div className="space-y-6">
              {educationDetails.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-blue-600 shadow-xl rounded-2xl p-8 transition duration-300 hover:shadow-2xl border border-gray-100"
                  variants={fadeInUp}
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-xl text-blue-700 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500 font-medium mb-4">{edu.duration}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={fadeInUp}>
            <motion.h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center" variants={fadeInUp}>
              <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
              Certifications
            </motion.h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-green-600 shadow-xl rounded-2xl p-8 transition duration-300 hover:shadow-2xl border border-gray-100"
                  variants={fadeInUp}
                >
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-xl text-green-700 font-semibold mb-1">{cert.provider}</p>
                  <p className="text-sm text-gray-500 font-medium">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div className="lg:w-1/3 flex justify-center items-start mt-12 lg:mt-0" variants={fadeInUp}>
          <div className="relative">
            <img
              src="/VIB_0501.jpg"
              alt="Education"
              className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Education;
