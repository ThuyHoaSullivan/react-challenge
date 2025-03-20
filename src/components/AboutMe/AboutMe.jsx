// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import './AboutMe.css';

const AboutMe = ({ showImage }) => {
  return (
    <section className="page-section-about">
      <h2>About Me</h2>
      <div className="about-content">
        {showImage && (
          <img
            src="https://static-alter1.vidnoz.com/system/asset/202408/66beeabb5fa40.jpg" // Replace with your photo/avatar URL
            alt="Developer Avatar"
            className="developer-avatar"
          />
        )}
        <div className="bio">
          <p>
            Hi, I'm [Your Name], a passionate developer with a love for building
            innovative and user-friendly applications. I specialize in [your
            skills, e.g., React, JavaScript, Node.js] and enjoy solving complex
            problems with elegant solutions.
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies, e.g., hiking,
            reading, or playing video games]. I believe in continuous learning
            and always strive to improve my skills and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


// "https://static-alter1.vidnoz.com/system/asset/202408/66beeabb5fa40.jpg" 

// // src/components/AboutMe/AboutMe.js
// import React from "react";
// import "./AboutMe.css";

// const AboutMe = () => {
//   return (
//     <section className="page-section-about">
//       <h2>About Me</h2>
//       <div>
//         <p>This is the main content of the section. It might include text, images, or other elements.</p>
//         <p>Additional content can go here, maintaining spacing between paragraphs.</p>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

