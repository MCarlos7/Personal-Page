import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';


const Hero = () => {
  return (
    <section className="hero-section position-relative vh-100 overflow-hidden">
      {/* Contenido */}
      <div className="hero-bg" />

      <Container className="h-100 d-flex align-items-center">
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="display-1 fw-bold mb-3 text-white">
             Hello, I'm Carlos
            </h1>
            <p className="lead mb-4 text-white">
                Computer Engineer
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;