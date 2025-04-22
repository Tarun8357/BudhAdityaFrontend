// src/components/hero/HeroSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import './css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <Container className="text-center text-white">
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col md={10}>
              <div data-aos="fade-down" data-aos-duration="1000">
                <h1 className="display-3 fw-bold">Welcome to BudhAditya</h1>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <p className="lead mb-4">
                  We provide next-gen solutions using modern technologies.
                </p>
                <Button variant="contained" color="primary" size="large">
                  Get Started
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
