import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Education from './pages/education';
import WorkHistory from './pages/work-history';
import TechStack from './pages/tech-stack';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);