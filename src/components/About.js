import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/About.css';

function About() {
  return (
    <section className="content-section section-wrap" id="about">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 01 — PERFIL</p>
        <span className="section-index">01</span>
      </div>

      <div className="about-grid">
        <h2 className="display-heading">
          Curiosidad técnica.
          <span>Visión práctica.</span>
        </h2>
        <div className="about-copy">
          <p className="about-lead">
            Soy estudiante de Ingeniería en Computación en CUCEI, enfocado en la
            ingeniería de software y la resolución analítica de problemas.
          </p>
          <p>
            Me interesa construir soluciones adaptables en distintos niveles: desde
            aplicaciones web y móviles hasta sistemas concurrentes e inteligencia
            artificial. Busco una oportunidad de prácticas o nivel junior donde aportar
            fundamentos sólidos, criterio y muchas ganas de aprender.
          </p>
          <a className="text-link" href="#experience">
            Mi experiencia <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="about-facts">
        <div><span>01</span><strong>Ingeniería</strong><small>CUCEI · UdeG</small></div>
        <div><span>02</span><strong>Enfoque</strong><small>Software & Computer Science</small></div>
        <div><span>03</span><strong>Ubicación</strong><small>Guadalajara, México</small></div>
      </div>
    </section>
  );
}

export default About;
