// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#a1887f',
      main: '#795548',
      dark: '#5d4037',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d7ccc8',
      main: '#8d6e63',
      dark: '#4e342e',
      contrastText: '#fff',
    },
    background: {
      default: '#f7f1e3',
      paper: '#efebe9',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});

export default theme;
