import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  MusicNote,
  TrendingUp,
  Star,
  ExpandMore,
  ExpandLess,
  AccessTime,
  Psychology,
  AutoAwesome,
  SmartToy,
  Equalizer,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';
import { Album } from '../types/album';
import albumService from '../services/albumService';

const Music: React.FC = () => {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null);
  const albums: Album[] = albumService.getAllAlbums();

  const toggleAlbumExpansion = (albumId: string) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };  return (
    <Box
      id="music"
      sx={{
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
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
      </Box>      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
            {/* Chip indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                icon={<AutoAwesome sx={{ fontSize: 16 }} />}
                label="MUSIC COLLECTION"
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
                    color: '#3b82f6',
                  },
                  color: '#3b82f6',
                }}
              />
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                component="h2"
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
                Music Universe
              </Typography>
            </motion.div>

            {/* Description */}
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
                  maxWidth: { xs: '100%', md: '800px' },
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Dive into a revolutionary collection of AI-generated albums that push the 
                boundaries of musical creativity. Each composition represents a unique fusion 
                of artificial intelligence and human emotion.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>{/* Featured Albums */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {albums.map((album, index) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={album.title}>
                    <motion.div 
                      variants={staggerItem}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >                      <Card
                        sx={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '20px',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden',
                          minHeight: '600px',
                          display: 'flex',
                          flexDirection: 'column',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: `0 20px 40px rgba(59, 130, 246, 0.15)`,
                            border: `1px solid rgba(59, 130, 246, 0.3)`,
                            '& .album-media': {
                              transform: 'scale(1.05)',
                            },
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 50%, rgba(244, 63, 94, 0.02) 100%)`,
                            pointerEvents: 'none',
                          }
                        }}
                      >
                        {album.featured && (
                          <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
                            <Chip
                              icon={<AutoAwesome sx={{ fontSize: '0.8rem !important' }} />}
                              label={album.status === 'coming-soon' ? 'Coming Soon' : 'Featured'}
                              sx={{
                                fontWeight: 600,
                                background: album.status === 'coming-soon' 
                                  ? 'rgba(251, 191, 36, 0.9)'
                                  : 'rgba(59, 130, 246, 0.9)',
                                color: 'white',
                                border: 'none',
                                fontSize: '0.7rem',
                                height: '28px',
                                backdropFilter: 'blur(10px)',
                                '& .MuiChip-label': {
                                  px: 1.5,
                                },
                              }}
                            />
                          </Box>
                        )}                        <CardMedia
                          className="album-media"
                          sx={{
                            height: 240,
                            background: album.image 
                              ? `url(${album.image})` 
                              : `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(244, 63, 94, 0.1) 100%)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'transform 0.4s ease',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: album.image 
                                ? 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 100%)'
                                : 'transparent',
                            },
                          }}
                        >
                          {!album.image && (
                            <Box
                              sx={{
                                position: 'relative',
                                zIndex: 1,
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 0.6)',
                              }}
                            >
                              <MusicNote sx={{ fontSize: '3rem', mb: 1, opacity: 0.6 }} />
                              <Typography variant="body2" sx={{ fontWeight: 500, opacity: 0.8 }}>
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
                                color: 'text.primary',
                                fontSize: '1.3rem',
                              }}
                            >
                              {album.title}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'text.secondary', 
                                mb: 2,
                                fontSize: '0.95rem',
                              }}
                            >
                              {album.year} • {album.genre} • {album.tracks} tracks
                            </Typography>
                          </Box>

                          {/* AI Features */}
                          <Box sx={{ mb: 3, flex: '0 0 auto' }}>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: 'primary.main', 
                                fontWeight: 600, 
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
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                    color: 'primary.main',
                                    fontSize: '0.7rem',
                                    height: '24px',
                                    fontWeight: 500,
                                    '&:hover': {
                                      background: 'rgba(59, 130, 246, 0.15)',
                                      transform: 'translateY(-1px)',
                                    },
                                    transition: 'all 0.2s ease',
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <TrendingUp sx={{ fontSize: '1rem', color: 'primary.main' }} />
                              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                                {album.streams}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Star sx={{ fontSize: '1rem', color: '#fbbf24' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                {album.rating || 'N/A'}
                              </Typography>
                            </Box>
                          </Box>                          {/* Track List Expand Button */}
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <IconButton
                              onClick={() => toggleAlbumExpansion(album.id)}
                              sx={{
                                color: 'primary.main',
                                background: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '14px',
                                px: 2.5,
                                py: 1.2,
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                '&:hover': {
                                  background: 'rgba(59, 130, 246, 0.2)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <MusicNote sx={{ fontSize: '1rem', mr: 1 }} />
                              <Typography variant="body2" sx={{ fontWeight: 600, mr: 1, fontSize: '0.9rem' }}>
                                View Tracks
                              </Typography>
                              {expandedAlbum === album.id ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                          </Box>

                          {/* Track List - Simplified */}
                          <Collapse in={expandedAlbum === album.id}>
                            <Box 
                              sx={{ 
                                mt: 2, 
                                p: 2, 
                                background: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '12px',
                                border: `1px solid rgba(255, 255, 255, 0.1)`,
                              }}
                            >
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  color: 'primary.main', 
                                  fontWeight: 700, 
                                  mb: 2,
                                  textAlign: 'center',
                                  fontSize: '0.9rem',
                                  textTransform: 'uppercase',
                                  letterSpacing: '1px',
                                }}
                              >
                                Track Listing
                              </Typography>
                              <List sx={{ 
                                p: 0,
                                maxHeight: '300px',
                                overflowY: 'auto',
                                '&::-webkit-scrollbar': {
                                  width: '6px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                  backgroundColor: 'rgba(59, 130, 246, 0.3)',
                                  borderRadius: '3px',
                                },
                                '&::-webkit-scrollbar-track': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                  borderRadius: '3px',
                                }
                              }}>
                                {album.trackList.map((track, trackIndex) => (
                                  <ListItem
                                    key={trackIndex}
                                    sx={{
                                      py: 0.8,
                                      px: 2,
                                      borderRadius: '8px',
                                      mb: 0.8,
                                      background: track.featured ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                      border: track.featured ? `1px solid rgba(59, 130, 246, 0.2)` : '1px solid transparent',
                                      '&:hover': {
                                        background: 'rgba(59, 130, 246, 0.05)',
                                      },
                                      transition: 'all 0.2s ease',
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        background: track.featured 
                                          ? 'primary.main'
                                          : 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: track.featured ? 'white' : 'text.secondary',
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
                                            variant="body2"
                                            sx={{
                                              color: track.featured ? 'text.primary' : 'text.secondary',
                                              fontWeight: track.featured ? 600 : 400,
                                              fontSize: '0.9rem',
                                              overflow: 'hidden',
                                              textOverflow: 'ellipsis',
                                              whiteSpace: 'nowrap',
                                              maxWidth: '200px',
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
                                                background: 'primary.main',
                                                color: 'white',
                                                fontWeight: 600,
                                              }}
                                            />
                                          )}
                                        </Box>
                                      }
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                      <AccessTime sx={{ fontSize: '0.8rem', color: 'text.secondary' }} />
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          color: track.duration ? 'text.secondary' : 'primary.main',
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
          </Box>        </motion.div>        {/* AI Innovation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Box 
            sx={{ 
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 6 },
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(244, 63, 94, 0.02) 100%)',
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
                Revolutionary Music Technology
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                Experience the future of music creation where artificial intelligence meets human emotion. 
                Every beat, every lyric, every melody crafted by cutting-edge AI technology.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 4, 
                flexWrap: 'wrap', 
                mb: 4,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center'
              }}>
                {[
                  { icon: <Psychology />, label: 'Neural Networks', desc: 'Deep learning composition' },
                  { icon: <AutoAwesome />, label: 'Smart Lyrics', desc: 'AI-generated storytelling' },
                  { icon: <Equalizer />, label: 'Adaptive Mixing', desc: 'Intelligent audio processing' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        minWidth: '180px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                        '&:hover': {
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 1 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>
                        {feature.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {feature.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                The Future of Music Production
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Music;
