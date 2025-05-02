// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          About <span className="text-orange-400">Me</span>
        </h2>
        <div className="bg-[#0a192f]/50 p-6 md:p-8 rounded-lg shadow-xl">
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            As a dedicated online educator, I specialize in making complex subjects accessible
            and engaging for students of all levels. With years of experience in teaching
            Mathematics, Sciences, and Computer Programming, I help students build strong
            foundations and achieve academic excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Experience</h3>
              <ul className="space-y-2">
                <li>• Extensive experience in online education</li>
                <li>• Personalized learning approaches</li>
                <li>• Interactive teaching methods</li>
                <li>• Result-oriented instruction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Education</h3>
              <ul className="space-y-2">
                <li>• Advanced degree in Mathematics</li>
                <li>• Certified online instructor</li>
                <li>• Continuous professional development</li>
                <li>• Modern teaching methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;