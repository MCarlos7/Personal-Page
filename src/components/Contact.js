import React from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

const contactLinks = [
  {
    label: 'Correo',
    value: 'cmariscal102@gmail.com',
    href: 'mailto:cmariscal102@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Teléfono',
    value: '+52 33 1276 7594',
    href: 'tel:+523312765794',
    icon: FiPhone,
  },
  {
    label: 'LinkedIn',
    value: '/in/mcarlos7',
    href: 'https://www.linkedin.com/in/mcarlos7',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: '/MCarlos7',
    href: 'https://github.com/MCarlos7',
    icon: FiGithub,
  },
];

function Contact() {
  return (
    <section className="content-section section-wrap contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow"><span className="eyebrow-mark" /> 06 — CONTACTO</p>
        <span className="section-index">06</span>
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <h2 className="display-heading">¿Construimos<span>algo bueno?</span></h2>
          <p>
            Busco una oportunidad de prácticas, trainee o desarrollador junior. Si tienes
            un proyecto interesante o quieres conversar, escríbeme.
          </p>
          <a className="button button-dark" href="mailto:cmariscal102@gmail.com">
            Envíame un correo <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="contact-list">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              className="contact-item"
              href={href}
              key={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-icon"><Icon aria-hidden="true" /></span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
              <FiArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="contact-bottom">
        <span>GUADALAJARA, MÉXICO</span>
        <span>DISPONIBLE PARA CONVERSAR</span>
      </div>
    </section>
  );
}

export default Contact;
