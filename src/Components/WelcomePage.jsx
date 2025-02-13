import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Welcome = ({ onTransitionEnd }) => {
  const [show, setShow] = useState(true);
  const words = "Transforming Ideas into Interactive Experiences".split(" "); // Split into words array
  const text = "Welcome to My Portfolio";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onTransitionEnd) {
        onTransitionEnd(); // Trigger transition to main content
      }
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onTransitionEnd]);

  const letterVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    show && (
      <motion.div
        className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#111111] to-black px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl flex  lg:text-6xl xl:text-7xl space-x-3 font-extrabold text-white mb-5 text-center"
          initial={{ y: -100, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.05 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Words Section */}
        <div className="flex flex-wrap justify-center space-x-3 sm:space-x-5 mb-10">
          {words.map((word, index) => (
            <motion.h2
              key={index}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.5,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.h2>
          ))}
        </div>

        {/* Animated Accent Shapes */}
        <motion.div
          className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-yellow-400 opacity-30 animate-pulse"
          initial={{ x: -100, y: -100 }}
          animate={{ x: 100, y: 100 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gray-600 opacity-30 animate-pulse"
          initial={{ x: 100, y: 100 }}
          animate={{ x: -100, y: -100 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    )
  );
};

export default Welcome;
