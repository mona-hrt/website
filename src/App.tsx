import { useMemo } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  useMediaQuery,
  Box,
} from '@mui/material';
import { createMonaTheme } from './theme';

import './index.css';
import { AppBar } from './components/AppBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = useMemo(() => createMonaTheme(prefersDarkMode), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar />
        <Hero />
        <Features />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;