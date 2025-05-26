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
import SEOComponent from './components/SEOComponent';
import ScrollToTopButton from './components/ScrollToTopButton';

// Import fonts
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={modernTheme}>
        <CssBaseline />
        <SEOComponent 
          data={{
            title: "RB MUSIC | Professional AI Music Producer",
            description: "Explore the innovative sounds of RB MUSIC - where AI meets musical artistry. Listen to the latest tracks and discover a new era of music production.",
            keywords: "AI music, music producer, neural composition, RB MUSIC, AI production"
          }}
          includeMusicianSchema={true}
          includeWebsiteSchema={true}
        />
        <Router>
          <Box 
            sx={{ 
              minHeight: '100vh',
              background: 'linear-gradient(135deg, #0c0c1d 0%, #13132b 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 10% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(244, 63, 94, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 1,
              }
            }}
          >
            <Box sx={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              zIndex: 10000 
            }}>
              <Header />
            </Box>
            <Box sx={{ 
              position: 'relative', 
              zIndex: 1,
              paddingTop: theme => theme.spacing(8) // Add padding to account for fixed header
            }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </Box>
            <ScrollToTopButton />
          </Box>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
