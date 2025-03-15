import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

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
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Connect with Me</h2>
      <p className="text-center text-gray-600 mb-12">Get in Touch</p>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Left Side: Talk to Me Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Talk to Me</h3>

          {/* Contact Cards (Stacked Vertically) */}
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
              <FaLinkedin className="text-blue-600 text-5xl" />
              <h4 className="text-lg font-semibold mt-3">LinkedIn</h4>

            </div>

            <div  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
              <FaEnvelope href="www.linkedin.com/in/dinesh-priyantha

" className="text-red-500 text-5xl" />
              <h4 className="text-lg font-semibold mt-3">Email</h4>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-40 h-40">
              <FaMedium className="text-green-600 text-5xl" />
              <h4 className="text-lg font-semibold mt-3">Medium</h4>
              <a
                href="https://medium.com/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
               
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
          <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg p-6">
            
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
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
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
    </div>
  );
};

export default Contact;
