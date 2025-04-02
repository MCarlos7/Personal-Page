import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  // Función para manejar el desplazamiento suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`sidebar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Nav className="flex-column">
        <Nav.Link
          onClick={() => scrollToSection("home")}
          title="Inicio"
        >
          <AiOutlineHome size={28} />
          {expanded && <span className="text">Inicio</span>}
        </Nav.Link>
        <Nav.Link
          onClick={() => scrollToSection("about")}
          title="Sobre mí"
        >
          <AiOutlineUser size={28} />
          {expanded && <span className="text">Sobre mí</span>}
        </Nav.Link>
        <Nav.Link
          onClick={() => scrollToSection("projects")}
          title="Proyectos"
        >
          <AiOutlineProject size={28} />
          {expanded && <span className="text">Proyectos</span>}
        </Nav.Link>
        <Nav.Link
          onClick={() => scrollToSection("contact")}
          title="Contacto"
        >
          <AiOutlineMail size={28} />
          {expanded && <span className="text">Contacto</span>}
        </Nav.Link>
        <Nav.Link
          onClick={() => scrollToSection("settings")}
          title="Configuración"
        >
          <AiOutlineSetting size={28} />
          {expanded && <span className="text">Configuración</span>}
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
