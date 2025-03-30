import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Obtiene el tema guardado o usa el preferido del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });

  const themes = [
    { value: 'light', label: '🌞 Claro' },
    { value: 'dark', label: '🌙 Oscuro' },
    { value: 'corporate', label: '🏢 Corporativo' },
    // Agrega más temas aquí
  ];

  useEffect(() => {
    // Aplica el tema al documento
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // También actualiza el tema de Bootstrap
    document.body.setAttribute('data-bs-theme', currentTheme);
  }, [currentTheme]);

  return (
    <Form.Select 
      aria-label="Selector de tema"
      value={currentTheme}
      onChange={(e) => setCurrentTheme(e.target.value)}
      className="w-auto"
    >
      {themes.map((theme) => (
        <option key={theme.value} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default ThemeSwitcher;