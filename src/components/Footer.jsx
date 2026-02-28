import React from 'react';
import { contact } from '../data/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and AI.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Information</h4>
            <div className="footer-contact">
              <a href={`mailto:${contact.email}`} className="footer-link">
                <span className="footer-icon">✉</span>
                {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="footer-link">
                <span className="footer-icon">📞</span>
                {contact.phone}
              </a>
              <div className="footer-link">
                <span className="footer-icon">📍</span>
                {contact.location}
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="footer-social">
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a 
                href={contact.medium} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Medium"
              >
                Medium
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Charles Tsoi. All rights reserved.</p>
          <p className="footer-note">Built with React & deployed on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
