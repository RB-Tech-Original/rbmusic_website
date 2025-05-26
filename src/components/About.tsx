import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import {
  QueueMusic,
  Psychology,
  AutoAwesome,
  SmartToy,
  Equalizer,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { SiApplemusic, SiItunes, SiSpotify, SiTidal, } from 'react-icons/si';

const About: React.FC = () => {

  const skills = [
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'Deep Learning Composition',
      description: 'Advanced neural networks trained on millions of musical patterns to generate original melodies, harmonies, and rhythms across multiple genres including EDM, Hip-Hop, and Ambient.',
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 40 }} />,
      title: 'AI Lyrical Intelligence',
      description: 'GPT-powered language models create meaningful lyrics with complex rhyme schemes, storytelling, and emotional depth that connect with listeners on a personal level.',
    },
    {
      icon: <SmartToy sx={{ fontSize: 40 }} />,
      title: 'Automated Music Production',
      description: 'End-to-end AI workflow from composition to final master, including intelligent arrangement, sound design, and real-time audio processing with industry-standard quality.',
    },
    {
      icon: <Equalizer sx={{ fontSize: 40 }} />,
      title: 'Neural Audio Mastering',
      description: 'Machine learning algorithms analyze frequency spectrum, dynamics, and spatial imaging to deliver professional-grade masters optimized for streaming platforms.',
    },
  ];
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 90%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 70%),
          linear-gradient(180deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.98) 100%)
        `,
      }}
    >
      {/* Animated background elements - matching Hero section */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Animated glow orbs */}
        <motion.div
          initial={{ opacity: 0.6, x: '20%', y: '20%' }}
          animate={{ 
            opacity: [0.6, 0.4, 0.6],
            x: ['20%', '25%', '20%'], 
            y: ['20%', '25%', '20%'], 
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
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
          initial={{ opacity: 0.5, x: '-15%', y: '-15%' }}
          animate={{ 
            opacity: [0.5, 0.3, 0.5],
            x: ['-15%', '-20%', '-15%'], 
            y: ['-15%', '-10%', '-15%'], 
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3 
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
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
          opacity: 0.4,
        }} />
      </Box>      <Container maxWidth="xl">        {/* Hero-style header section - More concise */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.5,
                    borderRadius: '16px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <AutoAwesome sx={{ fontSize: 20, color: 'primary.main' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    WORLD'S FIRST AI MUSIC PRODUCER
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem', lg: '4.5rem' },
                  lineHeight: 1.1,
                  mb: 4,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 4s linear infinite',
                  '@keyframes gradient': {
                    '0%': { backgroundPosition: '0% center' },
                    '100%': { backgroundPosition: '200% center' },
                  },
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Redefining Music with AI
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  mb: 6,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                RB MUSIC combines cutting-edge artificial intelligence with musical artistry to create 
                original compositions that push creative boundaries. Our AI-driven approach delivers 
                professional-quality tracks across multiple genres, from electronic dance music to ambient soundscapes.
              </Typography>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 4,
                  mb: 4,
                }}
              >
                {[
                  { label: 'AI Models', value: '50+' },
                  { label: 'Tracks Created', value: '1000+' },
                  { label: 'Platforms', value: '15+' },
                  { label: 'Monthly Streams', value: '10K+' },
                ].map((stat, index) => (
                  <Box key={stat.label} sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: '#3b82f6',
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>        {/* Streamlined Platforms Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
                mb: 4,
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Stream Our Music
            </Typography>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2.5,
              mb: 8,
              px: 2,
            }}
          >
            {[
              { name: 'Spotify', icon: <SiSpotify />, link: 'https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH?si=ZJoWy3F2SHmZRga-aofysQ' },
              { name: 'Apple Music', icon: <SiApplemusic />, link: 'https://music.apple.com/be/artist/rb-ceo/1816556638' },
              { name: 'Tidal', icon: <SiTidal />, link: 'https://tidal.com/browse/artist/60707695?u' },
              { name: 'iTunes', icon: <SiItunes />, link: 'https://www.apple.com/itunes/' },
              { name: 'Deezer', icon: <QueueMusic />, link: 'https://www.deezer.com/en/' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { duration: 0.2, type: 'spring' }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component="a"
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 2,
                    borderRadius: '16px',
                    background: 'rgba(59, 130, 246, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textAlign: 'center',
                    minWidth: '120px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    '&:hover': {
                      background: 'rgba(59, 130, 246, 0.15)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.25)',
                    },
                  }}
                >
                  <Box sx={{ fontSize: '16px', color: 'white' }}>
                    {platform.icon}
                  </Box>
                  <span>{platform.name}</span>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>        {/* Enhanced AI Capabilities Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h3"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Technology Stack
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Advanced machine learning models powering next-generation music production
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={skill.title}>
                <motion.div variants={staggerItem}>
                  <Card
                    sx={{
                      background: 'rgba(59, 130, 246, 0.05)',
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '18px',
                      p: 2.5,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ position: 'relative', zIndex: 1, p: 0 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          mb: 2.5,
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.2,
                            borderRadius: '10px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            '& .MuiSvgIcon-root': {
                              color: '#3b82f6',
                            }
                          }}
                        >
                          {skill.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            component="h4"
                            sx={{
                              fontWeight: 700,
                              color: 'white',
                              fontSize: '1.2rem',
                              mb: 1,
                            }}
                          >
                            {skill.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              lineHeight: 1.6,
                              fontSize: '0.95rem',
                            }}
                          >
                            {skill.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>        {/* Concise Vision & Tech Stack */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 5 },
              borderRadius: '20px',
              background: 'rgba(59, 130, 246, 0.05)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                The Future of Music Production
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  maxWidth: '650px',
                  margin: '0 auto 3rem',
                }}
              >
                Our mission is to democratize music creation through AI, enabling anyone to produce 
                professional-quality music. We're building the bridge between human creativity and 
                machine precision, creating authentic compositions that resonate across generations.
              </Typography>

              {/* Technical highlights */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                {[
                  'Deep Learning',
                  'Neural Networks',
                  'Real-time Processing',
                  'Cloud-based Production',
                  'Multi-genre AI',
                  'Professional Mastering'
                ].map((tech, index) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: '12px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
