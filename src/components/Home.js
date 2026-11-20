import React from 'react';
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import '../styles/Home.css';

function Home() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-topline">
        <span>PORTAFOLIO · 2026</span>
        <span><FiMapPin aria-hidden="true" /> GUADALAJARA, MÉXICO</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> INGENIERÍA EN COMPUTACIÓN</p>
          <h1>
            CARLOS
            <span className="hero-name-block">MARISCAL</span>
          </h1>
          <div className="hero-intro">
            <span className="hero-index">01 / 07</span>
            <p>
              Construyo software con <strong>buenos fundamentos</strong> y atención a los
              problemas que vale la pena resolver.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Ver proyectos <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Conocer mi perfil <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Perfil profesional">
          <div className="hero-aside-head">
            <span>CM / 26</span>
            <span className="status-dot" />
          </div>
          <div className="hero-monogram" aria-hidden="true">CM</div>
          <div className="hero-aside-caption">
            <span>ESTUDIANTE · DESARROLLADOR</span>
            <span>WEB / DATOS / SISTEMAS</span>
          </div>
          <div className="hero-availability">
            <span className="availability-mark" />
            <p>Abierto a oportunidades de prácticas y posiciones junior.</p>
          </div>
          <a className="hero-aside-link" href="#contact">
            Hablemos <FiArrowUpRight aria-hidden="true" />
          </a>
        </aside>
      </div>

      <div className="hero-bottomline">
        <span>JAVASCRIPT · TYPESCRIPT · PYTHON · REACT</span>
        <a href="#about" aria-label="Desplazarse a la siguiente sección">DESLIZA PARA EXPLORAR ↓</a>
      </div>
    </section>
  );
}

export default Home;
