import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onAddQuestion: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddQuestion }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    console.log("New Page");
    window.location.href = '/'; // Redirect to the root route and reload the page
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: '#202124', width: '100vw' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={handleTitleClick}
          style={{ 
            color: '#f27b24', 
            cursor: 'pointer',
            fontFamily: 'Poetsen One'  // Apply PostenOne font
          }}
        >
          MCQ Portal
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="add question"
          onClick={onAddQuestion}
        >
          <AddIcon style={{ color: '#f27b24' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
