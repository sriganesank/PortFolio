import React from "react";
import { FaReact, FaJsSquare, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { BsBootstrap } from "react-icons/bs"; // Bootstrap Icon
import { AiOutlineAntDesign } from "react-icons/ai"; // TailwindCSS (Ant Design Icon)
import { GitHub } from "@mui/icons-material"; // Material UI Icon (GitHub)

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="w-full py-20 px-4 sm:px-6 bg-[#000000] lg:px-12">
      {/* Heading with fade-in animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}  // Fade-in effect
        initial={{ opacity: 0, y: -100 }}  // Start from above
        transition={{ duration: 1.5 }}  // Duration of fade-in
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-20 pb-2 relative"
      >
        Technologies
        <motion.span
          className="absolute bottom-0 left-1/2 w-20 h-1 bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </motion.h2>

      {/* Technology icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center gap-6 flex-wrap"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg  p-4 w-28 h-28"
        >
          <FaReact className="text-blue-400 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">React</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg  p-4 w-28 h-28"
        >
          <FaJsSquare className="text-yellow-500 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">JavaScript</p>
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg  p-4 w-28 h-28"
        >
          <SiExpress className="text-gray-600 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">Express.js</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg  p-4 w-28 h-28"
        >
          <FaNodeJs className="text-green-500 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">Node.js</p>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg p-4 w-28 h-28"
        >
          <SiMongodb className="text-green-600 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">MongoDB</p>
        </motion.div>

        {/* Figma */}
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg  p-4 w-28 h-28"
        >
          <FaFigma className="text-purple-500 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">Figma</p>
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg p-4 w-28 h-28"
        >
          <BsBootstrap className="text-primary text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">Bootstrap</p>
        </motion.div>

        {/* TailwindCSS */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg p-4 w-28 h-28"
        >
          <AiOutlineAntDesign className="text-teal-500 text-5xl" />
          <p className="text-sm font-medium text-gray-800 mt-2">TailwindCSS</p>
        </motion.div>

        {/* Material UI */}
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center border-2 border-yellow-400 shadow shadow-gray-200 rounded-lg p-4 w-28 h-28"
        >
          <GitHub className="text-white text-5xl" /> {/* Replace this with your desired MUI icon */}
          <p className="text-sm font-medium text-gray-800 mt-2">GitHub</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
