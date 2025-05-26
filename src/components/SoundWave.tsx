import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SoundWaveProps {
  barCount?: number;
  barWidth?: number;
  height?: number;
  margin?: number | string;
  animated?: boolean;
}

const SoundWave: React.FC<SoundWaveProps> = ({ 
  barCount = 5, 
  barWidth = 3, 
  height = 24, 
  margin = 1,
  animated = true
}) => {
  const bars = Array.from({ length: barCount }, (_, i) => i);
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height, mx: margin }}>
      {bars.map((i) => (
        <motion.div
          key={i}
          animate={animated ? {
            height: ['40%', '100%', '60%', '90%', '40%'],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 0.1
            }
          } : undefined}
          style={{
            width: barWidth,
            height: animated ? '60%' : '100%',
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            borderRadius: barWidth,
            opacity: animated ? 1 : 0.2
          }}
        />
      ))}
    </Box>
  );
};

export default SoundWave;
