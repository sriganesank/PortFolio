import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(255, 223, 0, 0.8)",
      transition: { yoyo: Infinity, duration: 0.3 },
    },
  };

  const handleScrollTo = (name) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      id="hero"
      className="w-full min-h-screen max-md:pt-14 md:justify-around md:mt-12 flex flex-col mt-8 lg:flex-row justify-evenly items-center bg-[#000000] px-4 sm:px-6 lg:px-12"
    >
      {/* Main Content */}
      <motion.div
        className="text w-full lg:w-[50%] border-l-8 px-4 sm:px-6 flex flex-col gap-4 justify-center items-center text-center lg:items-start lg:text-left"
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
          <span className="text-2xl sm:text-3xl lg:text-4xl">H</span>i, It's me{" "}
          <motion.span
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Sri Ganesan
          </motion.span>
        </h2>
        <h4 className="text-base sm:text-lg lg:text-xl text-white">
          And I am a{" "}
          <b className="text-yellow-400 text-lg sm:text-xl lg:text-2xl px-3">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </b>
        </h4>
        <p className="px-2 sm:px-4 lg:px-0 text-sm sm:text-base lg:text-lg text-white">
          I'm passionate about creating scalable, intuitive web applications and
          interactive user interfaces. Let's build something amazing together
        </p>
        <motion.button
          className="group relative px-4 sm:px-6 py-2 text-yellow-400 border border-yellow-400 uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all"
          variants={buttonVariant}
          whileHover="hover"
          onClick={() => handleScrollTo("about")} // Scroll to 'about' section
        >
          see more
          <span className="absolute top-1/2 left-32 sm:left-44 w-[30px] sm:w-[50px] h-[2px] bg-white transform -translate-y-1/2 -translate-x-full transition-all duration-300 group-hover:translate-x-1"></span>
        </motion.button>
      </motion.div>

      <motion.div
        className="image w-full lg:w-[50%] flex justify-center items-center relative mt-6 lg:mt-0"
        variants={imageVariant}
        whileInView="visible"
        initial="hidden"
      >
        <motion.div
          className="absolute rotate-45 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[450px] lg:w-[450px] border-[6px] sm:border-[10px] lg:border-[30px] border-[#111111] z-30"
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        <div className="img-con relative">
          <img
            src="https://hellloexpert.com/tf/html/amee/img/about/1.jpg"
            alt="Profile"
            className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
