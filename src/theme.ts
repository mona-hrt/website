import { createTheme } from '@mui/material';

export const createMonaTheme = (prefersDarkMode: boolean) => createTheme({
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: prefersDarkMode ? '#d0bcff' : '#6750a4',
    },
    background: {
      default: prefersDarkMode ? '#141218' : '#fef7ff',
      paper: prefersDarkMode ? '#2b2930' : '#e7e0ec',
    },
  },
  typography: {
    fontFamily: "'Rimouski', system-ui, sans-serif",
    h2: { fontWeight: 600, letterSpacing: '0.8px' },
    h5: { fontWeight: 600, letterSpacing: '0.8px' },
    h6: { fontWeight: 600, letterSpacing: '0.8px' },
    body1: { letterSpacing: '0.5px', lineHeight: 1.6 },
    body2: { letterSpacing: '0.5px' },
    
    button: { textTransform: 'none', letterSpacing: '0.5px', fontSize: '1rem', fontWeight: 500 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '10px 32px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: prefersDarkMode ? '#141218' : '#fef7ff',
          color: prefersDarkMode ? '#e6e0e9' : '#1d1b20',
          boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.1)',
          backgroundImage: 'none',
        },
      },
    },
  },
});