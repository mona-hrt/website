import React from 'react';
import { Typography, Button, Container } from '@mui/material';

export const Hero = React.forwardRef<HTMLDivElement>((_, ref) => (
  <Container maxWidth="md" sx={{ textAlign: 'center', pt: 10, pb: 8 }} ref={ref}>
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
      <br />
      A simple, private, and powerful tool.
    </Typography>
    <Container maxWidth="lg" sx={{ pb: 10, flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 2, sm: 4 } }}>
      <Button variant="contained" size="large" disableElevation href="https://apps.apple.com/us/app/mona-hrt-journal/id6757274628" target="_blank" rel="noopener noreferrer">
        Download for iOS
      </Button>
      <Button variant="outlined" size="large" disableElevation href="https://play.google.com/store/apps/details?id=com.deliacheminot.mona" target="_blank" rel="noopener noreferrer">
        Download for Android
      </Button>
    </Container>
  </Container>
));