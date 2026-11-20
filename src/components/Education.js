import React from 'react';
import { FiBookOpen, FiGlobe, FiShield } from 'react-icons/fi';
import '../styles/Education.css';

function Education() {
  return (
    <section className="content-section section-wrap section-ink" id="education">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 05 — FORMACIÓN</p>
        <span className="section-index">05</span>
      </div>

      <div className="education-layout">
        <div className="education-main">
          <h2 className="display-heading">Una base sólida.<span>Siempre creciendo.</span></h2>
          <article className="education-card">
            <div className="education-card-top">
              <span>LICENCIATURA · EN CURSO</span>
              <span>EGRESO ESPERADO · DIC 2026</span>
            </div>
            <FiBookOpen className="education-icon" aria-hidden="true" />
            <h3>Ingeniería en Computación</h3>
            <p>Centro Universitario de Ciencias Exactas e Ingenierías · Universidad de Guadalajara</p>
            <div className="education-coursework">
              <span>ÁREAS DE ESTUDIO</span>
              <p>Machine Learning · Ingeniería de software · Bases de datos · Ciberseguridad · Desarrollo de videojuegos</p>
            </div>
          </article>
        </div>

        <aside className="education-extras">
          <p className="eyebrow"><span className="eyebrow-mark" /> CERTIFICACIONES & EXTRAS</p>
          <article className="extra-item">
            <FiBookOpen aria-hidden="true" />
            <div>
              <h3>Bases de datos con Oracle</h3>
              <p>Programa de voluntariado Oracle.</p>
            </div>
          </article>
          <article className="extra-item">
            <FiShield aria-hidden="true" />
            <div>
              <h3>Ciberseguridad & ethical hacking</h3>
              <p>BIG school · Abril 2026.</p>
            </div>
          </article>
          <article className="extra-item">
            <FiGlobe aria-hidden="true" />
            <div>
              <h3>Idiomas</h3>
              <p>Español nativo · Inglés B1 (Proulex).</p>
            </div>
          </article>
          <div className="interests">
            <span>ME INTERESA</span>
            <p>Data science / videojuegos / inteligencia artificial / redes neuronales</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Education;
