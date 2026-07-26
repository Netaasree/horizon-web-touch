import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = ['Full Stack Developer', 'Problem Solver', 'AI Enthusiast'];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 16 } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(230_70%_20%/0.9),transparent_60%),radial-gradient(ellipse_at_bottom_right,hsl(270_70%_25%/0.8),transparent_60%),radial-gradient(ellipse_at_center,hsl(210_80%_15%/0.7),transparent_70%)]" />
        {[
          { c: 'bg-blue-500/25', s: 'w-[28rem] h-[28rem]', pos: 'top-[10%] left-[8%]' },
          { c: 'bg-purple-500/25', s: 'w-[32rem] h-[32rem]', pos: 'top-[30%] right-[5%]' },
          { c: 'bg-cyan-400/20', s: 'w-[22rem] h-[22rem]', pos: 'bottom-[8%] left-[25%]' },
        ].map((o, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${o.c} ${o.s} ${o.pos}`}
            animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 14 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.p variants={item} className="text-lightblue-400 font-mono text-sm sm:text-base mb-4 tracking-wider">
            {'>'} Hello world, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient whitespace-nowrap">Bhimaraju</span>
            <br />
            <span className="text-gradient-lightblue">Netaasree</span>
          </motion.h1>

          <motion.div variants={item} className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12">
            <span className="text-muted-foreground mr-2">[</span>
            <TypingEffect texts={roles} />
            <span className="text-muted-foreground ml-2">]</span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting modern web experiences and AI-powered solutions with a focus on clean code and thoughtful design.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-lightblue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-lightblue-500/30"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-white/20 text-foreground font-semibold rounded-xl"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex gap-4 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/Netaasree', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/netaasree-bhimaraju-35261826a/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:bnssrs05@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:text-lightblue-400 transition-colors"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Photo with glow and float */}
        <motion.div variants={item} className="order-1 lg:order-2 flex justify-center">
          <motion.div
            className="relative"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-lightblue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse-slow" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-lightblue-400 via-purple-400 to-pink-400 rounded-full opacity-80" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background/60 shadow-2xl">
              <img
                src="/images/netaimg.jpg"
                alt="Bhimaraju Netaasree portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
