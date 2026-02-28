import React from 'react';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <div className="experience-technologies">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
