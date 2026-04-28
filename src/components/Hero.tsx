import { Typography, Button, Container } from '@mui/material';

export const Hero = () => (
  <Container maxWidth="md" sx={{ textAlign: 'center', pt: 10, pb: 8 }}>
    <Typography 
      variant="h2" 
      component="h1" 
      color="primary" 
      gutterBottom
      sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}
    >
      Your HRT Companion
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.2rem' }}>
      Manage your schedule, track your levels, and never run out of supplies. 
      <br></br>
      A simple, private, and powerful tool.
    </Typography>
    <Container maxWidth="lg" sx={{ pb: 10, flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
        <Button variant="contained" size="large" disableElevation>
        Download for iOS
        </Button>
        <Button variant="outlined" size="large" disableElevation>
          Download for Android
        </Button>
    </Container>
  </Container>
);