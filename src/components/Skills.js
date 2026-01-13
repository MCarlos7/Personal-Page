import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
// Importamos iconos más específicos de tu stack actual
import { DiPython, DiJavascript, DiReact, DiNodejs, DiGit } from 'react-icons/di';
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiPrisma, SiCplusplus, SiArduino } from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  // Core & Web Moderno
  { name: 'Next.js', icon: <SiNextdotjs size={50} /> },
  { name: 'React', icon: <DiReact size={50} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
  { name: 'JavaScript', icon: <DiJavascript size={50} /> },
  
  // Backend & Data
  { name: 'Supabase', icon: <SiSupabase size={50} /> },
  { name: 'Prisma', icon: <SiPrisma size={50} /> },
  { name: 'NodeJS', icon: <DiNodejs size={50} /> },
  
  // Ingeniería & IA
  { name: 'Python (AI/ML)', icon: <DiPython size={50} /> },
  { name: 'C++', icon: <SiCplusplus size={50} /> },
  { name: 'IoT / Arduino', icon: <SiArduino size={50} /> },
  { name: 'Git', icon: <DiGit size={50} /> },
];

function Skills() {
  return (
    <Container id="skills" className="mb-5">
      <h2 className="text-center mb-4 display-6 fw-bold">TechStack and Tools</h2>
      <Card className="p-4 shadow border-0 rounded-4 skills-card">
        <Row className="justify-content-center g-4">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex flex-column align-items-center skill-item">
              <div className="skill-icon text-primary">{skill.icon}</div>
              <div className="skill-name mt-2 fw-semibold">{skill.name}</div>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
}

export default Skills;