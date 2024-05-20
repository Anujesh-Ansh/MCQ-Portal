import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Company Logo - Quiz App
      </Typography>
      <Button color="inherit">Add Question</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
