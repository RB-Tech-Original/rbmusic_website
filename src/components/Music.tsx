import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,  Card,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  List,
  ListItem,
  // ListItemIcon, // Commented out since not currently used
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  MusicNote,
  TrendingUp,
  Star,
  // PlayArrow, // Removed as we're simplifying the song view
  ExpandMore,
  ExpandLess,
  AccessTime,
  Psychology,
  AutoAwesome,
  SmartToy,
  Equalizer,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { Album } from '../types/album';
import albumService from '../services/albumService';


const Music: React.FC = () => {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null);
  const albums: Album[] = albumService.getAllAlbums();

  const toggleAlbumExpansion = (albumId: string) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };
  return (
    <Box
      id="music"
      sx={{
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.95) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '60%',
          height: '40%',
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00f5ff 0%, #6366f1 25%, #ec4899 50%, #8b5cf6 75%, #00f5ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                animation: 'gradient 3s ease infinite',
                '@keyframes gradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '4px',
                  background: 'linear-gradient(135deg, #00f5ff 0%, #ec4899 100%)',
                  borderRadius: '2px',
                  opacity: 0.8,
                }
              }}
            >
              AI Music Collection
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: 800,
                mx: 'auto',
                fontSize: '1.3rem',
                lineHeight: 1.6,
                fontWeight: 400,
                mb: 2,
              }}
            >
              🤖 Experience the future of music creation - where artificial intelligence meets authentic storytelling
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#00f5ff',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: '0 0 15px rgba(0, 245, 255, 0.3)',
              }}
            >
              First AI Song Producer • Revolutionary Sound
            </Typography>
          </Box>
        </motion.div>        {/* Featured Albums */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ mb: 10 }}>            <Typography
              variant="h3"
              component="h3"
              sx={{ 
                mb: 6, 
                color: 'white', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center',
                position: 'relative',
                '&::before': {
                  content: '"🎵"',
                  position: 'absolute',
                  left: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '2rem',
                  opacity: 0.3,
                },
                '&::after': {
                  content: '"🤖"',
                  position: 'absolute',
                  right: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '2rem',
                  opacity: 0.3,
                },
              }}
            >
              AI-Generated Albums
            </Typography>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >              <Grid container spacing={4}>
                {albums.map((album, index) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={album.title}>
                    <motion.div variants={staggerItem}>
                      <Card
                        sx={{
                          background: 'linear-gradient(145deg, rgba(26, 26, 46, 0.6) 0%, rgba(15, 15, 35, 0.8) 100%)',
                          backdropFilter: 'blur(25px)',
                          border: album.featured 
                            ? `2px solid ${album.color}` 
                            : '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '28px',                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                          height: 'auto', // Changed from fixed height to auto
                          minHeight: '720px', // Added minimum height for consistency
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: album.featured 
                            ? `0 20px 40px ${album.color}20, 0 4px 12px rgba(0, 0, 0, 0.3)`
                            : '0 8px 32px rgba(0, 0, 0, 0.3)',
                          '&:hover': {
                            transform: 'translateY(-12px) scale(1.03)',
                            boxShadow: `0 40px 80px ${album.color}30, 0 20px 40px rgba(0, 0, 0, 0.4)`,
                            border: `2px solid ${album.color}`,
                            '& .album-media': {
                              transform: 'scale(1.1)',
                            },
                            '& .album-overlay': {
                              opacity: 1,
                            },
                            '& .featured-badge': {
                              transform: 'scale(1.1)',
                            }
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${album.color}08 0%, transparent 50%, ${album.color}05 100%)`,
                            opacity: album.featured ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)',
                            pointerEvents: 'none',
                          }
                        }}
                      >{album.featured && (
                          <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Chip
                              icon={<SmartToy sx={{ fontSize: '0.8rem !important' }} />}
                              label={album.status === 'coming-soon' ? 'Coming Soon' : 'AI Generated'}
                              sx={{
                                fontWeight: 600,
                                background: album.status === 'coming-soon' 
                                  ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                                  : 'linear-gradient(135deg, #00f5ff 0%, #0ea5e9 100%)',
                                color: 'white',
                                border: 'none',
                                fontSize: '0.7rem',
                                height: '24px',
                                '& .MuiChip-label': {
                                  px: 1,
                                },
                                '& .MuiChip-icon': {
                                  fontSize: '0.8rem',
                                },
                                animation: 'aiGlow 2s ease-in-out infinite alternate',
                                '@keyframes aiGlow': {
                                  '0%': { 
                                    boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)',
                                  },
                                  '100%': { 
                                    boxShadow: '0 0 20px rgba(0, 245, 255, 0.6)',
                                  },
                                },
                              }}
                            />
                          </Box>
                        )}
                          <CardMedia
                          className="album-media"
                          sx={{
                            height: 260,
                            background: album.image 
                              ? `url(${album.image})` 
                              : `linear-gradient(135deg, ${album.color}20 0%, ${album.color}40 100%)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'transform 0.5s ease',
                            '&::before': album.image ? {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                            } : {
                              content: '"♫"',
                              fontSize: '4rem',
                              color: `${album.color}60`,
                              position: 'absolute',
                              opacity: 0.4,
                              animation: 'float 3s ease-in-out infinite',
                              '@keyframes float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-10px)' },
                              }
                            },
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: album.image 
                                ? 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)'
                                : `radial-gradient(circle at center, transparent 30%, ${album.color}08 70%)`,
                            }
                          }}
                        >
                          {!album.image && (
                            <Box
                              sx={{
                                position: 'relative',
                                zIndex: 1,
                                textAlign: 'center',
                                color: 'white',
                              }}
                            >
                              <MusicNote sx={{ fontSize: '3rem', mb: 1, opacity: 0.8 }} />
                              <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9 }}>
                                Album Cover
                              </Typography>
                            </Box>
                          )}
                        </CardMedia>
                        
                        <CardContent sx={{ 
                          p: 3, 
                          position: 'relative', 
                          zIndex: 1,
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <Box sx={{ mb: 2 }}>
                            <Typography 
                              variant="h5" 
                              component="h4" 
                              sx={{ 
                                mb: 1, 
                                fontWeight: 700,
                                color: 'white',
                                fontSize: '1.4rem',
                              }}
                            >
                              {album.title}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)', 
                                mb: 1,
                                fontSize: '1rem',
                              }}
                            >
                              {album.year} • {album.genre} • {album.tracks} tracks
                            </Typography>
                          </Box>                          {/* AI Features */}
                          <Box sx={{ mb: 3, flex: '0 0 auto' }}>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: '#00f5ff', 
                                fontWeight: 700, 
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                              }}
                            >
                              <SmartToy sx={{ fontSize: '1rem' }} />
                              AI Features
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                              {album.aiFeatures?.slice(0, 3).map((feature, index) => (
                                <Chip
                                  key={index}
                                  label={feature}
                                  size="small"
                                  sx={{
                                    background: 'rgba(0, 245, 255, 0.12)',
                                    border: '1px solid rgba(0, 245, 255, 0.25)',
                                    color: '#00f5ff',
                                    fontSize: '0.7rem',
                                    height: '22px',
                                    fontWeight: 600,
                                    '&:hover': {
                                      background: 'rgba(0, 245, 255, 0.2)',
                                      transform: 'translateY(-1px)',
                                      boxShadow: '0 4px 12px rgba(0, 245, 255, 0.2)',
                                    },
                                    transition: 'all 0.3s ease',
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <TrendingUp sx={{ fontSize: '1rem', color: album.color }} />
                              <Typography variant="body2" sx={{ color: album.color, fontWeight: 600 }}>
                                {album.streams}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Star sx={{ fontSize: '1rem', color: '#fbbf24' }} />
                              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 600 }}>
                                {album.rating || 'N/A'}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Track List Expand Button */}
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <IconButton
                              onClick={() => toggleAlbumExpansion(album.id)}
                              sx={{
                                color: album.color,
                                background: `${album.color}15`,
                                borderRadius: '12px',
                                px: 2,
                                py: 1,
                                '&:hover': {
                                  background: `${album.color}25`,
                                  transform: 'scale(1.05)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <MusicNote sx={{ fontSize: '1rem', mr: 1 }} />
                              <Typography variant="body2" sx={{ fontWeight: 600, mr: 1 }}>
                                View Tracks
                              </Typography>
                              {expandedAlbum === album.id ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                          </Box>                          {/* Track List - Simplified */}
                          <Collapse in={expandedAlbum === album.id}>
                            <Box 
                              sx={{ 
                                mt: 2, 
                                p: 2, 
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderRadius: '12px',
                                border: `1px solid rgba(255, 255, 255, 0.1)`,
                              }}
                            >
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  color: album.color, 
                                  fontWeight: 700, 
                                  mb: 2,
                                  textAlign: 'center',
                                  fontSize: '0.95rem',
                                  textTransform: 'uppercase',
                                  letterSpacing: '1px',
                                }}
                              >                                Track Listing
                              </Typography>
                              {album.trackList.length > 5 && (
                                <Typography
                                  variant="caption"
                                  sx={{
                                    display: 'block',
                                    textAlign: 'center',
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontSize: '0.75rem',
                                    mb: 1,
                                  }}
                                >
                                  All {album.tracks} tracks shown
                                </Typography>
                              )}
                              <List sx={{ 
                                p: 0,
                                maxHeight: '300px',
                                overflowY: 'auto',
                                '&::-webkit-scrollbar': {
                                  width: '6px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  borderRadius: '3px',
                                },
                                '&::-webkit-scrollbar-track': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                  borderRadius: '3px',
                                }
                              }}>
                                {album.trackList.map((track, trackIndex) => (                                  <ListItem
                                    key={trackIndex}
                                    sx={{
                                      py: 0.8, // Reduced vertical padding
                                      px: 2,
                                      borderRadius: '8px',
                                      mb: 0.8, // Reduced margin
                                      background: track.featured ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                                      border: track.featured ? `1px solid ${album.color}30` : '1px solid transparent',
                                    }}
                                  >                                    <Box
                                      sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        background: track.featured 
                                          ? album.color
                                          : 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: track.featured ? 'white' : 'rgba(255, 255, 255, 0.6)',
                                        mr: 2,
                                        flexShrink: 0,
                                      }}
                                    >
                                      {trackIndex + 1}
                                    </Box>
                                      <ListItemText
                                      primary={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                          <Typography
                                            variant="body2"                                            sx={{
                                              color: track.featured ? 'white' : 'rgba(255, 255, 255, 0.8)',
                                              fontWeight: track.featured ? 600 : 400,
                                              fontSize: '0.9rem',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                              whiteSpace: 'nowrap',
                                              maxWidth: '200px', // Increased from 150px for better readability
                                            }}
                                          >
                                            {track.title}
                                          </Typography>
                                          {track.featured && (
                                            <Chip
                                              label="Featured"
                                              size="small"
                                              sx={{
                                                height: '18px',
                                                fontSize: '0.7rem',
                                                background: album.color,
                                                color: 'white',
                                                fontWeight: 600,
                                              }}
                                            />
                                          )}
                                        </Box>
                                      }
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                      <AccessTime sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }} />
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          color: track.duration ? 'rgba(255, 255, 255, 0.5)' : '#00f5ff',
                                          fontSize: '0.8rem',
                                          fontWeight: 500,
                                          fontFamily: 'monospace',
                                        }}
                                      >
                                        {track.duration || 'Coming Soon'}
                                      </Typography>
                                    </Box>
                                  </ListItem>
                                ))}
                              </List>
                            </Box>
                          </Collapse>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </motion.div>        {/* Latest Singles */}

        {/* AI Innovation Showcase */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box 
            sx={{ 
              mt: 12,
              p: 6,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.05) 0%, rgba(99, 102, 241, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
              border: '1px solid rgba(0, 245, 255, 0.2)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 245, 255, 0.02) 2px, rgba(0, 245, 255, 0.02) 4px)',
                pointerEvents: 'none',
              }
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00f5ff 0%, #6366f1 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                🚀 Revolutionary AI Music
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Experience the future of music creation where artificial intelligence meets human emotion. 
                Every beat, every lyric, every melody crafted by cutting-edge AI technology.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 4 }}>
                {[
                  { icon: <Psychology />, label: 'Neural Networks', desc: 'Deep learning composition' },
                  { icon: <AutoAwesome />, label: 'Smart Lyrics', desc: 'AI-generated storytelling' },
                  { icon: <Equalizer />, label: 'Adaptive Mixing', desc: 'Intelligent audio processing' },
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      minWidth: '180px',
                      '&:hover': {
                        background: 'rgba(0, 245, 255, 0.1)',
                        border: '1px solid rgba(0, 245, 255, 0.3)',
                        transform: 'translateY(-5px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ color: '#00f5ff', fontSize: '2.5rem', mb: 1 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                      {feature.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: '#00f5ff',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  textShadow: '0 0 15px rgba(0, 245, 255, 0.3)',
                }}
              >
                The First AI Song Producer in History
              </Typography>
            </Box>
          </Box>
        </motion.div>

       {/* Enhanced Call to Action */}
      </Container>
    </Box>
  );
};

export default Music;
