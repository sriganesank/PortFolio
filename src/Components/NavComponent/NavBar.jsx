
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navitems = [
  { text: "Home", name: "hero" },
  { text: "About", name: "about" },
  { text: "Skills", name: "technologies" },
  { text: "Experience", name: "Experience" },
  { text: "Projects", name: "projects" },
  { text: "Contact", name: "contact" },
];

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScrollTo = (name) => {
    const element = document.getElementById(name);
    if (element) {
      setActiveSection(name); // Update active section immediately on click
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false); // Close sidebar after clicking
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Observe sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      let minDistance = Number.POSITIVE_INFINITY;
      let active = "hero"; // Default to the first section

      navitems.forEach((item) => {
        const section = document.getElementById(item.name);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            active = item.name;
          }
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Sidebar for Mobile */}
      <motion.div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-[#111111] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-75 ease-in-out z-50`}
        initial={{ x: "-100%" }}
        animate={{ x: sidebarOpen ? "0" : "-100%" }}
        exit={{ x: "-100%" }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={toggleSidebar} className="text-white text-2xl">✕</button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col items-center space-y-6 mt-10">
          {navitems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleScrollTo(item.name)}
              className={`font-serif text-white w-full py-1 px-4 cursor-pointer transition-all ${
                activeSection === item.name
                  ? "text-[#F8C000] font-bold border-b-2 border-l-4 sm:border-b-[3px] sm:w-full border-[#F8C000]"
                  : "hover:text-[#F8C000]"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Navigation Bar (Visible for larger screens) */}
      <motion.div
        className="w-full h-20 flex justify-between items-center py-5 bg-[#111111] px-5 fixed top-0 left-0 z-50 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="logo flex"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <h2 className="text-2xl font-semibold text-white">Portfolio</h2>
        </motion.div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex justify-center items-center gap-6 px-10">
          {navitems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleScrollTo(item.name)}
              className={`font-serif text-white px-3 py-1 cursor-pointer transition-all ${
                activeSection === item.name ? "text-[#F8C000] font-bold border-b-2 border-[#F8C000]" : "hover:text-[#F8C000]"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>

        {/* Toggle Button for Mobile Screens */}
        <button className="lg:hidden text-white text-2xl" onClick={toggleSidebar}>
          ☰
        </button>
      </motion.div>
    </div>
  );
};

export default NavBar;
