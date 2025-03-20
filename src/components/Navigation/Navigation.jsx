// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/about">About Me</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link> {/* Add Resume link */}
    </nav>
  );
};

export default Navigation;