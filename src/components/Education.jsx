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
      degree: "Bachelor of Science in Business Information Technology",
      duration: "2018 - 2022",
      description:
        "Graduated with hands-on experience in IT, including web development, analyzing, enhancing, and optimizing ICT systems.",
    },
    {
      institution: "Rumphi Secondary School",
      degree: "Malawi School Certificate of Education",
      duration: "2013 - 2017",
      description:
        "Achieved strong academic results with a focus on science and technology subjects.",
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
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          variants={fadeInUp}
        >
          Education & Certifications
        </motion.h2>

        {/* Education Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <motion.h3 className="text-2xl font-semibold text-blue-600 mb-8 px-4" variants={fadeInUp}>
            Education
          </motion.h3>
          <motion.div className="space-y-12" variants={staggerContainer}>
            {educationDetails.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <p className="mt-3 text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={fadeInUp}>
          <motion.h3 className="text-2xl font-semibold text-green-600 mb-8" variants={fadeInUp}>
            Certifications
          </motion.h3>
          <motion.div className="space-y-8" variants={staggerContainer}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-lg text-gray-600 font-medium">{cert.provider}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
