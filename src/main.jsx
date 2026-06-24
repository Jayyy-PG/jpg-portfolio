import React from 'react';
import { createRoot } from 'react-dom/client';
import './utils/imageSlots.js';
import './styles/tokens.css';
import './styles/global.css';
import './styles/home.css';
import './styles/developer.css';
import './styles/gallery.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
