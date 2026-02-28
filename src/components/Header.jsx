import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-brand">
          <h1>Charles Tsoi</h1>
          <span className="header-subtitle">Technical PM | Enterprise Solutions</span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
