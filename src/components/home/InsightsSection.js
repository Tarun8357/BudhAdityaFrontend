// src/components/home/InsightsSection.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';

const insights = [
  { title: 'AI in 2025', summary: 'Future of AI and its impact on industries.' },
  { title: 'Cloud Trends', summary: 'Top cloud computing trends to watch.' },
  { title: 'Cybersecurity', summary: 'Best practices to secure your business.' },
];

const InsightsSection = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Industry Insights</h2>
      <Row>
        {insights.map((item, idx) => (
          <Col md={4} key={idx} className="mb-3">
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.summary}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InsightsSection;
