import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SEOComponent from '../components/SEOComponent';
import Hero from '../components/Hero';
import About from '../components/About';
import Music from '../components/Music';
import { fadeInUp } from '../utils/animations';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOComponent 
        includeMusicianSchema={true}
        includeWebsiteSchema={true}
      />
      
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <Box sx={{ minHeight: '100vh' }}>
          <Hero />
          <About />
          <Music />
        </Box>
      </motion.div>
    </>
  );
};

export default HomePage;
