import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Container 
} from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';

const principles = [
  {
    title: 'Free & Open Source',
    description: 'Our codebase is 100% open source. You are free to inspect, audit, and build upon it.',
    icon: <CodeIcon fontSize="large" color="primary" />
  },
  {
    title: 'Community Driven',
    description: 'Built by and for the community. We welcome and actively merge contributions from developers worldwide.',
    icon: <PeopleIcon fontSize="large" color="primary" />
  },
  {
    title: 'Fully Private',
    description: 'Your data belongs to you. We do not track, collect, or share your personal information with anyone.',
    icon: <PrivacyTipIcon fontSize="large" color="primary" />
  },
  {
    title: 'On-Device Processing',
    description: 'Everything happens right on your device. No cloud processing means maximum speed and zero data leaks.',
    icon: <MobileFriendlyIcon fontSize="large" color="primary" />
  }
];

export default function DevelopmentInfo() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
          Built with Trust & Transparency
      </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {principles.map((item, index) => (
              <Card 
                key={index}
                elevation={2}
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  p: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  },
                  width: { xs: '100%', sm: '70%', md: '48%' },
                  alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }}
              >
                <Box sx={{ mb: 2, display: 'flex' }}>
                  {item.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
