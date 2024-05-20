import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Container component="footer" style={{ marginTop: 'auto', padding: '1rem 0', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      Made by Anujesh
    </Typography>
  </Container>
);

export default Footer;
