import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'];
      const sectionIds = ['a-propos', 'competences', 'experience', 'projets', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName) => {
    const sectionMap = {
      'À propos': 'a-propos',
      'Compétences': 'competences', 
      'Expérience': 'experience',
      'Projets': 'projets',
      'Contact': 'contact'
    };
    
    const element = document.getElementById(sectionMap[sectionName]);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-2xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10 -translate-y-1' 
        : 'bg-gray-900/60 backdrop-blur-md border-b border-gray-800/20 translate-y-0'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-4'
      }`}>
        <div className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text transform transition-all duration-500 ${
          scrolled ? 'scale-90' : 'scale-100 hover:scale-105'
        }`}>
          NVP
        </div>
        
        <ul className="hidden md:flex gap-8">
          {['À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-500 rounded-lg transform ${
                  activeSection === item
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 scale-105 shadow-lg shadow-cyan-400/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30 border border-transparent hover:scale-105'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-500 ${
                  activeSection === item 
                    ? 'bg-cyan-400 opacity-100 scale-150' 
                    : 'bg-transparent opacity-0'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-400 hover:text-white transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
