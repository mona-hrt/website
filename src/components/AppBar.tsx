import { AppBar as MuiAppBar, Toolbar, Typography, Avatar } from '@mui/material';

export const AppBar = () => (
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
    </Toolbar>
  </MuiAppBar>
);