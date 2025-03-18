import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-serif font-semibold text-center text-gray-800 mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-lg text-gray-600 mt-2">
              Feel free to reach out via email, phone, or LinkedIn.
            </p>
            <div className="space-y-4 mt-10">
              <div>
                <p className="text-sm font-medium text-gray-700">Email:</p>
                <a
                  href="mailto:matthewgondwe1@gmail.com"
                  className="text-teal-600 font-medium hover:underline"
                >
                  matthewgondwe1@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Phone:</p>
                <a
                  href="tel:+265992453357"
                  className="text-teal-600 font-medium hover:underline"
                >
                  +265 992 453 357
                </a>
              </div>
              {/* <div>
                <p className="text-sm font-medium text-gray-700">LinkedIn:</p>
                <a
                  href="https://www.linkedin.com/in/matthews-gondwe-429b35238/"
                  className="text-teal-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Profile
                </a>
              </div> */}

              {/* Social Media Icons */}
              <div className="flex space-x-6 mt-6">
                <a href="https://www.linkedin.com/in/matthews-gondwe-429b35238/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-110" />
                </a>
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl text-gray-700 hover:text-gray-600 transition-transform transform hover:scale-110" />
                </a>
                {/* <a href="mailto:matthewgondwe1@gmail.com">
                  <FaEnvelope className="text-2xl text-gray-700 hover:text-red-500 transition-transform transform hover:scale-110" />
                </a> */}
                <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl text-gray-700 hover:text-blue-400 transition-transform transform hover:scale-110" />
                </a>
                <a href="https://facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Send a Message</h3>

            {/* Name Field */}
            <div className="mt-4 flex-grow">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
                placeholder="Enter the subject"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition duration-300 mt-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
