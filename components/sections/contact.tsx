'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" className="min-h-[150px]" />
            <Button className="w-full gap-2">
              Send Message
              <Send size={16} />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}