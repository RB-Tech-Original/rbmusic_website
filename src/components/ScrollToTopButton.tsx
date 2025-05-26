import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useScrollTrigger, useTheme } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ScrollToTopButton: React.FC = () => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);
  
  // Use MUI's useScrollTrigger for better performance
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setShowButton(trigger);
  }, [trigger]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={showButton}>
      <motion.div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={handleClick}
          size="medium"
          sx={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #f43f5e 100%)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.25)',
            '&:hover': {
              background: 'linear-gradient(135deg, #2563eb 0%, #e11d48 100%)',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
            },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </motion.div>
    </Zoom>
  );
};

export default ScrollToTopButton;
