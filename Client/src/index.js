import React from 'react';
import { createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
 
    <BrowserRouter> {/* Sử dụng BrowserRouter ở đây */}
      <App />
    </BrowserRouter>
  
);

reportWebVitals();
