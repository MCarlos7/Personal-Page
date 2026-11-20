import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/Projects.css';

const projects = [
  {
    number: '01',
    name: 'EnergIA',
    type: 'EDUCACIÓN · EFICIENCIA ENERGÉTICA',
    year: '2026',
    description:
      'Aplicación web responsive para acercar la eficiencia energética a más personas. Proyecto colaborativo entre CUCEI y consultores de IBM.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    href: 'https://github.com/rogeliovc/EnergIA',
    action: 'Ver en GitHub',
    featured: true,
  },
  {
    number: '02',
    name: 'Anfitrión',
    type: 'SAAS · GESTIÓN DE RECINTOS',
    year: '2025',
    description:
      'Plataforma full stack para administrar recintos de eventos: calendario, inventario de rentas y consumibles, finanzas y acceso por roles.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL'],
    href: 'https://anfitrion-one.vercel.app',
    action: 'Visitar proyecto',
    featured: false,
  },
  {
    number: '03',
    name: 'ARM-VR Simulator',
    type: 'UNITY · SIMULACIÓN 3D',
    year: '2025',
    description:
      'Simulador de realidad virtual para entrenar y evaluar precisión y velocidad en tareas de manipulación. Proyecto final en equipo; modelé assets 3D.',
    stack: ['Unity', 'C#', 'Blender'],
    href: 'https://github.com/MCarlos7/ARM-VR',
    action: 'Ver en GitHub',
    featured: false,
  },
];

function Projects() {
  return (
    <section className="content-section section-wrap" id="projects">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 04 — PROYECTOS SELECCIONADOS</p>
        <span className="section-index">04</span>
      </div>

      <div className="projects-intro">
        <h2 className="display-heading">Ideas que toman<span>forma y función.</span></h2>
        <p>Una selección de proyectos personales, académicos y colaborativos.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card${project.featured ? ' project-card-featured' : ''}`}
            key={project.number}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number} / 03</span>
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-card-body">
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <ul className="tag-list project-tags" aria-label={`Tecnologías de ${project.name}`}>
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.action}: ${project.name}`}
            >
              {project.action} <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
