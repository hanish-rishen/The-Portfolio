'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 fade-in">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              className="fade-in rounded-lg overflow-hidden bg-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-muted-foreground mb-4">
                  Brief project description showcasing the key features and
                  technologies used.
                </p>
                <Button variant="ghost" className="gap-2">
                  View Project
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}