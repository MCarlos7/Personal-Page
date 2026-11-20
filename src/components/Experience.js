import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/Experience.css';

const experience = [
  {
    period: '2026',
    title: 'IT Support · Servicio social',
    organization: 'UDG',
    description:
      'Soporte de hardware y software para estudiantes y docentes. Mantenimiento preventivo y actualización de sistemas operativos en laboratorios universitarios.',
    tags: ['Soporte técnico', 'Mantenimiento', 'Hardware & software'],
  },
  {
    period: '2022 — ACTUAL',
    title: 'On Board Courier',
    organization: 'Easyflyers · Freelance',
    description:
      'Gestión de entregas internacionales seguras y críticas en tiempo. Resolución de problemas, adaptación y comunicación bajo plazos estrictos.',
    tags: ['Logística', 'Adaptabilidad', 'Gestión del tiempo'],
  },
];

function Experience() {
  return (
    <section className="content-section section-wrap section-ink" id="experience">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 02 — EXPERIENCIA</p>
        <span className="section-index">02</span>
      </div>

      <div className="experience-intro">
        <h2 className="display-heading">
          Trabajo con propósito.
          <span>Aprendizaje continuo.</span>
        </h2>
        <p>Experiencias que fortalecieron tanto mi criterio técnico como mi forma de colaborar.</p>
      </div>

      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.title}>
            <span className="experience-number">0{index + 1}</span>
            <span className="experience-period">{item.period}</span>
            <div className="experience-detail">
              <div className="experience-title-row">
                <h3>{item.title}</h3>
                <span>{item.organization}</span>
              </div>
              <p>{item.description}</p>
              <ul className="tag-list" aria-label="Habilidades relacionadas">
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <FiArrowUpRight className="experience-arrow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
