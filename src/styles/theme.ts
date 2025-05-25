import { createTheme } from '@mui/material/styles';

export const modernTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo
      light: '#8b5cf6', // Purple
      dark: '#4338ca',
    },
    secondary: {
      main: '#ec4899', // Pink
      light: '#f472b6',
      dark: '#be185d',
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#ffffff',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#ffffff',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#a1a1aa',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(26, 26, 46, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export const gradients = {
  primary: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  secondary: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
  card: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
};
