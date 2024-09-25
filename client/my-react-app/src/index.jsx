import React from 'react';
import ReactDOM from 'react-dom/client'; // or from 'react-dom' in older versions
import './index.css'; // Optional: for global styles
import App from './App'; // Import your main App component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);