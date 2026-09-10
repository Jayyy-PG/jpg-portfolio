import React from 'react';
import { createRoot } from 'react-dom/client';
import './utils/imageSlots.js';
import { initLang } from './utils/lang.js';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/home.css';
import './styles/developer.css';
import './styles/gallery.css';
import './styles/legal.css';
import App from './App.jsx';

// Before first paint so the correct language is visible immediately.
initLang();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
