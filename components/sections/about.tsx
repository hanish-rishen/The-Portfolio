'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fade-in"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a creative developer with a passion for building beautiful, 
              interactive web experiences. With expertise in modern web technologies 
              and a keen eye for design, I create digital solutions that are both 
              functional and visually compelling.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              My approach combines technical excellence with creative innovation, 
              ensuring each project not only meets but exceeds expectations.
            </p>
            <Button className="gap-2">
              Download Resume
              <Download size={16} />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: "Web Development", value: "5+ Years" },
              { title: "UI/UX Design", value: "50+ Projects" },
              { title: "Client Satisfaction", value: "100%" },
              { title: "Countries", value: "10+" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}