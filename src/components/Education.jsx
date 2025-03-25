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
    <section id="education" className="bg-gray-100 py-16 px-4 lg:px-20">
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Side - Education & Certifications */}
        <motion.div className="lg:w-2/3 w-full flex flex-col space-y-12" variants={fadeInUp}>
          <motion.h2
            className="text-4xl font-serif font-bold text-gray-900 border-l-8 border-blue-600 pl-4"
            variants={fadeInUp}
          >
            Education & Certifications
          </motion.h2>

          {/* Education Section */}
          <motion.div variants={fadeInUp}>
            <motion.h3 className="text-2xl font-semibold text-blue-700 mb-4" variants={fadeInUp}>
              Education
            </motion.h3>
            <div className="space-y-6">
              {educationDetails.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-blue-500 shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg"
                  variants={fadeInUp}
                >
                  <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-lg text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="mt-3 text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={fadeInUp}>
            <motion.h3 className="text-2xl font-semibold text-teal-700 mb-4" variants={fadeInUp}>
              Certifications
            </motion.h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-l-4 border-teal-500 shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg"
                  variants={fadeInUp}
                >
                  <h4 className="text-xl font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-lg text-gray-700">{cert.provider}</p>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div className="lg:w-1/3 flex justify-center items-start mt-12 lg:mt-30" variants={fadeInUp}>
          <img
            src="/VIB_0501.jpg"
            alt="Education"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
