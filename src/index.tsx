import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import "antd/dist/reset.css";
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
        <Router>
          <App />
        </Router>
    </React.StrictMode>
  );
} else {
  console.error("Elemento com id 'root' não encontrado no documento");
}