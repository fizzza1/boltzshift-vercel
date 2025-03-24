import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "/src/index.css";  // ✅ Ensure this file is properly linked
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
