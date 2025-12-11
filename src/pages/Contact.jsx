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
    <section id="contact" className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Details */}
          <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col h-full">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Feel free to reach out via email, phone, or connect with me on social media. 
              I'm always open to discussing new projects and opportunities.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email</p>
                  <a
                    href="mailto:matthewgondwe1@gmail.com"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-lg"
                  >
                    matthewgondwe1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Phone</p>
                  <a
                    href="tel:+265992453357"
                    className="text-green-600 font-medium hover:text-green-700 transition-colors text-lg"
                  >
                    +265 992 453 357
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Location</p>
                  <p className="text-purple-600 font-medium text-lg">Malawi, Africa</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-auto">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/matthews-gondwe-429b35238/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors group"
                >
                  <FaLinkedin className="text-xl text-blue-600 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/Vitumbikoh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group"
                >
                  <FaGithub className="text-xl text-gray-700 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://twitter.com/MatthewsGondwe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors group"
                >
                  <FaTwitter className="text-xl text-sky-500 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://facebook.com/matthews.gondwe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors group"
                >
                  <FaFacebook className="text-xl text-blue-600 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-lg shadow-sm flex flex-col h-full"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
            </p>

            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors"
                placeholder="Enter the subject"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-8 flex-grow">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-colors resize-none"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
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
