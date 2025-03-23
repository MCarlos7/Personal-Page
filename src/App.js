
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Carlos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
