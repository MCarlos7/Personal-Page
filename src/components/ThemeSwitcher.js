import React, { useEffect, useState } from 'react'; 
import { Form } from 'react-bootstrap';
import "../styles/themes.css";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Obtiene el tema guardado o usa el preferido del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  const themes = [
    { value: 'light', icon: '☀️' },  // Tema claro
    { value: 'dark', icon: '🌙' },    // Tema oscuro
    { value: 'corporate', icon: '🏢' }, // Tema corporativo
    { value: 'solarized-light', icon: '🌞' },  // Tema Solarized Light
    { value: 'solarized-dark', icon: '🌙' },  // Tema Solarized Dark
    { value: 'neon', icon: '💡' },  // Tema Neon
    { value: 'ocean-blue', icon: '🌊' }, // Tema Ocean Blue
    { value: 'forest-green', icon: '🌲' }, // Tema Forest Green
    { value: 'pastel', icon: '🌸' }  // Tema Pastel
  ];

  useEffect(() => {
    // Aplica el tema al documento
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // También actualiza el tema de Bootstrap
    document.body.setAttribute('data-bs-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher">
      <Form.Select 
        aria-label="Selector de tema"
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        className="theme-select"
      >
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.icon}  {/* Usamos el ícono en lugar de texto */}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default ThemeSwitcher;
