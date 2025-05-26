import { createTheme } from '@mui/material/styles';

export const modernTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Bright blue
      light: '#60a5fa',
      dark: '#2563eb',
    },
    secondary: {
      main: '#f43f5e', // Vibrant rose
      light: '#fb7185',
      dark: '#e11d48',
    },
    background: {
      default: '#0c0c1d', // Deeper background
      paper: '#13132b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.2rem',
      letterSpacing: '-0.01em',
      background: 'linear-gradient(135deg, #60a5fa 0%, #fb7185 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      color: '#ffffff',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.6rem',
      color: '#ffffff',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#94a3b8',
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
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
          background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #60a5fa 0%, #fb7185 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(19, 19, 43, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          backdropFilter: 'blur(10px)',
        },
        filled: {
          background: 'rgba(59, 130, 246, 0.15)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          '&:hover': {
            background: 'rgba(59, 130, 246, 0.25)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        },
      },
    },
  },
});

export const gradients = {
  primary: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
  secondary: 'linear-gradient(135deg, #60a5fa 0%, #fb7185 100%)',
  background: 'linear-gradient(135deg, #0c0c1d 0%, #13132b 100%)',
  card: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(244, 63, 94, 0.1) 100%)',
  glow: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, rgba(244, 63, 94, 0.8) 100%)',
  glassMorphism: 'linear-gradient(135deg, rgba(19, 19, 43, 0.7) 0%, rgba(16, 16, 36, 0.8) 100%)',
};
