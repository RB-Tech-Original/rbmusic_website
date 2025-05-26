export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Sound wave animation for bars
export const soundWaveAnimation = (index: number) => ({
  animate: {
    height: ['40%', '100%', '60%', '90%', '40%'],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: index * 0.1 // stagger each bar
    }
  }
});

// Individual sound bar animation
export const soundBarVariants = {
  initial: { height: '40%' },
  animate: (i: number) => ({
    height: ['40%', '100%', '60%', '90%', '40%'][i % 5],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      delay: i * 0.1
    }
  })
};

// Enhanced 3D rotation hover effect
export const tilt3DEffect = {
  rest: { 
    rotateX: 0, 
    rotateY: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  },
  hover: (i: number) => ({ 
    rotateX: 10, 
    rotateY: i % 2 === 0 ? 15 : -15,
    scale: 1.05,
    z: 10,
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    }
  })
};

// Spiral animation for particles
export const spiralAnimation = (index: number) => ({
  animate: {
    x: [0, Math.cos(index) * 50, Math.sin(index) * 30, 0],
    y: [0, Math.sin(index) * 50, Math.cos(index) * 30, 0],
    opacity: [0, 1, 0.5, 0],
    scale: [0, 1.2, 0.8, 0],
    transition: {
      duration: 6 + index % 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: index * 0.3
    }
  }
});

// Button press effect
export const buttonPress = {
  initial: { scale: 1, boxShadow: '0px 6px 20px rgba(99, 102, 241, 0.4)' },
  pressed: {
    scale: 0.95,
    boxShadow: '0px 2px 8px rgba(99, 102, 241, 0.2)',
    transition: { 
      duration: 0.1, 
      ease: 'easeIn' 
    }
  },
  released: {
    scale: 1,
    boxShadow: '0px 6px 20px rgba(99, 102, 241, 0.4)',
    transition: { 
      duration: 0.5, 
      type: 'spring', 
      stiffness: 500, 
      damping: 15 
    }
  }
};

// Shine effect for cards and buttons
export const shineEffect = {
  initial: { 
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0) 0%, transparent 0%)' 
  },
  animate: {
    background: [
      'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0) 0%, transparent 0%)',
      'linear-gradient(90deg, transparent 20%, rgba(255, 255, 255, 0.4) 50%, transparent 80%)',
      'linear-gradient(90deg, transparent 100%, rgba(255, 255, 255, 0) 100%, transparent 100%)'
    ],
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

// Enhanced background particle animation
export const enhancedParticleAnimation = (index: number) => ({
  animate: {
    y: [
      Math.random() * -100, 
      Math.random() * -200, 
      Math.random() * -100
    ],
    x: [
      Math.random() * -30, 
      Math.random() * 30, 
      Math.random() * -30
    ],
    rotate: [0, 180, 360],
    opacity: [0, 0.8, 0],
    scale: [0.5, 1.2, 0.5],
    transition: {
      duration: 4 + (index % 3),
      repeat: Infinity,
      ease: 'easeInOut',
      delay: index * 0.2
    }
  }
});

// Scroll-triggered reveal animation
export const scrollReveal = {
  hidden: { opacity: 0, y: 75 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.165, 0.84, 0.44, 1]
    }
  }
};

// Perspective text animation
export const perspectiveText = {
  initial: { 
    opacity: 0,
    rotateX: 90,
    y: 50
  },
  animate: { 
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};
