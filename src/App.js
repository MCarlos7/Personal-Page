import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Pincelada from './components/Brush';
import Sidebar from "./components/sidebar";  // Sidebar con el ThemeSwitcher
import './index.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Pincelada x={cursorPos.x} y={cursorPos.y} />
      <Sidebar />  {}
      <div style={{ marginLeft: "0px" }}>
        <Home id="home" />
        <Container>
          <header className="text-center mb-4">
            <h1 className="display-4">Carlos Alberto Mariscal Romo</h1>
            <p className="lead">
              I'm studying at the Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI). I am passionate about video game development, programming, and technology in general.
            </p>
          </header>
          <Skills id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
        </Container>
      </div>
    </>
  );
}

export default App;
