import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core'
import 'jquery/dist/jquery.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={Store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
);

