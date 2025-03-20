// src/components/ContactMe/ContactMe.jsx
import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="page-section-contact">
      <h2>Contact Me</h2>
      <div className="contact">
        <address>
          <a href="tel:555.555.5555">555.555.5555</a>
          <a href="mailto:lernantino@website.com">lernantino@website.com</a>
          <a href="https://github.com/lernantino" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/lernantino" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://spotify.com/lernantino" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
        </address>
      </div>
    </section>
  );
};

export default ContactMe;