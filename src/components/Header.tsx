import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  MusicNote as MusicIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/animations';
import SoundWave from './SoundWave';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigationItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'About', icon: PersonIcon },
    { label: 'Music', icon: MusicIcon },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about') },
        { id: 'music', element: document.getElementById('music') },
      ].filter(section => section.element);

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: { 
        duration: 0.4, 
        ease: 'easeInOut',
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };  // Define staggered entrance animation for nav items
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const navItemEntranceVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8
      }
    }
  };

    // Animation variants for desktop nav icons
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: [1, 1.3, 1.2], 
      rotate: [0, -15, 15, -8, 0],
      filter: ["brightness(1)", "brightness(1.3)", "brightness(1.1)"],
      transition: {
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 1]
        },
        scale: {
          duration: 0.4,
          times: [0, 0.6, 1],
          ease: [0.19, 1.0, 0.22, 1.0] // Exaggerated ease-out for bounce effect
        },
        filter: {
          duration: 0.4,
          times: [0, 0.5, 1],
          ease: "easeOut"
        }
      }
    }
  };
    // Shimmer effect animation variants
  const drawer = (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 1.2
      }}
    >      <Box sx={{ 
        width: 300, 
        pt: 2,
        background: `
          radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.12) 0%, transparent 50%),
          linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(26, 26, 46, 0.98) 100%)
        `,
        backdropFilter: 'blur(20px)',
        height: '100vh',
        borderRight: '1px solid rgba(59, 130, 246, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.4,
          pointerEvents: 'none',
        },
      }}>
        {/* Mobile Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',          px: 3,
          pb: 3,
          borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
          mb: 2
        }}>          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>            <Avatar
              src="/RB_ROUND.png"
              alt="RB TECH Music Logo"
              sx={{ 
                width: 40, 
                height: 40,
                background: 'transparent',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>          
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MUSIC
              </Typography>
              <SoundWave />
            </Box>
          </Box>          <IconButton 
            onClick={handleDrawerToggle}            sx={{ 
              color: 'white',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              width: 40,
              height: 40,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(244, 63, 94, 0.3) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.5)',
                transform: 'rotate(90deg) scale(1.05)',
                boxShadow: '0 6px 18px rgba(59, 130, 246, 0.25)',
              },
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
          >
            <CloseIcon sx={{ fontSize: '1.3rem' }} />
          </IconButton>
        </Box>        <motion.div 
          variants={staggerContainer} 
          initial="initial" 
          animate="animate"
          transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
        >
          <List sx={{ px: 2 }}>
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <motion.div 
                  key={item.label} 
                  variants={staggerItem}
                  custom={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.1
                    }
                  }}
                  exit={{ 
                    x: -30, 
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      delay: (navigationItems.length - index) * 0.05
                    }
                  }}
                  whileHover={{ 
                    x: 5, 
                    transition: { duration: 0.2 }
                  }}
                >
                  <ListItem disablePadding sx={{ mb: 1 }}>                    <ListItemButton 
                      onClick={() => scrollToSection(item.label)}
                      sx={{
                        borderRadius: '16px',
                        p: 2,                        background: isActive 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)' 
                          : 'rgba(255, 255, 255, 0.03)',
                        border: isActive
                          ? '1px solid rgba(59, 130, 246, 0.5)'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                        backdropFilter: 'blur(8px)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(244, 63, 94, 0.3) 100%)',
                          border: '1px solid rgba(59, 130, 246, 0.4)',
                          transform: 'translateX(8px) translateY(-2px)',
                          boxShadow: '0 6px 16px rgba(59, 130, 246, 0.15)',
                        },
                        '&:active': {
                          transform: 'translateX(4px) translateY(0px)',
                          boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1)',
                        },
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      }}
                    >                      <IconButton 
                        sx={{                          color: isActive ? '#3b82f6' : '#a1a1aa',
                          background: isActive 
                            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)'
                            : 'rgba(255, 255, 255, 0.05)',
                          width: 38,
                          height: 38,
                          borderRadius: '12px',
                          border: isActive
                            ? '1px solid rgba(59, 130, 246, 0.4)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          mr: 2,
                          boxShadow: isActive ? '0 2px 10px rgba(59, 130, 246, 0.2)' : 'none',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {isActive && (
                          <motion.div
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))',
                              zIndex: 0
                            }}
                            animate={{
                              background: [
                                'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))',
                                'linear-gradient(225deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))',
                                'linear-gradient(315deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))',
                                'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))',
                                'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(244, 63, 94, 0.3))'
                              ]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        )}
                        <IconComponent sx={{ 
                          fontSize: '1.5rem',
                          position: 'relative',
                          zIndex: 1
                        }} />
                      </IconButton><ListItemText 
                        primary={item.label} 
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            letterSpacing: '0.5px',
                            color: isActive ? '#3b82f6' : 'white',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -4,
                              left: 0,
                              width: isActive ? '100%' : '0%',
                              height: 2,
                              background: 'linear-gradient(90deg, #3b82f6 0%, #f43f5e 100%)',
                              borderRadius: '2px',
                              transition: 'width 0.4s ease',
                            }
                          }
                        }}
                      />                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            opacity: 1,
                            y: [0, -3, 0, -2, 0]
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 500, 
                            damping: 15,
                            y: {
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <Chip 
                            label="Active"
                            size="small"
                            sx={{
                              background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              height: '24px',
                              backdropFilter: 'blur(8px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                              ml: 1,
                              '& .MuiChip-label': {
                                px: 1,
                                letterSpacing: '0.5px',
                              }
                            }}
                          />
                        </motion.div>
                      )}
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              );
            })}
          </List>
        </motion.div>
      </Box>
    </motion.div>
  );  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? `
                radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.12) 0%, transparent 50%),
                rgba(15, 15, 35, 0.95)
              `
              : `
                radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
                rgba(15, 15, 35, 0.85)
              `,
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease',
            border: scrolled ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(59, 130, 246, 0.1)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: scrolled ? 0.5 : 0.3,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Logo Section */}            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('Home')}
            >              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2
                }}
              >                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [0, -4, 0],
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
                    scale: 1.1,
                    y: -3,
                    filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.6))',
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/RB_ROUND.png"
                    alt="RB TECH Music Logo"
                    sx={{
                      width: { xs: 45, sm: 50 }, 
                      height: { xs: 45, sm: 50 },
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                    }}
                  />
                </motion.div>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: 2,                      background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.5) 50%, rgba(244, 63, 94, 0.5) 100%)',
                      borderRadius: '2px',
                      opacity: scrolled ? 1 : 0,
                      transition: 'opacity 0.4s ease'
                    }
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -1,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                  >                    
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -1,
                      transition: { duration: 0.3, ease: 'easeOut' }
                    }}
                  >                    <Typography 
                      variant="h4" 
                      component="div" 
                      sx={{ 
                        fontWeight: 800,
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.5px',
                        textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      MUSIC
                    </Typography>
                    
                  </motion.div>
                  <SoundWave barCount={6} barWidth={2.5} />
                </Box>
              </Box>
            </motion.div>{/* Desktop Navigation */}            {!isMobile ? (
              <motion.div 
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.label.toLowerCase();
                    return (
                      <motion.div 
                        key={item.label} 
                        variants={navItemEntranceVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >                        <Button
                          onClick={() => scrollToSection(item.label)}
                          sx={{
                            color: isActive ? 'white' : 'rgba(255, 255, 255, 0.85)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            letterSpacing: '0.5px',
                            px: 3,
                            py: 1.5,
                            borderRadius: '14px',
                            position: 'relative',
                            overflow: 'hidden',                            background: isActive 
                              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(244, 63, 94, 0.25) 100%)'
                              : 'rgba(255, 255, 255, 0.03)',
                            border: isActive 
                              ? '1px solid rgba(59, 130, 246, 0.5)'
                              : '1px solid rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(8px)',
                            boxShadow: isActive ? '0 4px 12px rgba(59, 130, 246, 0.15)' : 'none',
                            transformStyle: 'preserve-3d',
                            perspective: '500px',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: isActive ? 0 : '-100%',
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)',
                              opacity: 0.5,
                              transition: 'top 0.4s ease-out',
                            },                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(244, 63, 94, 0.3) 100%)',
                              border: '1px solid rgba(59, 130, 246, 0.5)',
                              transform: 'translateY(-2px) rotateX(5deg) rotateY(-5deg)',
                              boxShadow: '0 6px 20px rgba(59, 130, 246, 0.25)',
                              '&::before': {
                                top: 0,
                              }
                            },
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          }}
                        >
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                          }}>                              <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 30,
                                height: 30,
                                borderRadius: '10px',                                background: isActive 
                                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.7) 0%, rgba(244, 63, 94, 0.7) 100%)'
                                  : 'rgba(255, 255, 255, 0.08)',
                                boxShadow: isActive ? '0 2px 10px rgba(59, 130, 246, 0.3)' : 'none',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                            >                              {/* Shimmer effect overlay */}
                              {isActive && (
                                <motion.div
                                  initial="initial"
                                  animate="animate"
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)',
                                    borderRadius: '8px',
                                    zIndex: 1,
                                    mixBlendMode: 'overlay'
                                  }}
                                />
                              )}
                              <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                                <IconComponent 
                                  sx={{ 
                                    fontSize: '1.2rem',
                                    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.8)',
                                    transition: 'all 0.3s ease',
                                  }} 
                                />
                              </motion.div>
                            </Box>
                            {item.label}                            {isActive && (
                              <motion.div
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  ease: 'easeInOut'
                                }}
                              >
                                <Box sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',                                  background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
                                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
                                  ml: 0.5,
                                }} />
                              </motion.div>
                            )}
                          </Box>
                        </Button>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            ) : (
              /* Mobile Menu Button */              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95, rotate: -5 }}                animate={{
                  boxShadow: mobileOpen 
                    ? ['0px 0px 0px rgba(59, 130, 246, 0)', '0px 0px 15px rgba(59, 130, 246, 0.5)', '0px 0px 0px rgba(59, 130, 246, 0)']
                    : ['0px 0px 0px rgba(59, 130, 246, 0)']
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}                  sx={{ 
                    color: 'white',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(244, 63, 94, 0.2) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    width: 48,
                    height: 48,
                    borderRadius: '14px',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-100%',
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(244, 63, 94, 0.3) 100%)',
                      opacity: 0.7,
                      transition: 'top 0.3s ease-out',
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(244, 63, 94, 0.3) 100%)',
                      border: '1px solid rgba(59, 130, 246, 0.5)',
                      boxShadow: '0 6px 18px rgba(59, 130, 246, 0.2)',
                      '&::before': {
                        top: 0,
                      }                    },
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                >
                  <MenuIcon sx={{ fontSize: '1.6rem' }} />
                </IconButton>
              </motion.div>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
              },
              '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(8px)',
              }
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
