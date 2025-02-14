import React from "react";
import { PROJECTS } from "./ProjectData";
import { motion } from "framer-motion";

const Projects = () => {
  const buttonVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(255, 223, 0, 0.8)",
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  return (
    <div className="pb-4 bg-[#000000]">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-20 py-20 pb-2 relative"
      >
        My Projects
        <motion.span
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </motion.h2>

      <div className="px-4 lg:px-20">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex max-md:flex-col lg:flex-row items-center lg:items-start lg:justify-between max-md:px-2"
          >
            {/* Image with GitHub Button on Hover */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full max-w-[600px] lg:max-w-[450px] h-auto border-4 border-white"
              />
              {/* GitHub Button (Appears on Hover) */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <motion.button
                  className="px-4 py-2 text-white border border-yellow-500 font-medium tracking-widest rounded hover:border-yellow-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  View on GitHub
                </motion.button>
              </a>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h6 className="mb-2 font-bold text-xl lg:text-2xl text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-sm sm:text-base lg:text-lg text-white">
                {project.description}
              </p>

              {/* Technologies Section with Bounce Animation */}
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-2 mb-2 rounded border-2 border-gray-50 px-2 py-1 text-sm font-medium text-white"
                    animate={{
                      y: [0, -10, 0], // Bounce effect (up and back down)
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: index * 0.1, // Slight delay for staggered effect
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* View Demo Button */}
              <div className="mt-4">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="group relative px-4 sm:px-6 py-2 text-yellow-400 border border-yellow-400 uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all"
                    variants={buttonVariant}
                    whileHover="hover"
                  >
                    View Demo
                    <span className="absolute top-1/2 left-12 sm:left-48 w-[30px] sm:w-[50px] h-[2px] bg-white transform -translate-y-1/2 -translate-x-full transition-all duration-300 group-hover:translate-x-1"></span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
