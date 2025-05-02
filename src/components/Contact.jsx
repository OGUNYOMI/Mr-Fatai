// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Get in <span className="text-orange-400">Touch</span>
        </h2>
        <div className="bg-[#0a192f]/50 p-6 md:p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                text-white focus:outline-none focus:border-orange-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                text-white focus:outline-none focus:border-orange-400"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-2">Subject</label>
              <select
                id="subject"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                text-white focus:outline-none focus:border-orange-400"
              >
                <option value="">Select a subject</option>
                <option value="further-mathematics">Further Mathematics</option>
                <option value="mathematics">Mathematics</option>
                <option value="biology">Biology</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="english">English Language</option>
                <option value="programming">Computer Programming</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg 
                text-white focus:outline-none focus:border-orange-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 
              rounded-lg font-semibold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Contact Information</h3>
            <div className="space-y-3 text-white/80">
              <p>📧 Email: contact@mrfatai.com</p>
              <p>📱 Phone: +234 XXX XXX XXXX</p>
              <p>🌐 Available for online sessions worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;