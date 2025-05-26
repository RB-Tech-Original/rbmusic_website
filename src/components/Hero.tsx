import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { PlayArrow, Album, Pause, AutoAwesome, MusicNote } from '@mui/icons-material';
import { FaSpotify, FaApple, FaItunes } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { musicService } from '../services/musicService';
import { MusicTrack } from '../types';
import { gradients } from '../styles/theme';
import PlayingCard from './PlayingCard';

const Hero: React.FC = () => {
  const [latestTrack, setLatestTrack] = useState<MusicTrack | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { playerState, playTrack, togglePlayback, seekTo } = useAudioPlayer();
  const theme = useTheme();

  // Load the latest track on component mount
  useEffect(() => {
    const loadLatestTrack = async () => {
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
        console.log('Loading track:', latestTrack.title);
        await playTrack(latestTrack);
        console.log('Track loaded successfully:', latestTrack.title);
      }
    } catch (error) {
      console.error('Error playing track:', error);
      // Could add a toast notification here for user feedback
      console.error('Failed to play track:', latestTrack.title);
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

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 0 },
        background: `
          radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)
        `,
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Animated glow orbs */}
        <motion.div
          initial={{ opacity: 0.7, x: '10%', y: '10%' }}
          animate={{ 
            opacity: [0.7, 0.5, 0.7],
            x: ['10%', '15%', '10%'], 
            y: ['10%', '15%', '10%'], 
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '30vw',
            height: '30vw',
            maxWidth: '500px',
            maxHeight: '500px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0.7, x: '-10%', y: '-10%' }}
          animate={{ 
            opacity: [0.7, 0.4, 0.7],
            x: ['-10%', '-15%', '-10%'], 
            y: ['-10%', '-5%', '-10%'], 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '35vw',
            height: '35vw',
            maxWidth: '600px',
            maxHeight: '600px',
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Grid pattern overlay */}
        <Box sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }} />
      </Box>

      <Container maxWidth="xl">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          alignItems="center" 
          justifyContent="space-between"
        >
          {/* Left side - Text content - Displayed second on mobile, first on desktop */}
          <Box 
            sx={{ 
              width: '100%', 
              maxWidth: '600px', 
              mx: { xs: 'auto', md: 0 }, 
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 }
            }}
          >            <Box sx={{ mb: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >                {/* Enhanced RB MUSIC Logo */}
                <Box sx={{ mb: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      position: 'relative'
                    }}>                      {/* Circular Icon with RB */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          y: [0, -8, 0],
                          filter: [
                            'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                            'drop-shadow(0 8px 20px rgba(59, 130, 246, 0.4))',
                            'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{
                          scale: 1.15,
                          y: -5,
                          filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.6))',
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          width: '60px',
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        {/* RbTech Logo */}
                        <Box
                          component="img"
                          src="/RB_ROUND.png"
                          alt="RbTech Logo"
                          sx={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                          }}
                        />
                      </motion.div>
                      
                      {/* MUSIC Text */}
                      <Box>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: '28px', md: '36px' },
                              fontWeight: 900,
                              background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #f43f5e 100%)',
                              backgroundSize: '200% auto',
                              animation: 'textGradient 3s linear infinite',
                              '@keyframes textGradient': {
                                '0%': { backgroundPosition: '0% center' },
                                '100%': { backgroundPosition: '200% center' },
                              },
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              letterSpacing: '2px',
                              textShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              position: 'relative',
                            }}
                          >
                            MUSIC
                          </Typography>
                          <motion.div
                            animate={{ 
                              scaleX: [0, 1, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: 1
                            }}
                            style={{
                              height: '2px',
                              background: 'linear-gradient(90deg, transparent, #3b82f6, #f43f5e, transparent)',
                              marginTop: '4px',
                              borderRadius: '1px',
                            }}
                          />
                        </motion.div>
                      </Box>
                      
                      {/* Floating particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.7,
                            ease: "easeInOut"
                          }}
                          style={{
                            position: 'absolute',
                            right: `-${10 + i * 15}px`,
                            top: `${20 + i * 10}px`,
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: i % 2 === 0 ? '#3b82f6' : '#f43f5e',
                            filter: 'blur(0.5px)',
                          }}
                        />
                      ))}
                    </Box>
                  </motion.div>
                </Box>
                
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: 16 }} />}
                  label="AI-POWERED MUSIC PRODUCER"
                  size="medium"
                  sx={{ 
                    fontWeight: 600,
                    px: 2,
                    py: 2.5,
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    mb: 3,
                    '& .MuiChip-icon': {
                      color: theme.palette.primary.main,
                    }
                  }}
                />
              </motion.div>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  lineHeight: 1.1,
                  mb: 3,
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
                Next-Generation Music Production
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
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: '90%' },
                  lineHeight: 1.7,
                }}
              >
                Pushing the boundaries of musical creativity with advanced AI technology. 
                Experience the fusion of artificial intelligence and human artistry through 
                innovative compositions that define the future of sound.
              </Typography>
              
              {/* Track info display */}
              {latestTrack && (
                <Box sx={{ 
                  mb: 3, 
                  p: 2, 
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                    LATEST RELEASE
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {latestTrack.title}
                  </Typography>
                  {latestTrack.artist && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      by {latestTrack.artist}
                    </Typography>
                  )}
                </Box>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mt: 5,
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}>                <Button
                  variant="contained"
                  size="large"
                  onClick={handlePlayLatestTrack}
                  disabled={isLoading || !latestTrack}
                  startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : isCurrentTrackPlaying ? <Pause /> : <PlayArrow />}
                  sx={{
                    py: 1.8,
                    px: 3,
                    borderRadius: '14px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: latestTrack ? gradients.primary : 'rgba(120, 120, 120, 0.3)',
                    boxShadow: latestTrack ? '0 10px 25px rgba(59, 130, 246, 0.3)' : '0 5px 15px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    opacity: isLoading ? 0.8 : 1,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: latestTrack && !isLoading ? 'translateY(-3px)' : 'none',
                      boxShadow: latestTrack ? '0 15px 30px rgba(59, 130, 246, 0.4)' : '0 5px 15px rgba(0, 0, 0, 0.2)',
                      '&::before': {
                        opacity: latestTrack ? 1 : 0,
                      }
                    },
                    '&:disabled': {
                      background: 'rgba(120, 120, 120, 0.3)',
                      color: 'rgba(255, 255, 255, 0.5)',
                      boxShadow: 'none',
                      transform: 'none',
                    },
                    minWidth: { xs: '100%', sm: '180px' },
                  }}
                >
                  {isLoading ? 'Loading...' : isCurrentTrackPlaying ? 'Pause Track' : 'Play Latest Track'}
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleViewDiscography}
                  startIcon={<Album />}
                  sx={{
                    py: 1.8,
                    px: 3,
                    borderRadius: '14px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    color: 'white',
                    background: 'rgba(59, 130, 246, 0.05)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      background: 'rgba(59, 130, 246, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                    minWidth: { xs: '100%', sm: '180px' },
                  }}
                >
                  View Discography
                </Button>
              </Box>
            </motion.div>
              {/* Featured on platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ mt: 6, opacity: 0.8 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}>
                  AVAILABLE ON MAJOR PLATFORMS
                </Typography>
                <Box sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap', 
                  gap: 3,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  {[
                    { icon: <FaSpotify />, name: 'Spotify', url: 'https://open.spotify.com/artist/0obtHk61jktNA0D5qii2nH?si=ZJoWy3F2SHmZRga-aofysQ', color: '#1DB954' },
                    { icon: <FaApple />, name: 'Apple Music', url: 'https://music.apple.com/be/artist/rb-ceo/1816556638', color: '#FA243C' },
                    { icon: <FaItunes />, name: 'iTunes', url: 'https://www.apple.com/itunes/', color: '#FF5722' },
                    { icon: <SiTidal />, name: 'Tidal', url: 'https://tidal.com/browse/artist/60707695?u', color: '#000000' },
                    { icon: <MusicNote />, name: 'Deezer', url: 'https://www.deezer.com/en/', color: '#FEAA2D' },
                  ].map((platform) => (
                    <Box
                      key={platform.name}
                      component="a"
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: platform.color,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        opacity: 0.7,
                        '&:hover': {
                          opacity: 1,
                          transform: 'translateY(-3px) scale(1.1)',
                          backgroundColor: `${platform.color}15`,
                          borderColor: platform.color,
                          boxShadow: `0 8px 25px ${platform.color}30`,
                        },
                        '& svg': {
                          fontSize: '1.4rem',
                        }
                      }}
                    >
                      {platform.icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Box>
          
          {/* Right side - Artwork display - Displayed first on mobile, second on desktop */}
          <Box sx={{ width: '100%', maxWidth: '600px', order: { xs: 1, md: 2 } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ 
                position: 'relative',
                width: '100%',
                height: { xs: '300px', sm: '400px', md: '500px' },
                maxWidth: '600px',
                mx: 'auto',
              }}>                {/* Main artwork */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    scale: isCurrentTrackPlaying ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ 
                    y: {
                      duration: 6, 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 2,
                      repeat: isCurrentTrackPlaying ? Infinity : 0,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                  }}
                >
                </motion.div>
                
                {/* Decorative elements */}
                <Box sx={{ 
                  position: 'absolute',
                  top: '10%',
                  right: { xs: '5%', md: '15%' },
                  width: { xs: '100px', md: '120px' },
                  height: { xs: '100px', md: '120px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  zIndex: 1,
                }} />
                
                <Box sx={{ 
                  position: 'absolute',
                  bottom: '15%',
                  left: { xs: '5%', md: '15%' },
                  width: { xs: '120px', md: '150px' },
                  height: { xs: '120px', md: '150px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  zIndex: 1,
                }} />
                
                {/* Secondary albums positioned behind main artwork */}
                <motion.div
                  animate={{ 
                    rotate: [-5, 5, -5],
                    x: ['-5%', '0%', '-5%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: '60%',
                    left: '15%',
                    transform: 'translate(-50%, -50%) rotate(-15deg)',
                    zIndex: 5,
                  }}
                >
                  <Box
                    component="img"
                    src="/Garden.png"
                    alt="Previous Release"
                    sx={{
                      width: { xs: '120px', sm: '140px', md: '180px' },
                      height: { xs: '120px', sm: '140px', md: '180px' },
                      borderRadius: '15px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: 0.8,
                    }}
                  />
                </motion.div>
                  <motion.div
                  animate={{ 
                    rotate: [5, -5, 5],
                    x: ['5%', '0%', '5%'],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: '30%',
                    right: '15%',
                    transform: 'translate(50%, -50%) rotate(15deg)',
                    zIndex: 5,
                  }}
                >
                  <Box
                    component="img"
                    src="/Forged_In_Time.png"
                    alt="Another Release"
                    sx={{
                      width: { xs: '120px', sm: '140px', md: '180px' },
                      height: { xs: '120px', sm: '140px', md: '180px' },
                      borderRadius: '15px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: 0.8,
                    }}
                  />
                </motion.div>

                <motion.div
                  animate={{ 
                    rotate: [-3, 3, -3],
                    x: ['-3%', '3%', '-3%'],
                    y: ['2%', '-2%', '2%'],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    transform: 'translate(-50%, -50%) rotate(-25deg)',
                    zIndex: 4,
                  }}
                >
                  <Box
                    component="img"
                    src="/Another_Worlds_Stories_-_Cover.png"
                    alt="Another Worlds Stories Release"
                    sx={{
                      width: { xs: '100px', sm: '120px', md: '160px' },
                      height: { xs: '100px', sm: '120px', md: '160px' },
                      borderRadius: '15px',
                      objectFit: 'cover',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: 0.75,
                    }}
                  />                </motion.div>
              </Box>
            </motion.div>          </Box>
        </Stack>
      </Container>
      
      {/* PlayingCard Component - Shows when a track is playing */}
      <PlayingCard
        track={playerState.track}
        isPlaying={playerState.isPlaying}
        currentTime={playerState.currentTime}
        duration={playerState.duration || 30} // Default to 30 seconds for preview
        onTogglePlayback={togglePlayback}
        onSeek={seekTo}
      />
    </Box>
  );
};

export default Hero;
