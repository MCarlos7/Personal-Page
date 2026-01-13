import React from 'react';
import '../styles/Home.css';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="hero-text text-center">
        <h1 className="display-1 fw-bold mb-3">
          Hello, I'm <span className="text-primary">Carlos</span>
        </h1>
        <p className="lead mb-4 fs-3">
          Full Stack Developer & AI Enthusiast
        </p>
        <div className="d-flex gap-3 justify-content-center">
             <a href="#projects" className="btn btn-primary btn-lg rounded-pill px-4">See Projects</a>
             <a href="#contact" className="btn btn-outline-dark btn-lg rounded-pill px-4">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;