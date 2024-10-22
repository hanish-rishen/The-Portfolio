'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/nav';
import Loading from '@/components/loading';
import Hero from '@/components/sections/hero';
import Work from '@/components/sections/work';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Scroll animations
    gsap.utils.toArray('.fade-in').forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <>
      <Loading />
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}