// src/components/Header/Header.jsx

import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Zero Sullivan</h1>
      <Navigation />
    </header>
  );
};

export default Header;