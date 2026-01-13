import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

function About() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="about-section py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="about"
    >
      <div className="container">
        <h2 className="about-title text-center mb-4 display-6 fw-bold">Sobre Mí</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="about-description lead text-muted text-center">
              Soy estudiante de Ingeniería en Computación en <strong>CUCEI</strong>, enfocado en el desarrollo Full Stack y la Inteligencia Artificial.
            </p>
            <p className="about-text text-center">
              Mi experiencia abarca desde la creación de interfaces modernas con <strong>React y Next.js</strong> hasta la implementación de algoritmos de ML y compiladores en <strong>Python</strong>. 
              Disfruto construyendo soluciones integrales, como plataformas de gestión de eventos y sistemas IoT para eficiencia energética.
              <br /><br />
              Siempre busco optimizar código y aprender nuevas arquitecturas como la integración con <strong>Supabase</strong> y <strong>Prisma</strong>.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;