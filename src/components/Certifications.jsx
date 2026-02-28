import React from 'react';
import { certifications, technicalTools } from '../data/skills';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="section certifications" id="certifications">
      <h2 className="section-title">Certifications & Skills</h2>
      <div className="certifications-container">
        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <span className="cert-icon">✓</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="subsection-title">Technical Tools</h3>
          <div className="tools-grid">
            {technicalTools.map((tool, index) => (
              <span key={index} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
