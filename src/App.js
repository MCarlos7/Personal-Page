
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Skills from './AAA/Skills';
import Projects from './AAA/Projects';
import Contact from './AAA/Contact';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Carlos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <header className="text-center mb-4">
          <h1 className="display-4">Carlos Alberto Mariscal Romo</h1>
          <p className="lead">
            I am a Computer Engineer studying at the Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI). I am passionate about video game development, programming, and technology in general.
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
