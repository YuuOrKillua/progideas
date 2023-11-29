import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Monim from  './Monim';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Monim />
  </React.StrictMode>
);