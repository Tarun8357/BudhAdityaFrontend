// src/components/home/AboutSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../resources/logo.png';

const AboutSection = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={aboutImage} alt="About Us" className="img-fluid rounded shadow-sm" />
        </Col>
        <Col md={6}>
          <h2>About BudhAditya</h2>
          <p>
            BudhAditya is a forward-thinking tech company dedicated to delivering innovative solutions to clients worldwide. From web apps to cloud systems, we turn ideas into reliable products.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;