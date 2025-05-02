// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a472a] to-[#0a192f]">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;