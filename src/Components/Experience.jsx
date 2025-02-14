import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - 2025",
    role: "UI/UX Designer",
    company: "Why Global",
    description:
      "Designed user-friendly interfaces and improved user experiences for digital products.",
  },
  {
    year: "Present",
    role: "Full Stack Developer",
    company: "Why Global ",
    description:
      "Building interactive and responsive web applications with modern frontend technologies.",
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-6 lg:px-16 relative">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Fade-in effect
        initial={{ opacity: 0, y: -100 }} // Start from above
        transition={{ duration: 1.5 }} // Duration of fade-in
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-20 pb-2 relative"
      >
        Experience
        <motion.span
          className="absolute bottom-0 left-1/2 w-20 h-1 bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </motion.h2>

      {/* Experience Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 max-md:h-[470px] h-[550px]"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>

            {/* Experience Card */}
            <motion.div
              className="relative bg-gray-900/80 border border-yellow-400 backdrop-blur-md p-10 max-md:p-7 rounded-2xl shadow-lg max-w-lg transition-all duration-500 group hover:scale-105 hover:shadow-yellow-400/50"
              whileHover={{ scale: 1 }}
            >
              <h3 className="text-lg sm:text-xl md:text-lg lg:text-2xl font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-yellow-400 text-base sm:text-lg md:text-base lg:text-xl">
                {exp.company}
              </p>
              <p className="text-gray-400 text-sm sm:text-base md:text-sm lg:text-lg mt-2">
                {exp.year}
              </p>
              <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-sm lg:text-lg">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
