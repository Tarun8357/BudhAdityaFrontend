// src/components/home/TechnologiesSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const techStack = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'];

const TechnologiesSection = () => {
  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center mb-4">Technologies We Use</h2>
      <Row>
        {techStack.map((tech, idx) => (
          <Col md={2} sm={4} xs={6} key={idx} className="text-center mb-3">
            <div className="border p-3 rounded shadow-sm bg-white">{tech}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechnologiesSection;