import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
} from '@mui/material';
import { PlayArrow, MusicNote, Album, Pause } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, floatingAnimation, pulseAnimation } from '../utils/animations';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { musicService } from '../services/musicService';
import { MusicTrack } from '../types';
import PlayingCard from './PlayingCard';

const Hero: React.FC = () => {
  const [latestTrack, setLatestTrack] = useState<MusicTrack | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { playerState, playTrack, togglePlayback, seekTo } = useAudioPlayer();

  // Load the latest track on component mount
  useEffect(() => {    const loadLatestTrack = async () => {
      try {
        const track = await musicService.getLatestTrack();
        setLatestTrack(track);
      } catch (error) {
        console.error('Error loading latest track:', error);
      }
    };

    loadLatestTrack();
  }, []);
  const handlePlayLatestTrack = async () => {
    if (!latestTrack) {
      console.warn('No track available to play');
      return;
    }

    setIsLoading(true);
    try {
      if (playerState.track?.id === latestTrack.id) {
        // If the same track is already loaded, just toggle playback
        await togglePlayback();
      } else {
        // Load and play new track
        await playTrack(latestTrack);
      }
    } catch (error) {
      console.error('Error playing track:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDiscography = () => {
    const musicSection = document.getElementById('music');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isCurrentTrackPlaying = playerState.track?.id === latestTrack?.id && playerState.isPlaying;
  const particleVariants = {
    animate: {
      y: [-30, -120, -30],
      x: [-10, 10, -10],
      opacity: [0, 1, 0.5, 1, 0],
      scale: [0.8, 1.2, 1, 1.1, 0.9],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }
    }
  };

  return (    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,        background: `
          radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
        `,
      }}
    >{/* Enhanced Animated Background Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          transition={{ delay: i * 0.2 }}
          style={{
            position: 'absolute',
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
            width: i % 3 === 0 ? '6px' : '4px',
            height: i % 3 === 0 ? '6px' : '4px',            background: 
              i % 3 === 0 ? '#6366f1' : 
              i % 3 === 1 ? '#ec4899' : '#8b5cf6',
            borderRadius: '50%',
            filter: 'blur(1px)',            boxShadow: `0 0 10px ${
              i % 3 === 0 ? '#6366f1' : 
              i % 3 === 1 ? '#ec4899' : '#8b5cf6'
            }`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
          }}
        >          {/* Artist Logo with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: 'easeOut',
              type: 'spring',
              stiffness: 100
            }}
          >            <Box
              sx={{
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%)',
                margin: '0 auto 3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #ec4899, #8b5cf6)',
                  filter: 'blur(25px)',
                  opacity: 0.4,
                  zIndex: -1,
                  animation: 'pulse 3s ease-in-out infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: '12px',
                  borderRadius: '50%',
                  background: 'rgba(15, 15, 35, 0.85)',
                  backdropFilter: 'blur(20px)',
                },
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                  '50%': { opacity: 0.6, transform: 'scale(1.05)' },
                },
              }}
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                style={{ position: 'relative', zIndex: 1 }}
              >
                <Box
                  component="img"
                  src="/LogoRBTECH_new.png"
                  alt="RB TECH Music Logo"
                  sx={{
                    width: '220px',
                    height: '220px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.6))',
                    borderRadius: '50%',
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>          {/* Main Title with Enhanced Animation */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileHover={{ 
              scale: 1.02,
              textShadow: '0 0 60px rgba(99, 102, 241, 0.5)'
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5.5rem' },
                fontWeight: 900,
                mb: 2,                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(99, 102, 241, 0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              RB MUSIC
            </Typography>
          </motion.div>          {/* Subtitle with Genre Updates */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 600,
                mb: 3,
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  borderRadius: '2px',
                }
              }}
            >
              Hip-Hop • Acoustic
            </Typography>
          </motion.div>          {/* Enhanced Description */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                mb: 4,
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '650px',
                margin: '0 auto 2rem',
                lineHeight: 1.8,
                fontWeight: 400,
                letterSpacing: '0.5px',
              }}
            >
              Dive into authentic rhythms and raw storytelling. From street beats to 
              soulful acoustic melodies, experience music that speaks to the heart 
              and moves the soul.
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.9 }}
          >
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={
                    isLoading ? (
                      <CircularProgress size={20} sx={{ color: 'white' }} />
                    ) : isCurrentTrackPlaying ? (
                      <Pause />
                    ) : (
                      <PlayArrow />
                    )
                  }
                  onClick={handlePlayLatestTrack}
                  disabled={isLoading || !latestTrack}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
                      boxShadow: '0 12px 40px rgba(99, 102, 241, 0.5)',
                      transform: 'translateY(-3px)',
                    },
                    '&:disabled': {
                      background: 'rgba(99, 102, 241, 0.5)',
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isLoading
                    ? 'Loading...'
                    : isCurrentTrackPlaying
                    ? 'Pause Track'
                    : latestTrack
                    ? `Try "${latestTrack.title}"`
                    : 'Play Latest Track'}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Album />}
                  onClick={handleViewDiscography}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    border: '2px solid transparent',                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                    backdropFilter: 'blur(20px)',
                    color: 'white',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                      border: '2px solid rgba(99, 102, 241, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Discography
                </Button>
              </motion.div>
            </Box>
          </motion.div>          {/* Enhanced Floating Music Icons */}
          <Box sx={{ position: 'absolute', top: '20%', left: '10%', display: { xs: 'none', md: 'block' } }}>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >              <MusicNote sx={{ 
                fontSize: '2.5rem', 
                color: 'rgba(99, 102, 241, 0.4)',
                filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))'
              }} />
            </motion.div>
          </Box>

          <Box sx={{ position: 'absolute', bottom: '30%', right: '15%', display: { xs: 'none', md: 'block' } }}>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
            >              <Album sx={{ 
                fontSize: '2rem', 
                color: 'rgba(236, 72, 153, 0.4)',
                filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))'
              }} />
            </motion.div>
          </Box>

          <Box sx={{ position: 'absolute', top: '60%', left: '8%', display: { xs: 'none', md: 'block' } }}>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.3 }}
            >              <Typography sx={{ 
                fontSize: '3rem',
                color: 'rgba(139, 92, 246, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.2))'
              }}>
                🎤
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ position: 'absolute', top: '15%', right: '12%', display: { xs: 'none', md: 'block' } }}>
            <motion.div
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 2.5 }}
              whileHover={{ scale: 1.3 }}
            >              <Typography sx={{ 
                fontSize: '2.5rem',
                color: 'rgba(99, 102, 241, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.2))'
              }}>
                🎸
              </Typography>
            </motion.div>
          </Box>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
          >            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: 'repeat(2, 1fr)', 
                  md: 'repeat(4, 1fr)' 
                },
                gap: { xs: 3, md: 4 },
                mt: 8,
                maxWidth: '1000px',
                margin: '2rem auto 0',
              }}
            >              {[
                { number: '7+', label: 'Streams' },
                { number: '7+', label: 'Hip-Hop Tracks' },
                { number: '5+', label: 'Acoustic Songs' },
                { number: '2+', label: 'Albums' },
              ].map((stat, index) => (<motion.div
                  key={stat.label}
                  variants={pulseAnimation}
                  animate="animate"
                  transition={{ delay: 1.5 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Box sx={{ 
                    textAlign: 'center',
                    p: 2,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                    }
                  }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>          </motion.div>        </Box>
      </Container>      {/* Enhanced Playing Card with Seek Functionality */}
      {playerState.track && (
        <PlayingCard
          track={playerState.track}
          isPlaying={playerState.isPlaying}
          currentTime={playerState.currentTime}
          duration={playerState.duration}
          onTogglePlayback={togglePlayback}
          onSeek={seekTo}
        />
      )}
    </Box>
  );
};

export default Hero;
