import React from 'react';
import { education } from '../data/education';
import './Education.css';

const Education = () => {
  return (
    <section className="section education" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <h4 className="education-institution">{edu.institution}</h4>
            {edu.period && <span className="education-period">{edu.period}</span>}
            {edu.focus && <p className="education-focus">{edu.focus}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
