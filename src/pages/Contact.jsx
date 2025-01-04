import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-lg text-gray-600">
              Feel free to reach out via email, phone, or LinkedIn.
            </p>
            <div className="space-y-4">
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
              <div>
                <p className="text-sm font-medium text-gray-700">LinkedIn:</p>
                <a
                  href="https://www.linkedin.com/in/matthews-gondwe-429b35238/"
                  className="text-teal-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Send a Message</h3>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
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
