import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const components = [Home, About, Skills, Projects, Contact];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleScroll = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    setActiveIndex(prev => {
      let next = prev + direction;
      if (next < 0) next = 0;
      if (next >= components.length) next = components.length - 1;
      return next;
    });
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const ActiveComponent = components[activeIndex];

  return (
    <div className="app-container">
      <Sidebar setActiveIndex={setActiveIndex} theme={theme} setTheme={setTheme} />
      <div className="main-section">
        <div key={activeIndex} className="fade-section">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
