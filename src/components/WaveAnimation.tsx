import React from 'react';
import { Box } from '@mui/material';

const WaveAnimation: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '-80px',
        left: 0,
        width: '100%',
        height: '80px',
        overflow: 'hidden',
        lineHeight: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(124% + 1.3px)',
          height: '80px',
          transform: 'rotateY(180deg)',
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="rgba(26, 26, 46, 0.98)"
          fillOpacity="1"
        ></path>
      </svg>
    </Box>
  );
};

export default WaveAnimation;
