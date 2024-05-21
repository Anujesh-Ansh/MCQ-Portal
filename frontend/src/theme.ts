// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#282c34',
    },
    text: {
      primary: '#f27b24',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '15px', // border radius
          backgroundColor: '#888888', // grey background
          '& .MuiInputBase-root': {
            color: '#fff', // text color
          },
          '& .MuiInputLabel-root': {
            color: '#fff',// label color
          },
          '& .MuiOutlinedInput-notchedOutline': {
            
            borderRadius: '15px', // border radius
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            
          },
        },
      },
    },
  },
});

export default theme;
