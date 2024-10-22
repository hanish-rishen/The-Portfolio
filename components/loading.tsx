'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.loading-screen', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 2,
      onComplete: () => setIsLoading(false),
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="loading-screen fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto" />
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}