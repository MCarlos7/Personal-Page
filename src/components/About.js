import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

function About() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="about"
    >
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am a Computer Engineering student at CUCEI, passionate about game development, programming, and technology. 
        I love creating interactive experiences, solving problems, and constantly learning. <br /><br />
        Welcome to my portfolio!
      </p>
    </motion.section>
  );
}

export default About;
