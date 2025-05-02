// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const subjects = [
    {
      title: 'Further Mathematics',
      description: 'Advanced mathematical concepts and problem-solving techniques',
      icon: '📐'
    },
    {
      title: 'Mathematics',
      description: 'Core mathematical principles and applications',
      icon: '➗'
    },
    {
      title: 'Biology',
      description: 'Life sciences and biological systems',
      icon: '🧬'
    },
    {
      title: 'Physics',
      description: 'Physical phenomena and scientific principles',
      icon: '⚡'
    },
    {
      title: 'Chemistry',
      description: 'Chemical processes and reactions',
      icon: '🧪'
    },
    {
      title: 'English Language',
      description: 'Language proficiency and communication skills',
      icon: '📚'
    },
    {
      title: 'Computer Programming',
      description: 'Coding fundamentals and software development',
      icon: '💻'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          My <span className="text-orange-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-[#0a192f]/50 p-6 rounded-lg shadow-xl hover:transform hover:-translate-y-1 
              transition-all duration-300 border border-white/10 hover:border-orange-400/50"
            >
              <div className="text-4xl mb-4">{subject.icon}</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">{subject.title}</h3>
              <p className="text-white/80">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;