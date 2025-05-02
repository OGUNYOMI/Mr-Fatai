// src/components/Header.jsx
import React from 'react';

const Header = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1a472a]/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Mr. Fatai</h1>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`text-lg ${
                    activeSection === item.id
                      ? 'text-orange-400 font-semibold'
                      : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;