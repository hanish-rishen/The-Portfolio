'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const heroTextRef = useRef(null);

  useEffect(() => {
    const splitTypes = document.querySelectorAll('[data-split]');
    splitTypes.forEach((char) => {
      new SplitType(char, {
        types: 'chars,words',
        tagName: 'span',
      });
    });

    const tl = gsap.timeline({ delay: 2 });
    tl.from('[data-split] .char', {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: 'back.out(2)',
      stagger: { amount: 0.5 },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1
            ref={heroTextRef}
            data-split
            className="text-6xl md:text-8xl font-bold leading-tight mb-8"
          >
            Crafting Digital Experiences Through Code
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Creative developer passionate about building beautiful, interactive
            web experiences that push the boundaries of what's possible.
          </p>
          <div className="flex gap-6">
            <Button size="lg" className="gap-2">
              View Work
              <ArrowUpRight size={20} />
            </Button>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}