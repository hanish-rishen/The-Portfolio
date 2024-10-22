'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Briefcase, User, Mail } from 'lucide-react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Set isLoading to false after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600); // Slightly longer than the loader duration

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) return null;

  const navItems = [
    { name: 'Work', icon: Briefcase },
    { name: 'About', icon: User },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="text-xl font-bold">
            Hanish Rishen
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors group"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
