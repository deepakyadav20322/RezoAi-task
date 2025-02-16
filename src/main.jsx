import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import store from './redux/store.js';
import { Provider } from 'react-redux';
import Header from './components/Header.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <App />
    </BrowserRouter>
    </Provider> 
  </StrictMode>,
)
