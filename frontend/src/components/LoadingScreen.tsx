import React from 'react';
import { Container } from '@mui/material';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingScreen: React.FC = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <ClimbingBoxLoader
        color={'black'}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

export default LoadingScreen;
