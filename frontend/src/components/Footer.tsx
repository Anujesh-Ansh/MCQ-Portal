// Footer.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Container component="footer" style={{ marginTop: 'auto', padding: '1rem 0', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary" >
      <a href="https://github.com/Anujesh-Ansh" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'black', fontStyle:'italic',fontWeight:'bold' , cursor: 'pointer'}}>
        Made with 🧡 by Anujesh
      </a>
    </Typography>
  </Container>
);

export default Footer;
