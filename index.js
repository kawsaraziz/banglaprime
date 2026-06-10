import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // আপনার মেইন অ্যাপ ফাইল
import './index.css';     // আপনার সিএসএস ফাইল

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);