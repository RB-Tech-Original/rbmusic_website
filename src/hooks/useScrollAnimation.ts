import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: 0.1,
    once: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return [ref, controls];
};
