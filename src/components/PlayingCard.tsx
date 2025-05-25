import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Avatar,
  Fab,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  Close,
  GraphicEq,
  MusicNote,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { MusicTrack } from '../types';

interface PlayingCardProps {
  track: MusicTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlayback: () => void;
  onSeek?: (time: number) => void;
}

const PlayingCard: React.FC<PlayingCardProps> = ({
  track,
  isPlaying,
  currentTime,
  duration,
  onTogglePlayback,
  onSeek,
}) => {  const [isCardVisible, setIsCardVisible] = useState(true);
  const [showMiniIcon, setShowMiniIcon] = useState(false);

  // Auto-hide card after 30 seconds when song finishes
  useEffect(() => {
    if (!isPlaying && currentTime >= 30) {
      const timer = setTimeout(() => {
        setIsCardVisible(false);
        setShowMiniIcon(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentTime, isPlaying]);

  // Show card when track starts
  useEffect(() => {
    if (track && isPlaying) {
      setIsCardVisible(true);
      setShowMiniIcon(false);
    }
  }, [track, isPlaying]);

  // Hide mini icon when song ends
  useEffect(() => {
    if (!isPlaying && currentTime >= 30) {
      setShowMiniIcon(false);
    }
  }, [isPlaying, currentTime]);

  // Debug: Log current time changes
  useEffect(() => {
    if (track) {
      const progress = (currentTime / 30) * 100;
      console.log('PlayingCard currentTime updated:', currentTime, 'progress:', progress);
    }
  }, [currentTime, track]);

  if (!track) return null;

  // Always use 30 seconds as the maximum duration for preview
  const progress = (currentTime / 30) * 100;
  const isInFadeOut = currentTime >= 27 && currentTime < 30;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const handleCloseCard = () => {
    setIsCardVisible(false);
    if (isPlaying) {
      setShowMiniIcon(true);
    }
  };

  const handleMiniIconClick = () => {
    setShowMiniIcon(false);
    setIsCardVisible(true);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.6,
      }
    },
    exit: { 
      opacity: 0, 
      y: 100,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      }
    }
  };

  const miniIconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 0.5,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };  const albumArtVariants = {
    playing: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    paused: {
      scale: 1,
    }
  };

  const cardGlowVariants = {
    playing: {
      filter: [
        'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))',
        'drop-shadow(0 0 30px rgba(236, 72, 153, 0.4))',
        'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))',
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    paused: {
      filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
    }
  };  const hipHopPulse = {
    playing: {
      scale: [1, 1.15, 1],
      filter: [
        'drop-shadow(0 0 5px #6366f1)',
        'drop-shadow(0 0 15px #ec4899)',
        'drop-shadow(0 0 5px #6366f1)',
      ],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    paused: {
      scale: 1,
      filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))',
    }
  };
  // Wave ring animations for floating button
  const waveRingVariants = {
    wave1: {
      scale: [0, 2],
      opacity: [0.6, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeOut",
      }
    },
    wave2: {
      scale: [0, 2.5],
      opacity: [0.4, 0],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        delay: 0.2,
        ease: "easeOut",
      }
    },
    wave3: {
      scale: [0, 3],
      opacity: [0.3, 0],
      transition: {
        duration: 2.0,
        repeat: Infinity,
        delay: 0.4,
        ease: "easeOut",
      }
    },
    wave4: {
      scale: [0, 3.5],
      opacity: [0.2, 0],
      transition: {
        duration: 2.4,
        repeat: Infinity,
        delay: 0.6,
        ease: "easeOut",
      }
    }
  };
  // Rhythmic pulse for hip-hop beat - faster tempo for hip-hop
  const rhythmicPulse = {
    beat1: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.7, 0.2],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    beat2: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.5, 0.1],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        delay: 0.15,
        ease: "easeInOut",
      }
    },
    beat3: {
      scale: [1, 1.7, 1],
      opacity: [0.2, 0.3, 0.05],
      transition: {
        duration: 0.9,
        repeat: Infinity,
        delay: 0.3,
        ease: "easeInOut",
      }
    }
  };
  // Internal wave animations for the floating button
  const internalWaveVariants = {
    wave1: {
      scale: [0.3, 1.1, 0.3],
      opacity: [0.8, 0.3, 0.8],
      rotate: [0, 180, 360],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    wave2: {
      scale: [0.5, 1.3, 0.5],
      opacity: [0.6, 0.2, 0.6],
      rotate: [0, -180, -360],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: 0.2,
        ease: "easeInOut",
      }
    },
    wave3: {
      scale: [0.7, 1.5, 0.7],
      opacity: [0.4, 0.1, 0.4],
      rotate: [0, 90, 180],
      transition: {
        duration: 1.6,
        repeat: Infinity,
        delay: 0.4,
        ease: "easeInOut",
      }
    }
  };

  // Enhanced flowing wave animations that move with rhythm
  const flowingWaveVariants = {
    wave1: {
      x: [-200, 200],
      scaleY: [0.8, 1.5, 1.2, 1.8, 0.8],
      opacity: [0, 0.6, 0.8, 0.4, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    },
    wave2: {
      x: [200, -200],
      scaleY: [1.2, 0.6, 2.0, 0.9, 1.2],
      opacity: [0, 0.4, 0.7, 0.3, 0],
      transition: {
        duration: 3.0,
        repeat: Infinity,
        delay: 0.5,
        ease: "easeInOut",
      }
    },
    wave3: {
      x: [-150, 150],
      scaleY: [1.0, 2.2, 0.7, 1.6, 1.0],
      opacity: [0, 0.5, 0.9, 0.2, 0],
      transition: {
        duration: 2.8,
        repeat: Infinity,
        delay: 1.0,
        ease: "easeInOut",
      }
    }
  };

  // Rhythmic expanding circles that pulse with beat
  const rhythmicCircleVariants = {
    circle1: {
      scale: [0, 4, 0],
      opacity: [0, 0.4, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
      }
    },
    circle2: {
      scale: [0, 5, 0],
      opacity: [0, 0.3, 0],
      transition: {
        duration: 2.0,
        repeat: Infinity,
        delay: 0.3,
        ease: "easeOut",
      }
    },
    circle3: {
      scale: [0, 6, 0],
      opacity: [0, 0.2, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        delay: 0.6,
        ease: "easeOut",
      }
    }
  };

  return (
    <>      {/* Main Playing Card */}
      <AnimatePresence>
        {isCardVisible && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 1000,
              width: '400px',
            }}
          >
            <motion.div
              variants={cardGlowVariants}
              animate={isPlaying ? "playing" : "paused"}
              style={{
                borderRadius: '24px',
              }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(30, 30, 60, 0.95) 100%)',
                  backdropFilter: 'blur(25px)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: isInFadeOut 
                      ? 'linear-gradient(90deg, #f59e0b 0%, #ef4444 50%, #dc2626 100%)'
                      : 'linear-gradient(90deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%)',
                    boxShadow: isInFadeOut 
                      ? '0 0 25px rgba(245, 158, 11, 0.6)'
                      : '0 0 25px rgba(99, 102, 241, 0.6)',
                    transition: 'all 0.5s ease',
                  },
                  '&::after': isPlaying ? {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent 48%, rgba(99, 102, 241, 0.05) 50%, transparent 52%)',
                    animation: 'shimmer 3s ease-in-out infinite',
                    pointerEvents: 'none',
                    '@keyframes shimmer': {
                      '0%': { transform: 'translateX(-100%)' },
                      '100%': { transform: 'translateX(100%)' },
                    },
                  } : {},
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Header with close button */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <motion.div
                        variants={hipHopPulse}
                        animate={isPlaying ? "playing" : "paused"}
                      >
                        <GraphicEq sx={{ 
                          color: isPlaying ? '#6366f1' : 'rgba(255, 255, 255, 0.5)', 
                          fontSize: '1.2rem',
                          filter: isPlaying ? 'drop-shadow(0 0 8px #6366f1)' : 'none'
                        }} />
                      </motion.div>                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                        }}
                      >
                        {isInFadeOut ? 'Ending Soon' : (isPlaying ? 'Now Playing' : 'Paused')}
                      </Typography>
                    </Box>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        onClick={handleCloseCard}
                        size="small"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          '&:hover': {
                            color: '#ec4899',
                            backgroundColor: 'rgba(236, 72, 153, 0.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </motion.div>
                  </Box>                  {/* Track info and album art */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <motion.div
                      variants={albumArtVariants}
                      animate={isPlaying ? "playing" : "paused"}
                      style={{
                        position: 'relative',
                      }}
                    >                      {/* Rotating background ring for playing state */}
                      {isPlaying && (
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            position: 'absolute',
                            top: -8,
                            left: -8,
                            width: 96,
                            height: 96,
                            background: `conic-gradient(from 0deg, ${isInFadeOut ? '#f59e0b' : '#6366f1'}, ${isInFadeOut ? '#ef4444' : '#ec4899'}, ${isInFadeOut ? '#dc2626' : '#8b5cf6'}, ${isInFadeOut ? '#f59e0b' : '#6366f1'})`,
                            borderRadius: '50%',
                            filter: 'blur(2px)',
                            opacity: 0.6,
                            zIndex: 0,
                          }}
                        />
                      )}

                      {/* Inner glow ring */}
                      {isPlaying && (
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            position: 'absolute',
                            top: -4,
                            left: -4,
                            width: 88,
                            height: 88,
                            background: `radial-gradient(circle, transparent 60%, ${isInFadeOut ? 'rgba(245, 158, 11, 0.3)' : 'rgba(99, 102, 241, 0.3)'} 100%)`,
                            borderRadius: '50%',
                            zIndex: 1,
                          }}
                        />
                      )}
                      
                      <Avatar
                        src={track.coverUrl}
                        sx={{
                          width: 80,
                          height: 80,
                          mr: 2.5,
                          borderRadius: '16px',
                          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                          border: isPlaying 
                            ? `3px solid ${isInFadeOut ? 'rgba(245, 158, 11, 0.8)' : 'rgba(99, 102, 241, 0.8)'}` 
                            : '3px solid rgba(99, 102, 241, 0.4)',
                          boxShadow: isPlaying 
                            ? `0 0 20px ${isInFadeOut ? 'rgba(245, 158, 11, 0.4)' : 'rgba(99, 102, 241, 0.4)'}, 0 4px 15px rgba(0, 0, 0, 0.3)` 
                            : '0 8px 20px rgba(0, 0, 0, 0.4)',
                          transition: 'all 0.4s ease',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          color: 'white',
                          position: 'relative',
                          zIndex: 2,
                          overflow: 'hidden',
                          '&::after': isPlaying ? {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(45deg, transparent 30%, ${isInFadeOut ? 'rgba(245, 158, 11, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 50%, transparent 70%)`,
                            animation: 'albumShimmer 2s ease-in-out infinite',
                            '@keyframes albumShimmer': {
                              '0%': { transform: 'translateX(-100%) translateY(-100%)' },
                              '100%': { transform: 'translateX(100%) translateY(100%)' },
                            },
                          } : {},
                        }}
                      >
                        {!track.coverUrl && <MusicNote sx={{ fontSize: '2rem' }} />}
                      </Avatar>
                    </motion.div>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {track.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#b3b3b3',
                          fontSize: '0.9rem',
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          fontWeight: 500,
                        }}
                      >
                        {track.artist}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontWeight: 600,
                        }}
                      >
                        <Box sx={{ 
                          width: 6, 
                          height: 6, 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                          boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)'
                        }} />
                        Hip-Hop • Instrumental{isInFadeOut && ' • Fade Out'}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Progress bar */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: '#6366f1', 
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          fontVariantNumeric: 'tabular-nums',
                          minWidth: '40px',
                        }}
                      >
                        {formatTime(currentTime)}
                      </Typography>
                      <Box sx={{ flex: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={progress}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            cursor: 'pointer',
                            '& .MuiLinearProgress-bar': {
                              background: isInFadeOut 
                                ? 'linear-gradient(90deg, #f59e0b 0%, #ef4444 70%, #dc2626 100%)'
                                : 'linear-gradient(90deg, #6366f1 0%, #ec4899 70%, #8b5cf6 100%)',
                              borderRadius: 4,
                              boxShadow: isInFadeOut
                                ? '0 0 15px rgba(245, 158, 11, 0.6)'
                                : '0 0 15px rgba(99, 102, 241, 0.6)',
                              transition: 'all 0.3s ease',
                            },
                            '&:hover': {
                              '& .MuiLinearProgress-bar': {
                                boxShadow: isInFadeOut
                                  ? '0 0 20px rgba(245, 158, 11, 0.8)'
                                  : '0 0 20px rgba(99, 102, 241, 0.8)',
                                transform: 'scaleY(1.2)',
                              },
                            },
                          }}
                          onClick={(e) => {
                            if (onSeek) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const clickX = e.clientX - rect.left;
                              const newTime = (clickX / rect.width) * 30; // Always seek within 30 seconds
                              onSeek(newTime);
                            }
                          }}
                        />
                      </Box>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: isInFadeOut ? '#f59e0b' : 'rgba(255, 255, 255, 0.7)', 
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          fontVariantNumeric: 'tabular-nums',
                          minWidth: '40px',
                          textAlign: 'right',
                        }}
                      >
                        -{formatTime(Math.max(0, 30 - currentTime))}
                      </Typography>
                    </Box>
                  </Box>                  {/* Play button */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    {/* Outer rotating glow ring */}
                    {isPlaying && (
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          position: 'absolute',
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          background: `conic-gradient(from 0deg, ${isInFadeOut ? 'rgba(245, 158, 11, 0.3)' : 'rgba(99, 102, 241, 0.3)'}, ${isInFadeOut ? 'rgba(239, 68, 68, 0.5)' : 'rgba(236, 72, 153, 0.5)'}, ${isInFadeOut ? 'rgba(220, 38, 38, 0.3)' : 'rgba(139, 92, 246, 0.3)'}, ${isInFadeOut ? 'rgba(245, 158, 11, 0.3)' : 'rgba(99, 102, 241, 0.3)'})`,
                          filter: 'blur(8px)',
                          zIndex: 0,
                        }}
                      />
                    )}

                    {/* Pulsing background ring */}
                    <motion.div
                      animate={isPlaying ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      } : { scale: 1, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: isPlaying ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${isInFadeOut ? 'rgba(245, 158, 11, 0.4)' : 'rgba(99, 102, 241, 0.4)'}, transparent 70%)`,
                        zIndex: 1,
                      }}
                    />

                    {/* Main button container */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      style={{ 
                        position: 'relative',
                        zIndex: 2,
                        borderRadius: '50%',
                      }}
                    >
                      {/* Button shadow/glow effect */}
                      <motion.div
                        animate={isPlaying ? {
                          boxShadow: [
                            `0 8px 25px ${isInFadeOut ? 'rgba(245, 158, 11, 0.4)' : 'rgba(99, 102, 241, 0.4)'}, 0 0 20px ${isInFadeOut ? 'rgba(239, 68, 68, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
                            `0 12px 40px ${isInFadeOut ? 'rgba(245, 158, 11, 0.6)' : 'rgba(99, 102, 241, 0.6)'}, 0 0 35px ${isInFadeOut ? 'rgba(239, 68, 68, 0.5)' : 'rgba(236, 72, 153, 0.5)'}`,
                            `0 8px 25px ${isInFadeOut ? 'rgba(245, 158, 11, 0.4)' : 'rgba(99, 102, 241, 0.4)'}, 0 0 20px ${isInFadeOut ? 'rgba(239, 68, 68, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
                          ]
                        } : {
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: isPlaying ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        style={{ borderRadius: '50%' }}
                      >
                        <IconButton
                          onClick={onTogglePlayback}
                          sx={{
                            background: isInFadeOut 
                              ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
                              : 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            color: 'white',
                            width: 70,
                            height: 70,
                            borderRadius: '50%',
                            position: 'relative',
                            overflow: 'hidden',
                            border: isPlaying 
                              ? `2px solid ${isInFadeOut ? 'rgba(245, 158, 11, 0.6)' : 'rgba(99, 102, 241, 0.6)'}` 
                              : '2px solid transparent',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              background: isInFadeOut 
                                ? 'linear-gradient(135deg, #fbbf24 0%, #f87171 100%)'
                                : 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)',
                              transform: 'scale(1.02)',
                              border: `2px solid ${isInFadeOut ? 'rgba(245, 158, 11, 0.8)' : 'rgba(99, 102, 241, 0.8)'}`,
                            },
                            '&:active': {
                              transform: 'scale(0.95)',
                            },
                            // Shimmer effect for playing state
                            '&::before': isPlaying ? {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
                              borderRadius: '50%',
                              animation: 'playButtonShimmer 3s ease-in-out infinite',
                              '@keyframes playButtonShimmer': {
                                '0%': { 
                                  transform: 'translateX(-100%) translateY(-100%) rotate(-45deg)',
                                  opacity: 0,
                                },
                                '50%': { 
                                  opacity: 1,
                                },
                                '100%': { 
                                  transform: 'translateX(100%) translateY(100%) rotate(-45deg)',
                                  opacity: 0,
                                },
                              },
                            } : {},
                            // Inner glow for playing state
                            '&::after': isPlaying ? {
                              content: '""',
                              position: 'absolute',
                              top: '3px',
                              left: '3px',
                              right: '3px',
                              bottom: '3px',
                              borderRadius: '50%',
                              background: `radial-gradient(circle, transparent 40%, ${isInFadeOut ? 'rgba(245, 158, 11, 0.15)' : 'rgba(99, 102, 241, 0.15)'} 100%)`,
                              pointerEvents: 'none',
                            } : {},
                          }}
                        >
                          {/* Icon container with smooth scale animation */}
                          <motion.div
                            animate={isPlaying ? {
                              scale: [1, 1.15, 1],
                            } : { scale: 1 }}
                            transition={{
                              duration: 1.5,
                              repeat: isPlaying ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              zIndex: 3,
                            }}
                          >
                            {/* Icon glow effect */}
                            <motion.div
                              animate={isPlaying ? {
                                filter: [
                                  `drop-shadow(0 0 8px ${isInFadeOut ? '#f59e0b' : '#6366f1'})`,
                                  `drop-shadow(0 0 15px ${isInFadeOut ? '#ef4444' : '#ec4899'})`,
                                  `drop-shadow(0 0 8px ${isInFadeOut ? '#f59e0b' : '#6366f1'})`,
                                ],
                              } : {
                                filter: 'drop-shadow(0 0 0px transparent)',
                              }}
                              transition={{
                                duration: 2,
                                repeat: isPlaying ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                            >
                              {isPlaying ? 
                                <Pause sx={{ fontSize: '2.2rem', fontWeight: 'bold' }} /> : 
                                <PlayArrow sx={{ fontSize: '2.2rem', fontWeight: 'bold', marginLeft: '2px' }} />
                              }
                            </motion.div>
                          </motion.div>
                        </IconButton>
                      </motion.div>
                    </motion.div>                    {/* Sound wave indicators around the button when playing */}
                    {isPlaying && (
                      <>
                        {/* Existing expanding rings */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0, 0.4, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut",
                            }}
                            style={{
                              position: 'absolute',
                              width: `${100 + i * 15}px`,
                              height: `${100 + i * 15}px`,
                              border: `1px solid ${isInFadeOut ? 'rgba(245, 158, 11, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                              borderRadius: '50%',
                              zIndex: 0,
                            }}
                          />
                        ))}
                        
                        {/* Flowing horizontal wave lines */}
                        <motion.div
                          variants={flowingWaveVariants}
                          animate="wave1"
                          style={{
                            position: 'absolute',
                            top: '30%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '4px',
                            height: '40px',
                            background: `linear-gradient(180deg, transparent, ${isInFadeOut ? '#f59e0b' : '#6366f1'}, transparent)`,
                            borderRadius: '2px',
                            zIndex: -1,
                          }}
                        />
                        <motion.div
                          variants={flowingWaveVariants}
                          animate="wave2"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '4px',
                            height: '60px',
                            background: `linear-gradient(180deg, transparent, ${isInFadeOut ? '#ef4444' : '#ec4899'}, transparent)`,
                            borderRadius: '2px',
                            zIndex: -1,
                          }}
                        />
                        <motion.div
                          variants={flowingWaveVariants}
                          animate="wave3"
                          style={{
                            position: 'absolute',
                            top: '70%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '4px',
                            height: '35px',
                            background: `linear-gradient(180deg, transparent, ${isInFadeOut ? '#dc2626' : '#8b5cf6'}, transparent)`,
                            borderRadius: '2px',
                            zIndex: -1,
                          }}
                        />
                      </>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>      {/* Mini Floating Icon */}
      <AnimatePresence>
        {showMiniIcon && isPlaying && (
          <motion.div
            variants={miniIconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 1000,
            }}
          >            {/* Enhanced rhythmic wave rings */}
            <motion.div
              variants={waveRingVariants}
              animate="wave1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '32px',
                border: '3px solid #6366f1',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(0.5px)',
              }}
            />
            
            {/* Flowing wave lines moving across the icon */}
            <motion.div
              variants={flowingWaveVariants}
              animate="wave1"
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '2px',
                height: '20px',
                background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
                borderRadius: '2px',
                zIndex: -1,
              }}
            />
            <motion.div
              variants={flowingWaveVariants}
              animate="wave2"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '2px',
                height: '30px',
                background: 'linear-gradient(90deg, transparent, #ec4899, transparent)',
                borderRadius: '2px',
                zIndex: -1,
              }}
            />
            <motion.div
              variants={flowingWaveVariants}
              animate="wave3"
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '2px',
                height: '16px',
                background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
                borderRadius: '2px',
                zIndex: -1,
              }}
            />

            {/* Rhythmic expanding circles */}
            <motion.div
              variants={rhythmicCircleVariants}
              animate="circle1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '50%',
                zIndex: -2,
              }}
            />
            <motion.div
              variants={rhythmicCircleVariants}
              animate="circle2"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '15px',
                height: '15px',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                borderRadius: '50%',
                zIndex: -3,
              }}
            />
            <motion.div
              variants={rhythmicCircleVariants}
              animate="circle3"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                borderRadius: '50%',
                zIndex: -4,
              }}
            />

            {/* Rhythmic pulse backgrounds */}
            <motion.div
              variants={rhythmicPulse}
              animate="beat1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)',
                borderRadius: '50%',
                zIndex: -1,
              }}
            />
            <motion.div
              variants={rhythmicPulse}
              animate="beat2"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent 70%)',
                borderRadius: '50%',
                zIndex: -2,
              }}
            />
            <motion.div
              variants={rhythmicPulse}
              animate="beat3"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
                borderRadius: '50%',
                zIndex: -3,
              }}
            />            <Fab
              onClick={handleMiniIconClick}
              sx={{
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #8b5cf6 100%)',
                color: 'white',
                width: 72,
                height: 72,
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                border: '3px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #f472b6 50%, #a855f7 100%)',
                  transform: 'scale(1.15) rotate(5deg)',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.6), 0 0 30px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                },
                '&:active': {
                  transform: 'scale(1.05)',
                },
                boxShadow: `
                  0 12px 30px rgba(99, 102, 241, 0.5),
                  0 0 25px rgba(236, 72, 153, 0.4),
                  inset 0 2px 10px rgba(255, 255, 255, 0.1),
                  inset 0 -2px 10px rgba(0, 0, 0, 0.2)
                `,
                animation: 'floatingPulse 3s ease-in-out infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-3px',
                  left: '-3px',
                  right: '-3px',
                  bottom: '-3px',
                  background: 'conic-gradient(from 0deg, #6366f1, #ec4899, #8b5cf6, #6366f1)',
                  borderRadius: '50%',
                  zIndex: -1,
                  animation: 'rotatingBorder 4s linear infinite',
                  filter: 'blur(6px)',
                  opacity: 0.8,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '2px',
                  left: '2px',
                  right: '2px',
                  bottom: '2px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                  borderRadius: '50%',
                  zIndex: 2,
                  pointerEvents: 'none',
                },
                '@keyframes floatingPulse': {
                  '0%, 100%': { 
                    transform: 'translateY(0px) scale(1)',
                    boxShadow: `
                      0 12px 30px rgba(99, 102, 241, 0.5),
                      0 0 25px rgba(236, 72, 153, 0.4),
                      inset 0 2px 10px rgba(255, 255, 255, 0.1)
                    `
                  },
                  '50%': { 
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: `
                      0 20px 40px rgba(99, 102, 241, 0.6),
                      0 0 35px rgba(236, 72, 153, 0.5),
                      inset 0 2px 15px rgba(255, 255, 255, 0.15)
                    `
                  },
                },
                '@keyframes rotatingBorder': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            >
              {/* Enhanced internal wave animations */}
              <motion.div
                variants={internalWaveVariants}
                animate="wave1"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '24px',
                  height: '24px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(99, 102, 241, 0.2) 50%, transparent 80%)',
                  borderRadius: '50%',
                  zIndex: -1,
                  filter: 'blur(1px)',
                }}
              />
              <motion.div
                variants={internalWaveVariants}
                animate="wave2"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '36px',
                  height: '36px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: -2,
                  filter: 'blur(1.5px)',
                }}
              />
              <motion.div
                variants={internalWaveVariants}
                animate="wave3"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '48px',
                  height: '48px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15), rgba(139, 92, 246, 0.2) 50%, transparent 60%)',
                  borderRadius: '50%',
                  zIndex: -3,
                  filter: 'blur(2px)',
                }}
              />

              {/* Enhanced equalizer bars with gradient */}
              <motion.div
                animate={{
                  scaleY: [0.4, 1.3, 0.7, 1.6, 0.5],
                  opacity: [0.7, 1, 0.8, 1, 0.7],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '28%',
                  transform: 'translate(-50%, -50%)',
                  width: '3px',
                  height: '14px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(99, 102, 241, 0.8) 100%)',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
                }}
              />
              <motion.div
                animate={{
                  scaleY: [0.7, 1.8, 0.3, 2.0, 0.6],
                  opacity: [0.8, 1, 0.6, 1, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '38%',
                  transform: 'translate(-50%, -50%)',
                  width: '3px',
                  height: '18px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(236, 72, 153, 0.9) 100%)',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                }}
              />
              <motion.div
                animate={{
                  scaleY: [1.0, 0.5, 1.8, 0.7, 1.4],
                  opacity: [0.9, 0.7, 1, 0.8, 0.9],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '4px',
                  height: '24px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(139, 92, 246, 1) 100%)',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
                }}
              />
              <motion.div
                animate={{
                  scaleY: [0.6, 1.5, 0.8, 1.2, 0.4],
                  opacity: [0.8, 1, 0.7, 1, 0.8],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '62%',
                  transform: 'translate(-50%, -50%)',
                  width: '3px',
                  height: '16px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(236, 72, 153, 0.8) 100%)',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
                }}
              />
              <motion.div
                animate={{
                  scaleY: [0.9, 0.7, 1.9, 0.5, 1.1],
                  opacity: [0.7, 0.9, 1, 0.6, 0.7],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '72%',
                  transform: 'translate(-50%, -50%)',
                  width: '3px',
                  height: '12px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(99, 102, 241, 0.7) 100%)',
                  borderRadius: '2px',
                  zIndex: 0,
                  boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
                }}
              />

              {/* Enhanced icon with glow effect */}
              <motion.div
                variants={hipHopPulse}
                animate="playing"
                style={{ 
                  position: 'relative',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  animate={{
                    filter: [
                      'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
                      'drop-shadow(0 0 15px rgba(99, 102, 241, 0.9))',
                      'drop-shadow(0 0 12px rgba(236, 72, 153, 0.8))',
                      'drop-shadow(0 0 15px rgba(139, 92, 246, 0.9))',
                      'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))',
                    ],
                    scale: [1, 1.1, 1.05, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GraphicEq sx={{ 
                    fontSize: '1.8rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  }} />
                </motion.div>
              </motion.div>

              {/* Particle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    x: [0, (i - 2.5) * 20],
                    y: [0, -15 - i * 3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '3px',
                    height: '3px',
                    background: `linear-gradient(45deg, ${
                      i % 3 === 0 ? '#6366f1' : 
                      i % 3 === 1 ? '#ec4899' : '#8b5cf6'
                    }, transparent)`,
                    borderRadius: '50%',
                    zIndex: 1,
                  }}
                />
              ))}
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlayingCard;
