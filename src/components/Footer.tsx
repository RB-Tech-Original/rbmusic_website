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
    { icon: <FaApple />, name: 'Apple Music', url: 'https://music.apple.com/be/artist/rb-ceo/1816556638', color: '#FA243C' },
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
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)
        `,
        borderTop: '1px solid rgba(59, 130, 246, 0.1)',
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Animated glow orbs */}
        <motion.div
          initial={{ opacity: 0.6, x: '20%', y: '80%' }}
          animate={{ 
            opacity: [0.6, 0.4, 0.6],
            x: ['20%', '25%', '20%'], 
            y: ['80%', '75%', '80%'], 
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '25vw',
            height: '25vw',
            maxWidth: '400px',
            maxHeight: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0.5, x: '-15%', y: '-20%' }}
          animate={{ 
            opacity: [0.5, 0.3, 0.5],
            x: ['-15%', '-10%', '-15%'], 
            y: ['-20%', '-15%', '-20%'], 
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3 
          }}
          style={{
            position: 'absolute',
            top: '5%',
            right: '5%',
            width: '30vw',
            height: '30vw',
            maxWidth: '500px',
            maxHeight: '500px',
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
        
        {/* Grid pattern overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.6,
        }} />
      </Box>      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: { xs: 4, md: 5 } }}>
          {/* Main Content */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={{ xs: 4, md: 3 }}
            sx={{ mb: 4 }}
          >
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >              <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '350px' }}>
                {/* Enhanced RB MUSIC Logo */}
                <Box sx={{ mb: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1.5,
                      position: 'relative'
                    }}>
                      {/* RB Logo with floating animation */}
                      <motion.div
                        animate={{ 
                          y: [0, -6, 0],
                          scale: [1, 1.03, 1],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        {/* Glow effect behind logo */}
                        <motion.div
                          animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            position: 'absolute',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                            filter: 'blur(8px)',
                          }}
                        />
                        
                        <Box
                          component="img"
                          src="/RB_ROUND.png"
                          alt="RB Logo"
                          sx={{
                            width: '40px',
                            height: '40px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3))',
                            position: 'relative',
                            zIndex: 1,
                          }}
                        />
                      </motion.div>
                      
                      {/* MUSIC Text */}
                      <Typography
                        sx={{
                          fontSize: { xs: '20px', md: '24px' },
                          fontWeight: 900,
                          background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                          backgroundSize: '200% auto',
                          animation: 'textGradient 4s linear infinite',
                          '@keyframes textGradient': {
                            '0%': { backgroundPosition: '0% center' },
                            '100%': { backgroundPosition: '200% center' },
                          },
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          letterSpacing: '1px',
                        }}
                      >
                        MUSIC
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
                  }}
                >
                  Where music meets innovation.
                </Typography>
                
                {/* Company info with enhanced styling */}
                <Box sx={{ 
                  mb: 2,
                  p: 2,
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.5,
                      fontSize: '0.85rem',
                      mb: 1,
                    }}
                  >
                    A subsidiary of{' '}
                    <Typography
                      component="a"
                      href="https://rbtechsa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                        transition: 'all 0.3s ease',
                      }}                    >
                      rbtechsa.com
                    </Typography>
                  </Typography>
                  
                  {/* Contact */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Box sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '6px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Email sx={{ fontSize: 12, color: 'white' }} />
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.85rem',
                      }}
                    >
                      ceo@rbtechsa.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>            {/* Navigation & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-end' }}>
                {/* Quick Links */}
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1.5, 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textAlign: { xs: 'center', md: 'right' },
                      fontSize: '1rem',
                    }}
                  >
                    Quick Links
                  </Typography>                  <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-end' }}>
                    {quickLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Chip
                          label={link.name}
                          onClick={() => handleLinkClick(link.href)}
                          size="small"
                          sx={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'text.primary',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontWeight: 600,
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)',
                              border: '1px solid rgba(59, 130, 246, 0.4)',
                              transform: 'translateY(-1px)',
                              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                            },
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Box>

                {/* Social Media Icons */}
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      mb: 1.5, 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textAlign: { xs: 'center', md: 'right' },
                      fontSize: '1rem',
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-end' }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: 'text.primary',
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            '&:hover': {
                              background: `linear-gradient(135deg, ${social.color}20, ${social.color}30)`,
                              border: `1px solid ${social.color}60`,
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
                </Box>
              </Stack>
            </motion.div>
          </Stack>          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                borderTop: '1px solid rgba(59, 130, 246, 0.2)',
                pt: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                background: 'rgba(59, 130, 246, 0.02)',
                borderRadius: '12px',
                p: 2.5,
                mt: 1,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, gap: { xs: 1, sm: 3 } }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  © {new Date().getFullYear()} RB MUSIC. Created with{' '}
                  <motion.span
                    animate={{ 
                      scale: [1, 1.1, 1],
                      color: ['#3b82f6', '#f43f5e', '#3b82f6']
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ fontSize: '1.1em' }}
                  >
                    ♪
                  </motion.span>{' '}
                  by RB MUSIC
                </Typography>
                
                {/* Privacy Policy Link */}
                <Typography
                  component="a"
                  href="https://rbtechsa.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#3b82f6',
                      textDecoration: 'underline',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Privacy Policy
                </Typography>
              </Box>
              
              {/* Back to Top Button */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  onClick={handleScrollToTop}
                  size="small"
                  sx={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                    color: 'white',
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #dc2626 100%)',
                      boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.6s',
                    },
                    '&:hover::before': {
                      left: '100%',
                    },
                  }}
                  aria-label="Back to top"
                >
                  <KeyboardArrowUp fontSize="small" />
                </IconButton>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
