import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { modernTheme } from './styles/theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/404';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={modernTheme}>
        <CssBaseline />
        <Router>
          <Box 
            sx={{ 
              minHeight: '100vh',
              background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none',
              }
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
