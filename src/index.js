import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import { ThemeProvider } from './Context/ThemeContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter> 
          <ScrollToTop/>
          <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
