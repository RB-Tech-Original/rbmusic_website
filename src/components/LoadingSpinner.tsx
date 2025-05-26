import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 40,
  color = 'primary'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          gap: 2,
        }}
      >
        <CircularProgress 
          size={size} 
          color={color === 'primary' ? 'primary' : 'secondary'} 
          sx={{ 
            color: color !== 'primary' && color !== 'secondary' ? color : undefined,
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            }
          }}
        />
        {message && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mt: 1, 
              fontWeight: 500,
              animation: 'pulse 1.5s infinite ease-in-out',
              '@keyframes pulse': {
                '0%': { opacity: 0.6 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.6 },
              }
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
};

export default LoadingSpinner;
