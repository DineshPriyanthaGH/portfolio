import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4152d6fa-b12c-497c-b804-a3032a821f14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Connect with Me</h2>
      <p className="text-center text-gray-600 mb-8">Get in Touch</p>

      {/* Main Card Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 items-start">

          {/* Left Side: Talk to Me (Hidden on Small Screens) */}
          <div className="hidden md:block">
  <h3 className="text-2xl font-semibold mb-6">Talk to Me</h3>
  <div className="flex flex-col gap-4 items-start">
    
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/dinesh-priyantha" target="_blank" rel="noopener noreferrer" className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center w-36 h-36 hover:bg-gray-200 transition">
      <FaLinkedin className="text-blue-600 text-5xl" />
      <h4 className="text-lg font-semibold mt-3">LinkedIn</h4>
    </a>

    {/* Email */}
    <a href="mailto:dineshpriyantha200248@gmail.com" className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center w-36 h-36 hover:bg-gray-200 transition">
      <FaEnvelope className="text-red-500 text-5xl" />
      <h4 className="text-lg font-semibold mt-3">Email</h4>
    </a>

    {/* Medium */}
    <a href="https://medium.com/@dineshpriyantha" target="_blank" rel="noopener noreferrer" className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center w-36 h-36 hover:bg-gray-200 transition">
      <FaMedium className="text-green-600 text-5xl" />
      <h4 className="text-lg font-semibold mt-3">Medium</h4>
    </a>

  </div>
</div>

          {/* Right Side: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Contact Me</h3>
            <form onSubmit={onSubmit} className="bg-gray-50 shadow-md rounded-lg p-3">
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-black transition"
              >
                Send Message
              </button>

              {/* Submission Message */}
              {result && (
                <p className="text-center text-green-600 mt-4">{result}</p>
              )}
            </form>
          </div>

        </div>

        {/* Contact Icons (Only visible on small screens) */}
        <div className="mt-10 flex justify-center gap-4 md:hidden">
  
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/dinesh-priyantha" target="_blank" rel="noopener noreferrer" className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-24 h-24 hover:bg-gray-200 transition">
    <FaLinkedin className="text-blue-600 text-3xl" />
    <h4 className="text-sm font-semibold mt-2">LinkedIn</h4>
  </a>

  {/* Email */}
  <a href="mailto:dineshpriyantha200248@gmail.com" className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-24 h-24 hover:bg-gray-200 transition">
    <FaEnvelope className="text-red-500 text-3xl" />
    <h4 className="text-sm font-semibold mt-2">Email</h4>
  </a>

  {/* Medium */}
  <a href="https://medium.com/@dineshpriyantha" target="_blank" rel="noopener noreferrer" className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-24 h-24 hover:bg-gray-200 transition">
    <FaMedium className="text-green-600 text-3xl" />
    <h4 className="text-sm font-semibold mt-2">Medium</h4>
  </a>

</div>


      </div>
    </div>
  );
};

export default Contact;
