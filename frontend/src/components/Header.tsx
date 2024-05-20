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
    navigate('/'); // Redirect to the root route when title is clicked
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleTitleClick}>
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
