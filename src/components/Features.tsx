import { 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Avatar,
  useTheme
} from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MedicationIcon from '@mui/icons-material/Medication';
import { NotificationsActive } from '@mui/icons-material';

const features = [
  {
    icon: <NotificationsActive />,
    title: 'Intakes & Notifications',
    description: 'Set up personalized medication schedules. Receive timely notifications so you never miss an intake again.',
    image: 'home.png',
    alt: 'Intakes & Notifications Screenshot',
  },
  {
    icon: <ShowChartIcon />,
    title: 'Hormonal Graphs',
    description: 'Visualize your hormone levels over time. Keep track of your blood test results in beautiful, easy-to-read charts.',
    image: 'levels.png',
    alt: 'Hormonal Graphs Screenshot',
  },
  {
    icon: <MedicationIcon />,
    title: 'Supply Tracking',
    description: 'Keep an active inventory of your pharmacy. Mona automatically calculates when you need to restock your supplies.',
    image: 'supplies.png',
    alt: 'Supply Tracking Screenshot',
  },
];

export const Features = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pb: 10, flexGrow: 1 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
        Features
      </Typography>
      
      <Grid container spacing={4} sx={{
        flexWrap: { xs: 'nowrap', md: 'wrap' },
        overflowX: { xs: 'auto', md: 'visible' },
        scrollSnapType: { xs: 'x mandatory', md: 'none' },
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
        pb: { xs: 2, md: 0 }
      }}>
        {features.map((feature) => (
          <Grid size={{ xs: 11, sm: 8, md: 4 }} key={feature.title} sx={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
            <Card variant="outlined" elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.dark', mb: 2, width: 48, height: 48 }}>
                  {feature.icon}
                </Avatar>
                <Typography variant="h5" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={theme.palette.mode === 'dark' ? `/dark/${feature.image}` : `/light/${feature.image}`}
                alt={feature.alt}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};