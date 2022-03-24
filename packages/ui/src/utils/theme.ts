import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2937',
    },
    secondary: {
      main: '#FBC02D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F1F2F6',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});
