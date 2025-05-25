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
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  MusicNote,
  TrendingUp,
  Star,
  PlayArrow,
  ExpandMore,
  ExpandLess,
  AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Music: React.FC = () => {
  const [expandedAlbum, setExpandedAlbum] = useState<string | null>(null);

  const albums = [
    {
      id: 'another-worlds-stories',
      title: 'Another Worlds Stories',
      year: '2025',
      genre: 'Hip-Hop • Acoustic',
      tracks: 6,
      image: '/Another_Worlds_Stories_-_Cover.png',
      featured: false,
      description: 'A journey through different realms of storytelling',
      color: '#6366f1',
      streams: '10K+',
      rating: 4.8,
      status: 'released',
      trackList: [
        { title: 'The Last Dawn', duration: '3:47', featured: false},
        { title: 'Here Alone', duration: '3:10', featured:  false},
        { title: 'Here Alone (Calm)', duration: '2:45', featured: false },
        { title: 'Last God', duration: '2:51', featured: false },
        { title: 'World\'s Fate', duration: '2:51', featured: false },
        { title: 'Your Past My Future', duration: '2:53', featured: false },
      ]
    },
    {
      id: 'tomorrows-garden',
      title: "Tomorrow's Garden",
      year: '2025', 
      genre: 'Hip-Hop • Acoustic',
      tracks: 6,
      image: '/Garden.png',
      featured: false,
      description: 'Cultivating hope for the future through music',
      color: '#ec4899',
      streams: '5k+',
      rating: 4.8,
      status: 'released',
      trackList: [
        { title: 'Garden of Secrets', duration: '3:18', featured: false },
        { title: 'The Letter Unfolds', duration: '2:23', featured: false },
        { title: 'Through the Window', duration: '2:28', featured: false },
        { title: 'Garden\'s Trees', duration: '2:44', featured: false },
        { title: 'My Friends Our Moment', duration: '2:48', featured: false },
        { title: 'Gold Memories', duration: '3:14', featured: false },
      ]
    },
  ];

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
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
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
                  width: '120px',
                  height: '4px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                  borderRadius: '2px',
                  opacity: 0.8,
                }
              }}
            >
              Music Collection
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: 700,
                mx: 'auto',
                fontSize: '1.3rem',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Discover the authentic sound of RB MUSIC - where Hip-Hop storytelling meets acoustic soul
            </Typography>
          </Box>
        </motion.div>        {/* Featured Albums */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ 
                mb: 6, 
                color: 'white', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              Featured Albums
            </Typography>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Grid container spacing={4}>
                {albums.map((album, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={album.title}>
                    <motion.div variants={staggerItem}>
                      <Card
                        sx={{
                          background: 'rgba(26, 26, 46, 0.4)',
                          backdropFilter: 'blur(20px)',
                          border: album.featured 
                            ? `2px solid ${album.color}` 
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '24px',
                          transition: 'all 0.4s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          height: '100%',
                          '&:hover': {
                            transform: 'translateY(-15px) scale(1.02)',
                            boxShadow: `0 30px 60px ${album.color}40`,
                            border: `2px solid ${album.color}`,
                            '&::before': {
                              opacity: 1,
                            }
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${album.color}10 0%, transparent 100%)`,
                            opacity: album.featured ? 0.5 : 0,
                            transition: 'opacity 0.3s ease',
                          }
                        }}
                      >                        {album.featured && (
                          <Chip
                            label={album.status === 'coming-soon' ? 'Coming Soon' : 'Featured'}
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              zIndex: 2,
                              fontWeight: 600,
                              background: album.status === 'coming-soon' 
                                ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
                                : `linear-gradient(135deg, ${album.color} 0%, ${album.color}CC 100%)`,
                              color: 'white',
                              border: 'none',
                              '& .MuiChip-label': {
                                px: 2,
                              }
                            }}
                          />
                        )}
                        
                        <CardMedia
                          sx={{
                            height: 280,
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
                            '&::before': album.image ? {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'rgba(0, 0, 0, 0.3)',
                            } : {
                              content: '"♫"',
                              fontSize: '4rem',
                              color: `${album.color}80`,
                              position: 'absolute',
                              opacity: 0.6,
                            },
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: album.image 
                                ? 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)'
                                : `radial-gradient(circle at center, transparent 30%, ${album.color}10 70%)`,
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
                        
                        <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
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
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: '0.9rem',
                                mb: 2,
                              }}
                            >
                              {album.description}
                            </Typography>
                          </Box>                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
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
                          </Box>

                          {/* Track List */}
                          <Collapse in={expandedAlbum === album.id}>
                            <Box 
                              sx={{ 
                                mt: 2, 
                                p: 2, 
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderRadius: '12px',
                                border: `1px solid ${album.color}30`,
                              }}
                            >
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  color: album.color, 
                                  fontWeight: 700, 
                                  mb: 2,
                                  textAlign: 'center',
                                }}
                              >
                                Track Listing
                              </Typography>
                              <List sx={{ p: 0 }}>
                                {album.trackList.map((track, trackIndex) => (
                                  <ListItem
                                    key={trackIndex}
                                    sx={{
                                      py: 1,
                                      px: 2,
                                      borderRadius: '8px',
                                      mb: 1,
                                      background: track.featured ? `${album.color}10` : 'transparent',
                                      border: track.featured ? `1px solid ${album.color}30` : '1px solid transparent',
                                      '&:hover': {
                                        background: `${album.color}15`,
                                        transform: 'translateX(4px)',
                                      },
                                      transition: 'all 0.3s ease',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <ListItemIcon sx={{ minWidth: '40px' }}>
                                      <Box
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          borderRadius: '50%',
                                          background: track.featured 
                                            ? `linear-gradient(135deg, ${album.color} 0%, ${album.color}CC 100%)`
                                            : 'rgba(255, 255, 255, 0.1)',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          fontSize: '0.8rem',
                                          fontWeight: 700,
                                          color: track.featured ? 'white' : 'rgba(255, 255, 255, 0.6)',
                                        }}
                                      >
                                        {track.featured ? <PlayArrow sx={{ fontSize: '0.9rem' }} /> : trackIndex + 1}
                                      </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={
                                        <Typography
                                          variant="body2"
                                          sx={{
                                            color: track.featured ? 'white' : 'rgba(255, 255, 255, 0.8)',
                                            fontWeight: track.featured ? 600 : 400,
                                            fontSize: '0.9rem',
                                          }}
                                        >
                                          {track.title}
                                          {track.featured && (
                                            <Chip
                                              label="Featured"
                                              size="small"
                                              sx={{
                                                ml: 1,
                                                height: '18px',
                                                fontSize: '0.7rem',
                                                background: album.color,
                                                color: 'white',
                                                fontWeight: 600,
                                              }}
                                            />
                                          )}
                                        </Typography>
                                      }
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                      <AccessTime sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }} />
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          color: 'rgba(255, 255, 255, 0.5)',
                                          fontSize: '0.8rem',
                                          fontWeight: 500,
                                        }}
                                      >
                                        {track.duration}
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
        </motion.div>        {/* Latest Singles */}       {/* Enhanced Call to Action */}
      </Container>
    </Box>
  );
};

export default Music;
