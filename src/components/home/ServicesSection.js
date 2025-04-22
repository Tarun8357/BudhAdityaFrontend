import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container, CardMedia } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import webImg from '../resources/WebDevelopment.png';
import mobileImg from '../resources/MobileApps.png';
import cloudImg from '../resources/CloudServices.png';
import webAppImg from '../resources/WebApplications.png';

const services = [
  { title: 'Web Development', desc: 'Modern and scalable web solutions.', img: webImg },
  { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications.', img: mobileImg },
  { title: 'Cloud Services', desc: 'Cloud migration, DevOps, and architecture.', img: cloudImg },
  { title: 'Web Applications', desc: 'Efficient and maintainable web applications.', img: webAppImg },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.refresh(); // Ensure animations trigger correctly
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom data-aos="fade-up">
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 150}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{
                  height: 200,
                  objectFit: 'contain',
                  padding: 2,
                  backgroundColor: '#f9f9f9',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
