import { useRef } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ParticleBackground from '@/components/ParticleBackground';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#6E56CF] origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0F] to-[#171719] text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <SmoothScroll>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </SmoothScroll>
    </div>
  );
}

function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Code2 className="w-8 h-8 text-[#6E56CF]" />
          <span className="font-bold text-xl">Satyam</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4"
        >
          <SocialLink href="https://github.com" icon={<Github />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          <SocialLink href="mailto:your@email.com" icon={<Mail />} />
        </motion.div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block mr-4"
          >
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block"
            >
              👋
            </motion.span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block"
          >
            Hi, I'm <span className="bg-gradient-to-r from-[#6E56CF] to-[#00FFA3] text-transparent bg-clip-text">Satyam</span>
          </motion.span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full-stack Developer | Problem Solver | DevOps Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 relative py-6 px-4 md:px-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6E56CF]/10 to-[#00FFA3]/10 rounded-lg backdrop-blur-sm"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20C12 13.3726 17.3726 8 24 8V0C12.9543 0 4 8.95431 4 20H12ZM28 20C28 13.3726 33.3726 8 40 8V0C28.9543 0 20 8.95431 20 20H28Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="4" y1="0" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6E56CF"/>
                  <stop offset="1" stopColor="#00FFA3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-lg md:text-xl font-medium text-white relative z-10">
            "Logic is my language, and innovation is my syntax."
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-[#6E56CF] hover:bg-[#5842b5] text-white transform hover:scale-105 transition-transform"
            onClick={() => scrollTo('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent hover:bg-white/10 transform hover:scale-105 transition-transform text-white"
            onClick={() => scrollTo('contact')}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(110, 86, 207, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle at 70% 70%, rgba(0, 255, 163, 0.15) 0%, transparent 70%)'
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6E56CF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFA3]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center',
        'bg-white/5 hover:bg-white/10 transition-colors',
        'border border-white/10 hover:border-white/20'
      )}
    >
      {icon}
    </motion.a>
  );
}

