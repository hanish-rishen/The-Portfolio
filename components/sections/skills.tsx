'use client';

import { motion } from 'framer-motion';
import IconCloud from '@/components/ui/icon-cloud';

const skills = [
  'Frontend Development: React, Next.js, Vue.js',
  'UI/UX Design: Figma, Adobe XD, Sketch',
  'Backend Development: Node.js, Express, Django',
  'AI & Machine Learning: TensorFlow, PyTorch, Scikit-learn',
];

const iconSlugs = [
  'react',
  'nextdotjs',
  'vuedotjs',
  'typescript',
  'javascript',
  'html5',
  'css3',
  'sass',
  'tailwindcss',
  'nodedotjs',
  'express',
  'mongodb',
  'postgresql',
  'python',
  'django',
  'figma',
  'adobexd',
  'sketch',
  'git',
  'github',
  'visualstudiocode',
  'webpack',
  'babel',
  'jest',
  'docker',
  'kubernetes',
  'aws',
  'googlecloud',
  'firebase',
  'vercel',
  'netlify',
  'heroku',
];

const underlineStyles = {
  versatileDeveloper: { borderColor: '#007ACC' }, // TypeScript blue
  seamlessDigitalExperiences: { borderColor: '#61DAFB' }, // React blue
  frontendTechnologies: { borderColor: '#41B883' }, // Vue.js green
  React: { borderColor: '#61DAFB' }, // React blue
  'Vue.js': { borderColor: '#41B883' }, // Vue.js green
  backendFrameworks: { borderColor: '#339933' }, // Node.js green
  'Node.js': { borderColor: '#339933' }, // Node.js green
  Django: { borderColor: '#092E20' }, // Django dark green
  'UI/UX design': { borderColor: '#F24E1E' }, // Figma orange
  Figma: { borderColor: '#F24E1E' }, // Figma orange
  Sketch: { borderColor: '#F7B500' }, // Sketch yellow
  'AI and machine learning': { borderColor: '#FF6F00' }, // TensorFlow orange
  TensorFlow: { borderColor: '#FF6F00' }, // TensorFlow orange
  PyTorch: { borderColor: '#EE4C2C' }, // PyTorch red
  intelligentSystems: { borderColor: '#4285F4' }, // Google Cloud blue
  diverseExpertise: { borderColor: '#FF9900' }, // AWS orange
  robust: { borderColor: '#2496ED' }, // Docker blue
  'user-friendly': { borderColor: '#00C7B7' }, // Netlify teal
  innovativeSolutions: { borderColor: '#764ABC' }, // Redux purple
};

export default function Skills() {
  return (
    <section id="skills" className="py-0 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <IconCloud iconSlugs={iconSlugs} />
          </div>
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-3xl font-bold mb-4"
            >
              Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-lg"
            >
              As a <span className="border-b-2" style={underlineStyles.versatileDeveloper}>versatile developer</span>, I specialize in creating <span className="border-b-2" style={underlineStyles.seamlessDigitalExperiences}>seamless digital experiences</span>. My skill set spans <span className="border-b-2" style={underlineStyles.frontendTechnologies}>frontend technologies</span> like <span className="border-b-2" style={underlineStyles.React}>React</span> and <span className="border-b-2" style={underlineStyles['Vue.js']}>Vue.js</span>, <span className="border-b-2" style={underlineStyles.backendFrameworks}>backend frameworks</span> such as <span className="border-b-2" style={underlineStyles['Node.js']}>Node.js</span> and <span className="border-b-2" style={underlineStyles.Django}>Django</span>, and extends to <span className="border-b-2" style={underlineStyles['UI/UX design']}>UI/UX design</span> with tools like <span className="border-b-2" style={underlineStyles.Figma}>Figma</span> and <span className="border-b-2" style={underlineStyles.Sketch}>Sketch</span>. I&apos;m also well-versed in <span className="border-b-2" style={underlineStyles['AI and machine learning']}>AI and machine learning</span>, utilizing <span className="border-b-2" style={underlineStyles.TensorFlow}>TensorFlow</span> and <span className="border-b-2" style={underlineStyles.PyTorch}>PyTorch</span> to build <span className="border-b-2" style={underlineStyles.intelligentSystems}>intelligent systems</span>. This <span className="border-b-2" style={underlineStyles.diverseExpertise}>diverse expertise</span> allows me to approach projects holistically, ensuring <span className="border-b-2" style={underlineStyles.robust}>robust</span>, <span className="border-b-2" style={underlineStyles['user-friendly']}>user-friendly</span>, and <span className="border-b-2" style={underlineStyles.innovativeSolutions}>innovative solutions</span>.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
