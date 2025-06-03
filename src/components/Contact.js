import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import '../styles/Contact.css';

function Contact() {
  return (
    <Container id="contact" className="mb-5">
      <h2 className="text-center mb-4">Contact</h2>
      <p className="text-center mb-4" style={{ fontStyle: 'italic', color: '#555' }}>
        Feel free to reach out to me through any of the following channels!
      </p>
      <ListGroup variant="flush" className="contact-list">
        <ListGroup.Item className="d-flex align-items-center gap-3 py-3">
          <FiMail size={24} color="#007bff" />
          <strong>Email:</strong>&nbsp;
          <a href="mailto:cmariscal102@gmail.com" className="contact-link">
            cmariscal102@gmail.com
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-3 py-3">
          <FiLinkedin size={24} color="#0077b5" />
          <strong>LinkedIn:</strong>&nbsp;
          <a
            href="https://www.linkedin.com/in/mcarlos7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/mcarlos7
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center gap-3 py-3">
          <FiGithub size={24} />
          <strong>GitHub:</strong>&nbsp;
          <a
            href="https://github.com/MCarlos7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/MCarlos7
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Contact;
