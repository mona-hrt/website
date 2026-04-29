import { useContext } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Avatar, IconButton, Button, useTheme, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../theme';

export const AppBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <MuiAppBar position="sticky" elevation={0}>
      <Toolbar>
        <Button 
          color="inherit" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Avatar 
            src= {theme.palette.mode === 'dark' ? "/dark/logo.png" : "/light/logo.png"}
            alt="Mona Logo"
            sx={{ 
              width: 36, 
              height: 36,
              mr: 1.5
            }}
          />
          <Typography variant="h6" component="div">
            Mona
          </Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button 
          color="inherit" 
          href="https://github.com/mona-hrt/mona" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button 
          color="inherit" 
          href="https://discord.gg/TEQzHyhcBN" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Discord
        </Button>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" aria-label="Toggle color mode">
          {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};