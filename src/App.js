
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <Home />
      <div style={{ marginBottom: '100px' }}></div>
      <Container>
        <header className="text-center mb-4">
          <h1 className="display-4">Carlos Alberto Mariscal Romo</h1>
          <p className="lead">
            I'm studying at the Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI). I am passionate about video game development, programming, and technology in general.
          </p>
        </header>
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App
