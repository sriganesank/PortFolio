import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa"; // Add FaTimes for the close icon
import { motion } from "framer-motion";
import Resume from "../assets/Screenshot 2025-02-14 083246.png";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  const buttonVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(255, 223, 0, 0.8)",
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  return (
    <>
      <section className="w-full min-h-screen bg-black flex flex-col max-lg:gap-7 pt-9 lg:flex-row items-center max-md:justify-evenly md:pt-28 max-md:pt-20 px-6 lg:px-16">
        {/* Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 150 }}
        >
          {/* Outer Border */}
          <motion.div
            className="absolute rotate-45 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] border-[6px] lg:border-[10px] border-yellow-400 z-30 transition-transform duration-700 ease-in-out group-hover:-rotate-45"
            initial={{ rotate: 45 }}
            whileInView={{ rotate: -45 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Inner Border */}
          <motion.div
            className="absolute rotate-90 h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] border-[6px] lg:border-[10px] border-gray-800 z-20 transition-transform duration-700 ease-in-out group-hover:rotate-180"
            initial={{ rotate: 90 }}
            whileInView={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Profile Image */}
          <motion.img
            src="https://hellloexpert.com/tf/html/amee/img/about/1.jpg"
            alt="Profile"
            className="relative z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 relative"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
            <motion.span
              className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-400"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 1 }}
            ></motion.span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base lg:text-lg mb-6 text-center lg:text-left px-4 lg:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hey there! I'm Sri Ganesan, a Full-stack developer with a strong
            foundation in web development. I specialize in technologies like
            React, Node.js, Express, and MongoDB. I build efficient,
            user-friendly solutions with expertise in both front-end and
            back-end development.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base lg:text-lg mb-6 text-center lg:text-left px-4 lg:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I craft intuitive UIs with React and optimize back-end services
            using Node.js. I’m always eager to explore new technologies and
            adapt to emerging trends. Let’s collaborate to create scalable,
            innovative solutions. Ready for the journey?
          </motion.p>

        
          {/* View Resume Button */}
          <motion.button
            className="group relative px-4 sm:px-6 py-2 text-yellow-400 border border-yellow-400 uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all"
            variants={buttonVariant}
            whileHover="hover"
            onClick={() => setShowResume(!showResume)}
          >
            See Resume
            <span className="absolute top-1/2 left-[180px] sm:left-[200px] w-[40px] sm:w-[50px] h-[2px] bg-white transform -translate-y-1/2 -translate-x-full transition-all duration-300 group-hover:translate-x-1"></span>
          </motion.button>

          {/* Resume Image Display */}
          {showResume && (
            <motion.div
              className="mt-6 flex justify-center items-center fixed inset-0 bg-black bg-opacity-80 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Close Button */}
              <motion.div
                className="absolute top-4 right-10 text-white text-2xl cursor-pointer"
                onClick={() => setShowResume(false)}
              >
                <FaTimes />
              </motion.div>

              <img
                src={Resume} // Replace this with the actual resume image URL
                alt="Resume"
                className="w-full max-w-lg border-2 border-yellow-400 shadow-lg rounded-lg"
              />
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
};

export default About;
