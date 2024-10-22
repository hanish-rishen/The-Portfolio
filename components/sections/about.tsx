'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import { FaFreeCodeCamp, FaLinux, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { SiKhanacademy, SiCoursera, SiEdx, SiUdacity, SiApache, SiMozilla } from 'react-icons/si';
import { TbAtom, TbBrandGit, TbWorldWww } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const organizations = [
  { name: 'FreeCodeCamp', icon: FaFreeCodeCamp },
  { name: 'Apache Software Foundation', icon: SiApache },
  { name: 'Mozilla', icon: SiMozilla },
  { name: 'Linux Foundation', icon: FaLinux },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Stack Overflow', icon: FaStackOverflow },
  { name: 'Khan Academy', icon: SiKhanacademy },
  { name: 'Coursera', icon: SiCoursera },
  { name: 'edX', icon: SiEdx },
  { name: 'Udacity', icon: SiUdacity },
  { name: 'MIT OpenCourseWare', icon: TbBrandGit },
  { name: 'W3C', icon: TbWorldWww },
  { name: 'CERN', icon: TbAtom },
  { name: 'IEEE', icon: AiOutlineConsoleSql },
  { name: 'ACM', icon: AiOutlineConsoleSql },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section id="about" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="relative z-10"
          >
            <motion.h2 variants={textVariants} className="text-5xl font-bold mb-6 text-white">About Me</motion.h2>
            <motion.p variants={textVariants} className="text-lg text-gray-300 mb-6">
              I&apos;m a creative developer with a passion for building beautiful, 
              interactive web experiences. With expertise in modern web technologies 
              and a keen eye for design, I create digital solutions that are both 
              functional and visually compelling.
            </motion.p>
            <motion.p variants={textVariants} className="text-lg text-gray-300 mb-8">
              My approach combines technical excellence with creative innovation, 
              ensuring each project not only meets but exceeds expectations.
            </motion.p>
            <motion.div variants={textVariants}>
              <Button className="gap-2">
                Download Resume
                <Download size={16} />
              </Button>
            </motion.div>
          </motion.div>
          <div className="relative flex justify-center">
            <motion.div
              className="absolute inset-0 bg-black opacity-20 blur-3xl"
              style={{ y }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <Marquee className="text-white">
            {organizations.map((org, index) => (
              <div key={index} className="mx-4 text-lg font-semibold flex items-center">
                {org.icon ? <org.icon className="mr-2" /> : <span className="mr-2">🏛️</span>}
                {org.name}
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
