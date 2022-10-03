import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core'
import 'jquery/dist/jquery.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

