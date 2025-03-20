// src/components/Portfolio/Project.jsx
import React from 'react';
import './Project.css';

const Project = ({ title, image, deployedLink, githubLink, className }) => {
  return (
    <div className={`project ${className}`}>
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;