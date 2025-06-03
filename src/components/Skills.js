import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { DiPython, DiJavascript, DiReact, DiNodejs, DiGit, DiDatabase } from 'react-icons/di';
import { SiC, SiCplusplus, SiUnity } from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  { name: 'Python', icon: <DiPython size={50} /> },
  { name: 'C', icon: <SiC size={50} /> },
  { name: 'C++', icon: <SiCplusplus size={50} /> },
  { name: 'Unity', icon: <SiUnity size={50} /> },
  { name: 'NodeJS', icon: <DiNodejs size={50} /> },
  { name: 'JavaScript', icon: <DiJavascript size={50} /> },
  { name: 'React', icon: <DiReact size={50} /> },
  { name: 'Database', icon: <DiDatabase size={50} /> },
  { name: 'Git', icon: <DiGit size={50} /> },
];

function Skills() {
  return (
    <Container id="skills" className="mb-5">
      <h2 className="text-center mb-4">Tech Stack</h2>
      <Card className="p-4 shadow-lg rounded-lg skills-card">
        <Row className="justify-content-center g-4">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex flex-column align-items-center skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name mt-2">{skill.name}</div>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
}

export default Skills;
