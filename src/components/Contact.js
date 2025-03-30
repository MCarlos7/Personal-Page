import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="mb-4">
      <h2 className="text-center mb-3">Contact</h2>
      <ListGroup>
        <ListGroup.Item>
          <strong>Email:</strong> cmariscal102@gmail.com
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mcarlos7" target="_blank" rel="noopener noreferrer">linkedin.com/in/mcarlos7</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>GitHub:</strong> <a href="https://github.com/MCarlos7" target="_blank" rel="noopener noreferrer">github.com/MCarlos7</a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Contact;