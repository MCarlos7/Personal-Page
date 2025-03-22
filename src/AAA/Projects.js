import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const projects = [
  {
    name: 'ARM RA',
    description: 'Virtual Reality Environment for Industrial Training and Development',
    link: 'https://github.com/BET044/ARM-VR',
  },
];

function Projects() {
  return (
    <Container id="projects" className="mb-4">
      <h2 className="text-center mb-3">Proyectos Destacados</h2>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  Ver Proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;