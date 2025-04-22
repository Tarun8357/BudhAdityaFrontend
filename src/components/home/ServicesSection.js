// src/components/home/ServicesSection.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';

const services = [
  { title: 'Web Development', desc: 'Modern and scalable web solutions.' },
  { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications.' },
  { title: 'Cloud Services', desc: 'Cloud migration, DevOps, and architecture.' },
];

const ServicesSection = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="h-100">
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;