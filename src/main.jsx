import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App.jsx'; // Import the root component

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);