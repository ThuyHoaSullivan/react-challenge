// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="social-links">
          {/* GitHub Link */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Third Platform Link (e.g., Stack Overflow or Twitter) */}
          <a
            href="https://stackoverflow.com/users/youruserid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;