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
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: { 
      y: -3,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };  const drawer = (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <Box sx={{ 
        width: 300, 
        pt: 2,
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.98) 0%, rgba(26, 26, 46, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        height: '100vh',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        {/* Mobile Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          pb: 3,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          mb: 2
        }}>          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              src="/LogoRBTECH_new.png"
              alt="RB TECH Music Logo"
              sx={{ 
                width: 40, 
                height: 40,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
              }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              RB MUSIC
            </Typography>
          </Box>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: 'rgba(99, 102, 241, 0.3)',
                transform: 'rotate(90deg)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          <List sx={{ px: 2 }}>
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <motion.div key={item.label} variants={staggerItem}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton 
                      onClick={() => scrollToSection(item.label)}
                      sx={{
                        borderRadius: '16px',
                        p: 2,
                        background: isActive ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)' : 'transparent',
                        border: '1px solid transparent',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          transform: 'translateX(8px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent 
                        sx={{ 
                          mr: 2, 
                          color: isActive ? '#6366f1' : '#a1a1aa',
                          fontSize: '1.5rem'
                        }} 
                      />
                      <ListItemText 
                        primary={item.label} 
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            color: isActive ? '#6366f1' : 'white',
                          }
                        }}
                      />
                      {isActive && (
                        <Chip 
                          label="Active"
                          size="small"
                          sx={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
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
      >
        <AppBar 
          position="fixed" 
          sx={{ 
            background: scrolled 
              ? 'rgba(15, 15, 35, 0.95)' 
              : 'rgba(15, 15, 35, 0.8)',
            backdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease',
            border: scrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
              : '0 4px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1300,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Logo Section */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              style={{ cursor: 'pointer' }}
              onClick={() => scrollToSection('Home')}
            >              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src="/LogoRBTECH_new.png"
                  alt="RB TECH Music Logo"
                  sx={{ 
                    width: { xs: 45, sm: 50 }, 
                    height: { xs: 45, sm: 50 },
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid rgba(99, 102, 241, 0.5)',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                    }
                  }}
                />
                <Typography 
                  variant="h4" 
                  component="div" 
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.5px',
                  }}
                >
                  RB MUSIC
                </Typography>
              </Box>
            </motion.div>            {/* Desktop Navigation */}
            {!isMobile ? (
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.label.toLowerCase();
                    return (
                      <motion.div key={item.label} variants={navItemVariants} whileHover="hover">
                        <Button
                          onClick={() => scrollToSection(item.label)}
                          startIcon={<IconComponent sx={{ fontSize: '1.2rem' }} />}
                          sx={{
                            color: 'white',
                            fontWeight: 600,
                            px: 3,
                            py: 1.5,
                            borderRadius: '12px',
                            position: 'relative',
                            overflow: 'hidden',
                            background: isActive 
                              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)'
                              : 'transparent',
                            border: isActive 
                              ? '1px solid rgba(99, 102, 241, 0.3)'
                              : '1px solid transparent',
                            '&:hover': {
                              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)',
                            },
                            transition: 'all 0.3s ease',
                            '& .MuiButton-startIcon': {
                              marginRight: '8px',
                            }
                          }}
                        >
                          {item.label}
                        </Button>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            ) : (
              /* Mobile Menu Button */
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    width: 48,
                    height: 48,
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                      border: '1px solid rgba(99, 102, 241, 0.5)',
                      boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <MenuIcon />
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
