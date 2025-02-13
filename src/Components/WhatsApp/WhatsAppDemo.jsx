// import React, { useState } from "react";
// import axios from "axios";

// const SendMessage = () => {
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     if (!phone) {
//       setStatus("Please enter a phone number.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/send-message", {
//         phone: phone,
//         message: message || "Hello from WhatsApp!",
//       });

//       setStatus("Message sent successfully!");
//       console.log(response.data);
//     } catch (error) {
//       setStatus(
//         `Error sending message: ${
//           error.response?.data?.error?.message || error.message
//         }`
//       );
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//           Send WhatsApp Message
//         </h2>
//         <div className="mb-4">
//           <label
//             htmlFor="phone"
//             className="block text-gray-600 font-medium mb-2"
//           >
//             Phone Number
//           </label>
//           <input
//             id="phone"
//             type="text"
//             placeholder="Enter phone number with country code"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="message"
//             className="block text-gray-600 font-medium mb-2"
//           >
//             Message
//           </label>
//           <input
//             id="message"
//             type="text"
//             placeholder="Enter message (optional)"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Send Message
//         </button>
//         {status && (
//           <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default SendMessage;



import React, { useState } from "react";
import axios from "axios";

const SendMessage = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!phone) {
      setStatus("Please enter a phone number.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/send-message", {
        phone: phone,
        message: message || "Hello from WhatsApp!",
      });

      setStatus("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      setStatus(
        `Error sending message: ${
          error.response?.data?.error?.message || error.message
        }`
      );
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Send WhatsApp Message
        </h2>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-600 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter phone number with country code"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 font-medium mb-2"
          >
            Message
          </label>
          <input
            id="message"
            type="text"
            placeholder="Enter message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Send Message
        </button>
        {status && (
          <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
};

export default SendMessage;
