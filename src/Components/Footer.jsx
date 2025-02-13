import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-[#111111] border-t-2 border-gray-50 text-white py-8 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Title */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 md:mb-0"
        >
          <h2 className="text-2xl font-semibold text-white">PortFolio</h2>
        </motion.div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-all transform hover:scale-110"
            >
              <FaLinkedin className="text-3xl" />
            </motion.a>
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-all transform hover:scale-110"
            >
              <FaGithub className="text-3xl" />
            </motion.a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              href="mailto:sri715565@gmail.com"
              className="text-white hover:text-yellow-400 transition-all transform hover:scale-110"
            >
              <FaEnvelope className="text-3xl" />
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="mt-6 md:mt-0 text-center text-sm text-gray-400"
        >
          <p>© 2025 PortFolio. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
