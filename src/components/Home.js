import React from 'react';
import '../styles/Home.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1 className="display-1 fw-bold mb-3">
          Hello, I'm <br />Carlos
        </h1>
        <p className="lead mb-4">
          Computer Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
