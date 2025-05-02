// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-20 min-h-[calc(100vh-76px)]">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to
          <span className="block text-orange-400 mt-2">Professional Online Education</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Empowering students through comprehensive online education in Mathematics,
          Sciences, and Programming
        </p>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full 
          font-semibold transition-colors duration-300"
        >
          Start Learning Today
        </button>
      </div>
    </section>
  );
};

export default Hero;