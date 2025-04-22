// src/components/home/ServicesSection.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Container, CardMedia } from '@mui/material';
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
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{
                  height: 220,
                  objectFit: 'contain',
                  p: 2,
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
