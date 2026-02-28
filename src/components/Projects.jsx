import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">Key Projects & Achievements</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta">
                <span className="project-company">{project.company}</span>
                <span className="project-period">{project.period}</span>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-achievements">
              <h4 className="achievements-title">Key Achievements:</h4>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
