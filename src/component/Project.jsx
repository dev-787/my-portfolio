import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>My Projects</h1>
        <p>A collection of my recent work and side projects</p>
      </div>
      
      <div className="projects-grid">
        <div className="project-card" onClick={() => window.open('https://dev-787.github.io/Github-Extractor/', '_blank')}>
          <h2>Github-Extractor</h2>
          <p>A web application that extracts and displays GitHub repository information</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
