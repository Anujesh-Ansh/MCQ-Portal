import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface HeaderProps {
  onAddQuestion: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddQuestion }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quiz App
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="add question"
          onClick={onAddQuestion}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
