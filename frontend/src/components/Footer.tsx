// Footer.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => (
  <Container component="footer" style={{ height:'10vh', marginTop: '9vh', padding: '1rem', textAlign: 'center',backgroundColor: '#282c34' }}>
    <Typography variant="body2" color="textSecondary" >
      <a href="https://github.com/Anujesh-Ansh" target="_blank" rel="noreferrer" style={{textDecoration: 'none', color: 'white', fontStyle:'italic',fontWeight:'bold' , cursor: 'pointer'}}>
        Made with 🧡 by Anujesh
      </a>
    </Typography>
  </Container>
);

export default Footer;
