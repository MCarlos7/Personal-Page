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

  // Duplicar los íconos para crear un efecto infinito
  const duplicatedSkills = [...skills, ...skills];

  // Maneja el desplazamiento con la rueda del ratón
  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();
      const scrollAmount = event.deltaY > 0 ? 200 : -200; // Ajusta la cantidad de desplazamiento
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Maneja el desplazamiento táctil
  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    let startX = 0;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      if (deltaX > 50) {
        // Deslizamiento hacia la izquierda (siguiente)
        container.scrollBy({ left: 200, behavior: 'smooth' });
      } else if (deltaX < -50) {
        // Deslizamiento hacia la derecha (anterior)
        container.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Efecto para hacer el carrusel infinito
  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft === 0) {
        // Si el usuario llega al inicio, desplázate al centro (mitad del contenido duplicado)
        container.scrollTo({ left: scrollWidth / 2, behavior: 'auto' });
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        // Si el usuario llega al final, desplázate al centro (mitad del contenido duplicado)
        container.scrollTo({ left: scrollWidth / 2 - clientWidth, behavior: 'auto' });
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container id="skills" className="mb-4">
      <h2 className="text-center mb-3">Tech Stack</h2>
      <Card className="p-3">
        <div className="skills-carousel" ref={skillsContainerRef}>
          <div className="skills-container">
            {duplicatedSkills.map((skill, index) => (
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