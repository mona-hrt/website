import { useContext } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Avatar, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../theme';

export const AppBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <MuiAppBar position="sticky" elevation={0}>
      <Toolbar>
        <Avatar 
          src="/logo.png"
          alt="Mona Logo"
          sx={{ 
            width: 36, 
            height: 36,
            mr: 1.5
          }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mona
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit" aria-label="Toggle color mode">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};