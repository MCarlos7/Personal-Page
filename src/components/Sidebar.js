import React, { useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import '../styles/Sidebar.css';

const navigationItems = [
  { label: 'Perfil', href: '#about', id: 'about' },
  { label: 'Experiencia', href: '#experience', id: 'experience' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Formación', href: '#education', id: 'education' },
  { label: 'Contacto', href: '#contact', id: 'contact' },
];

function Sidebar({ activeSection, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand-mark" href="#home" aria-label="Carlos Mariscal, inicio">
          <span>CM</span>
          <small>CARLOS<br />MARISCAL</small>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          id="site-navigation"
          className={`site-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
            title={theme === 'light' ? 'Tema oscuro' : 'Tema claro'}
          >
            {theme === 'light'
              ? <FiMoon aria-hidden="true" />
              : <FiSun aria-hidden="true" />}
          </button>
          <a
            className="nav-cv"
            href={`${process.env.PUBLIC_URL}/CV_CarlosMariscal.pdf`}
            download="Carlos-Mariscal-CV.pdf"
          >
            <span>CV</span><FiDownload aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
