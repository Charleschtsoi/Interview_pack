import React from 'react';
import { competencies } from '../data/skills';
import './Competencies.css';

const Competencies = () => {
  return (
    <section className="section competencies" id="skills">
      <h2 className="section-title">Core Competencies</h2>
      <div className="competencies-grid">
        <div className="competency-card">
          <div className="competency-icon">🤖</div>
          <h3 className="competency-title">{competencies.ai.title}</h3>
          <ul className="competency-list">
            {competencies.ai.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="competency-card">
          <div className="competency-icon">📊</div>
          <h3 className="competency-title">{competencies.projectManagement.title}</h3>
          <ul className="competency-list">
            {competencies.projectManagement.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="competency-card">
          <div className="competency-icon">💻</div>
          <h3 className="competency-title">{competencies.technical.title}</h3>
          <ul className="competency-list">
            {competencies.technical.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
