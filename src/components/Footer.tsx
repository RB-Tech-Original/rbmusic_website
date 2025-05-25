import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  Chip,
} from '@mui/material';
import {
  Email,
  KeyboardArrowUp,
  MusicNote,
} from '@mui/icons-material';
import { FaSpotify, FaApple, FaItunes } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaSpotify />, name: 'Spotify', url: 'https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH?si=ZJoWy3F2SHmZRga-aofysQ', color: '#1DB954' },
    { icon: <FaApple />, name: 'Apple Music', url: 'https://music.apple.com/us/new', color: '#FA243C' },
    { icon: <FaItunes />, name: 'iTunes', url: 'https://www.apple.com/itunes/', color: '#FF5722' },
    { icon: <SiTidal />, name: 'Tidal', url: 'https://tidal.com/browse/artist/60707695?u', color: '#000000' },
    { icon: <MusicNote />, name: 'Deezer', url: 'https://www.deezer.com/en/', color: '#FEAA2D' },
  ];
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(26, 26, 46, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 6 }}>
          {/* Main Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={4}
            sx={{ mb: 4 }}
          >
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  RB MUSIC
                </Typography>                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                    maxWidth: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Where music meets innovation. Follow the journey of creativity and artistic expression.
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    mb: 3,
                    maxWidth: 300,
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  RB MUSIC is a subsidiary of RB TECH S.A.{' '}
                  <Typography
                    component="a"
                    href="https://rbtechsa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#6366f1',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#ec4899',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    www.rbtechsa.com
                  </Typography>
                </Typography>
                
                {/* Contact */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Email sx={{ fontSize: 18, color: '#6366f1' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    ceo@rbtechsa.com
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Navigation & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-end' }}>
                {/* Quick Links */}
                <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                  {quickLinks.map((link) => (
                    <Chip
                      key={link.name}
                      label={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                          border: '1px solid rgba(99, 102, 241, 0.5)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </Stack>

                {/* Social Media Icons */}
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          width: 48,
                          height: 48,
                          '&:hover': {
                            background: `${social.color}20`,
                            border: `1px solid ${social.color}`,
                            color: social.color,
                            boxShadow: `0 4px 16px ${social.color}30`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Stack>

          {/* Bottom Section */}
          <Box
            sx={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              pt: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.875rem',
              }}
            >
              © {new Date().getFullYear()} RB MUSIC. Created with ♪ by RB MUSIC
            </Typography>
            
            {/* Back to Top Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                onClick={handleScrollToTop}
                sx={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  color: 'white',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5855eb 0%, #db2777 100%)',
                    boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Back to top"
              >
                <KeyboardArrowUp />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
