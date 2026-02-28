import React from 'react';
import { contact, summary } from '../data/contact';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Technical Project Manager
            <span className="hero-subtitle">Enterprise Solutions | Ex-Apple & Accenture</span>
          </h1>
          <p className="hero-description">{summary}</p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </button>
          </div>
          <div className="hero-links">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href={contact.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
              Medium
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
