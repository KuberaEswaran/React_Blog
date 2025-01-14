import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './Store';
import { StoreProvider } from 'easy-peasy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider store={store}>
          <Router>
              <App />
          </Router>
      </StoreProvider>
  </React.StrictMode>
);



