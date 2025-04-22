// src/components/home/CTASection.js
import React from 'react';
import { Button } from '@mui/material';
import { Container } from 'react-bootstrap';

const CTASection = () => {
  return (
    <Container className="text-center py-5 bg-dark text-white">
      <h3>Ready to grow your business?</h3>
      <p>Join BudhAditya today and let’s build the future together.</p>
      <Button variant="contained" color="warning" size="large">
        Register Now
      </Button>
    </Container>
  );
};

export default CTASection;