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
  Mic,
  Piano,
  QueueMusic,
  Headphones,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { SiApplemusic, SiItunes, SiSpotify, SiTidal, } from 'react-icons/si';

const About: React.FC = () => {


  const skills = [
    {
      icon: <Mic sx={{ fontSize: 40 }} />,
      title: 'Lyrical Mastery',
      description: 'Crafting authentic narratives that resonate with real-life experiences, delivering powerful messages through carefully constructed wordplay and rhythmic flow.',
    },
    {
      icon: <Piano sx={{ fontSize: 40 }} />,
      title: 'Acoustic Arrangement',
      description: 'Creating intimate musical landscapes using acoustic instruments, focusing on melody and harmony to evoke deep emotional connections.',
    },
    {
      icon: <QueueMusic sx={{ fontSize: 40 }} />,
      title: 'Production Excellence',
      description: 'Utilizing cutting-edge studio technology and innovative production techniques to create professionally polished tracks that stand out in the industry.',
    },
    {
      icon: <Headphones sx={{ fontSize: 40 }} />,
      title: 'Audio Engineering',
      description: 'Ensuring exceptional sound quality through meticulous mixing and mastering processes, optimized for all listening environments and platforms.',
    },
  ];

  return (    <Box
      id="about"
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.9) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                borderRadius: '2px',
                opacity: 0.8,
              }
            }}
          >            The Artist Behind the Music
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto 4rem',
              lineHeight: 1.8,
            }}
          >
            Since 2025, RB MUSIC has been on a relentless journey of artistic evolution, 
            transforming personal experiences into musical masterpieces. From underground 
            freestyle sessions to professional studio productions, this journey represents 
            dedication, authenticity, and an unwavering commitment to musical excellence.
          </Typography>
        </motion.div>

        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'white',
              position: 'relative',
              '&::before': {
                content: '"🎵"',
                position: 'absolute',
                left: '50%',
                top: '-20px',
                transform: 'translateX(-50%)',
                fontSize: '1.5rem',
                opacity: 0.7,
              }
            }}
          >
            Available Everywhere
          </Typography>
          
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 3,
              mb: 8,
              px: 2,
            }}
            >
            {[
              { name: 'Spotify', icon: <SiSpotify />, link: 'https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH?si=ZJoWy3F2SHmZRga-aofysQ' },
              { name: 'Apple Music', icon: <SiApplemusic />, link: 'https://music.apple.com/us/new' },
              { name: 'Tidal', icon: <SiTidal />, link: 'https://tidal.com/browse/artist/60707695?u' },
              { name: 'iTunes', icon: <SiItunes />, link: 'https://www.apple.com/itunes/' },
              { name: 'Deezer', icon: <QueueMusic />, link: 'https://www.deezer.com/en/' }
            ].map((platform, index) => (
              <motion.div
              key={platform.name}
              variants={staggerItem}
              whileHover={{ 
              scale: 1.08, 
              y: -8,
              rotateY: 5,
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
              px: 4,
              py: 2.5,
              borderRadius: '30px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem',
              textAlign: 'center',
              minWidth: '150px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              '&:hover': {
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)',
              border: '2px solid rgba(99, 102, 241, 0.4)',
              boxShadow: '0 15px 35px rgba(99, 102, 241, 0.25)',
              '&::before': {
              transform: 'translateX(0%)',
              }
              },
              '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              transform: 'translateX(-100%)',
              transition: 'transform 0.3s ease',
              }
              }}
              >
              <Box
              sx={{
              fontSize: '20px',
              position: 'relative',
              zIndex: 1,
              color: 'white'
              }}
              >
              {platform.icon}
              </Box>
              <span style={{ position: 'relative', zIndex: 1 }}>
              {platform.name}
              </span>
              </Box>
              </motion.div>
            ))}
            </Box>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: 'white',
            }}
          >
            Musical Expertise
          </Typography>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={skill.title}>
                <motion.div variants={staggerItem}>
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px',
                      p: 3,
                      height: '100%',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      overflow: 'hidden',                      '&:hover': {
                        transform: 'translateY(-12px) rotateY(5deg)',
                        boxShadow: '0 30px 60px rgba(99, 102, 241, 0.25)',
                        border: '1px solid rgba(99, 102, 241, 0.4)',
                        '&::before': {
                          opacity: 1,
                        },
                        '&::after': {
                          opacity: 1,
                        }
                      },                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-2px',
                        left: '-2px',
                        right: '-2px',
                        bottom: '-2px',
                        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                        borderRadius: '26px',
                        zIndex: -1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }
                    }}
                  >
                    <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          '& .MuiSvgIcon-root': {
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            mr: 2,
                          }
                        }}
                      >
                        {skill.icon}
                        <Typography
                          variant="h5"
                          component="h4"
                          sx={{
                            fontWeight: 700,
                            color: 'white',
                            fontSize: '1.4rem',
                          }}
                        >
                          {skill.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.7,
                          fontSize: '1.1rem',
                        }}
                      >
                        {skill.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card
            sx={{
              mt: 8,
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '32px',
              p: 6,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                animation: 'rotate 20s linear infinite',
              },
              '@keyframes rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              }
            }}
          >
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.8,
                  maxWidth: '700px',
                  margin: '0 auto',
                }}
              >
                To bridge the gap between Hip-Hop's powerful storytelling and Acoustic music's 
                intimate expression. We create authentic music that honors both genres while 
                building connections across cultures and communities through universal rhythms and melodies.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
