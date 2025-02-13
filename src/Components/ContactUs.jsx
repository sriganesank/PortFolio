import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const AccessKey = import.meta.env.VITE_ACCESS_KEY;

 


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", AccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Mail Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className="w-full  py-20 px-4 sm:px-6  bg-black lg:px-12">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-50 mb-10 relative text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
        <motion.span
          className="absolute bottom-0 left-1/2 w-20 h-1 bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 1 }}
        ></motion.span>
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Info */}
        <motion.div
          className="w-full lg:w-1/4  bg-black p-6 shadow-lg rounded-lg border-2 border-gray-200"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-50 mb-6 text-center">
            Contact Info.
          </h3>

          {/* Address */}
          <motion.div
            className="flex flex-col items-center border-2 border-gray-300 bg-[#111111] p-4 rounded-md shadow-sm mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-gray-50 p-3 mr-4">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <p className="text-gray-50 text-center">
              no:2a Sakthi Nagar 18th street Nerkundram Chennai-600107
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex flex-col items-center border-2  border-gray-300 bg-[#111111] p-4 rounded-md shadow-sm mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-gray-50 p-3 mr-4">
              <FaPhoneAlt className="text-xl" />
            </div>
            <p className="text-gray-50 text-center">(91) 6379951491</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex flex-col items-center border-2 border-gray-300 bg-[#111111] p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="text-gray-50 p-3 mr-4">
              <FaEnvelope className="text-xl" />
            </div>
            <p className="text-gray-50 text-center">sri715565@gmail.com</p>
          </motion.div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          className="w-full lg:w-2/3 bg-black border-2  border-gray-300 p-6 shadow-md rounded-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-50 mb-4">
            Send Your Message
          </h3>
          <p className="text-gray-50 text-sm sm:text-base mb-6">
          Let’s build something amazing together – connect with me today!
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
          >
            <input type="hidden" name="access_key" value={AccessKey}></input>
            {/* Normal Input Fields */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Name"
                name="Name"
             
                className="w-full p-2 border text-white border-gray-50 focus:outline-none focus:ring-1 bg-black focus:border-yellow-400 focus:ring-yellow-400 rounded-md"
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <input
                type="tel"
                placeholder="Phone Number"
                name="phonenum"
              
                required
                className="w-full p-2 border text-white border-gray-50 focus:outline-none focus:ring-1 bg-black focus:border-yellow-400 focus:ring-yellow-400 rounded-md"
              />
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <input
                type="email"
                placeholder="Email"
                name="email"
           
                required
                className="w-full p-2 border text-white border-gray-50 focus:outline-none focus:ring-1 bg-black focus:ring-yellow-400 focus:border-yellow-400 rounded-md"
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <textarea
                placeholder="Type Comment"
                name="description"
              
                className="w-full p-2 border text-white border-gray-50 focus:outline-none focus:ring-1 bg-black focus:border-yellow-400 focus:ring-yellow-400 rounded-md"
                rows={4}
              />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className="group w-full lg:w-full px-4 py-2 text-yellow-400 border border-yellow-400 uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                type="submit"
              >
                Submit
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
