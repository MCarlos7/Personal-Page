import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';

const skills = [
  { name: 'Python'},
  { name: 'C'},
  { name: 'C++'},
  { name: 'Unity'},
  { name: 'NodeJS'},
  { name: 'JavaScript'},
  { name: 'React'},
  { name: 'Database'},
];

function Skills() {
  return (
    <Container id="skills" className="mb-4">
      <h2 className="text-center mb-3">Stack Tecnológico</h2>
      <Card className="p-3">
        <ListGroup variant="flush">
          {skills.map((skill, index) => (
            <ListGroup.Item key={index}>{skill.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default Skills;