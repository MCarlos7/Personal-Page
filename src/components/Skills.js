import React, { useRef, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
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
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();
      container.scrollBy({ left: event.deltaY * 0.5, behavior: 'smooth' });
    };

    let isDragging = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (event) => {
      isDragging = true;
      startX = event.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseUp);
    container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Container id="skills" className="mb-4">
      <h2 className="text-center mb-3">Tech Stack</h2>
      <Card className="p-3">
        <div className="skills-carousel" ref={skillsContainerRef}>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Skills;