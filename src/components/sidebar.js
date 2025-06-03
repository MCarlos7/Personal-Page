import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaEnvelope, FaMoon, FaSun, FaFilePdf } from 'react-icons/fa';

function Sidebar({ setActiveIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (index) => {
    setActiveIndex(index);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>☰</button>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li onClick={() => handleNavigate(0)}><FaHome /> <span>Home</span></li>
          <li onClick={() => handleNavigate(1)}><FaUserAlt /> <span>About Me</span></li>
          <li onClick={() => handleNavigate(2)}><FaTools /> <span>TechStack</span></li>
          <li onClick={() => handleNavigate(3)}><FaProjectDiagram /> <span>Proyects</span></li>
          <li onClick={() => handleNavigate(4)}><FaEnvelope /> <span>Contact</span></li>
        </ul>

        <div className="bottom-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
          <button className="cv-button" onClick={() => window.open('/CV_CarlosMariscal.pdf', '_blank')}>
            <FaFilePdf /> <span>CV</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
