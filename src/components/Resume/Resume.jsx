// src/components/Resume/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  // Replace with the actual path to your resume file
  const resumeDownloadLink = '/path/to/your/resume.pdf';

  return (
    <section className="page-section-resume">
      <h2>Resume</h2>

      {/* Downloadable Resume Link */}
      <div className="resume-download">
        <a href={resumeDownloadLink} download="YourName_Resume.pdf">
          Download My Resume
        </a>
      </div>

      {/* Front-end Proficiencies */}
      <div className="proficiencies">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      {/* Back-end Proficiencies */}
      <div className="proficiencies">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>REST APIs</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Authentication</li>
          <li>Testing (Jest, Mocha)</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;