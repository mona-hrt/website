import { 
  ThemeProvider, 
  CssBaseline, 
  Box,
} from '@mui/material';
import { ColorModeContext, useMonaTheme } from './theme';

import './index.css';
import { AppBar } from './components/AppBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import DevelopmentInfo from './components/DeveloppementInfo';

function App() {
  
  const { theme, colorMode } = useMonaTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar />
          <Hero />
          <Features />
          <DevelopmentInfo />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;