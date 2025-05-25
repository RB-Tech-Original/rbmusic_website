import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

// Enhanced parrot animations
const danceAnimation = keyframes`
  0% { transform: rotate(-8deg) scale(1) translateY(0px); }
  15% { transform: rotate(8deg) scale(1.05) translateY(-5px); }
  30% { transform: rotate(-6deg) scale(1.1) translateY(-10px); }
  45% { transform: rotate(6deg) scale(1.05) translateY(-5px); }
  60% { transform: rotate(-4deg) scale(1) translateY(0px); }
  75% { transform: rotate(4deg) scale(1.05) translateY(-3px); }
  90% { transform: rotate(-2deg) scale(1.02) translateY(-1px); }
  100% { transform: rotate(-8deg) scale(1) translateY(0px); }
`;

const wingFlapAnimation = keyframes`
  0% { transform: scaleX(1); }
  50% { transform: scaleX(0.8); }
  100% { transform: scaleX(1); }
`;

const bobAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const glowAnimation = keyframes`
  0%, 100% { filter: drop-shadow(0 10px 20px rgba(255, 105, 135, 0.3)) drop-shadow(0 0 20px rgba(76, 205, 196, 0.2)); }
  50% { filter: drop-shadow(0 15px 30px rgba(255, 105, 135, 0.5)) drop-shadow(0 0 30px rgba(76, 205, 196, 0.4)); }
`;

const ParrotContainer = styled(Box)(({ theme }) => ({
  fontSize: '120px',
  animation: `${danceAnimation} 2s ease-in-out infinite, ${glowAnimation} 3s ease-in-out infinite`,
  transformOrigin: 'center bottom',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    animation: `${danceAnimation} 0.3s ease-in-out infinite, ${bobAnimation} 0.5s ease-in-out infinite, ${glowAnimation} 1s ease-in-out infinite`,
  },
  '&::before': {
    content: '"🎵"',
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '24px',
    animation: `${wingFlapAnimation} 1s ease-in-out infinite`,
    opacity: 0.8,
  },
  '&::after': {
    content: '"♪"',
    position: 'absolute',
    top: '-20px',
    right: '10px',
    fontSize: '18px',
    animation: `${wingFlapAnimation} 1.5s ease-in-out infinite reverse`,
    opacity: 0.6,
  },
}));

const DetailedParrot = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&::before': {
    content: '"👑"',
    position: 'absolute',
    top: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '20px',
    animation: `${bobAnimation} 2s ease-in-out infinite`,
    zIndex: 1,
  },
  '&::after': {
    content: '"🎤"',
    position: 'absolute',
    bottom: '-10px',
    right: '-20px',
    fontSize: '30px',
    animation: `${danceAnimation} 1.5s ease-in-out infinite`,
    transform: 'rotate(15deg)',
  },
}));

const FloatingNote = styled(Box)<{ delay: number; direction: 'left' | 'right' }>(({ delay, direction }) => ({
  position: 'absolute',
  fontSize: '24px',
  animation: `${bobAnimation} 2s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.7,
  left: direction === 'left' ? '-60px' : 'auto',
  right: direction === 'right' ? '-60px' : 'auto',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 0,
}));

const sparkleAnimation = keyframes`
  0% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
  100% { opacity: 0; transform: scale(0) rotate(360deg); }
`;

const Sparkle = styled(Box)<{ delay: number; x: number; y: number }>(({ delay, x, y }) => ({
  position: 'absolute',
  fontSize: '16px',
  animation: `${sparkleAnimation} 3s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  left: `${x}%`,
  top: `${y}%`,
  pointerEvents: 'none',
  zIndex: 1,
}));

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | RB MUSIC</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Get back to the music with RB MUSIC - Hip-Hop and Acoustic artist." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://rbmusic.com" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="404 - Page Not Found | RB MUSIC" />
        <meta property="og:description" content="This page doesn't exist, but the music does! Return to RB MUSIC for authentic Hip-Hop and Acoustic tracks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rbmusic.com/404" />
        <meta property="og:image" content="https://rbmusic.com/LogoRBTECH_new.png" />
        <meta property="og:site_name" content="RB MUSIC" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found | RB MUSIC" />
        <meta name="twitter:description" content="This page doesn't exist, but the music does! Return to RB MUSIC for authentic Hip-Hop and Acoustic tracks." />
      </Helmet>
      
      <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          py: 4,
        }}
      >        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ 
            scale: 0.95,
            rotate: 360,
            transition: { duration: 0.8 }
          }}
          style={{ position: 'relative' }}
        >
          {/* Floating musical notes */}
          <FloatingNote delay={0} direction="left">🎵</FloatingNote>
          <FloatingNote delay={0.5} direction="right">♪</FloatingNote>
          <FloatingNote delay={1} direction="left" style={{ top: '20%' }}>🎶</FloatingNote>
          <FloatingNote delay={1.5} direction="right" style={{ top: '80%' }}>♫</FloatingNote>
          
          {/* Sparkle effects */}
          <Sparkle delay={0} x={10} y={15}>✨</Sparkle>
          <Sparkle delay={0.8} x={85} y={25}>⭐</Sparkle>
          <Sparkle delay={1.6} x={15} y={75}>💫</Sparkle>
          <Sparkle delay={2.4} x={80} y={80}>✨</Sparkle>
          <Sparkle delay={0.4} x={50} y={10}>🌟</Sparkle>
          <Sparkle delay={1.2} x={90} y={60}>✨</Sparkle>
          
          <ParrotContainer>
            <DetailedParrot>
              🦜
            </DetailedParrot>
          </ParrotContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
              backgroundSize: '400% 400%',
              animation: 'gradient 3s ease infinite',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              '@keyframes gradient': {
                '0%': {
                  backgroundPosition: '0% 50%',
                },
                '50%': {
                  backgroundPosition: '100% 50%',
                },
                '100%': {
                  backgroundPosition: '0% 50%',
                },
              },
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              mb: 2,
              fontWeight: 500,
            }}
          >
            Oops! Page Not Found
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            This parrot is dancing because it couldn't find the page you're looking for. 
            Let's get you back to the music!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleGoHome}
            sx={{
              background: 'linear-gradient(45deg, #ff6b6b 30%, #4ecdc4 90%)',
              border: 0,
              borderRadius: '25px',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff5252 30%, #26a69a 90%)',
                boxShadow: '0 6px 10px 4px rgba(255, 105, 135, .3)',
              },
            }}
          >
            🎵 Back to Music 🎵
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              mt: 4,
              fontStyle: 'italic',
            }}
          >
            *Hover over the parrot to make it dance faster! Click for a surprise spin!*
          </Typography>        </motion.div>
      </Box>
    </Container>
    </>
  );
};

export default NotFoundPage;