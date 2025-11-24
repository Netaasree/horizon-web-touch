import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, Star, Zap } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Problem Solver',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Animated orbs with parallax effect */}
        {[
          { size: 'w-96 h-96', color: 'bg-blue-500/20', delay: 0, x: [-20, 20] },
          { size: 'w-96 h-96', color: 'bg-purple-500/20', delay: 2, x: [20, -20] },
          { size: 'w-96 h-96', color: 'bg-pink-500/20', delay: 4, x: [-15, 15] },
          { size: 'w-64 h-64', color: 'bg-cyan-400/20', delay: 1, x: [10, -10] },
          { size: 'w-48 h-48', color: 'bg-emerald-400/25', delay: 3, x: [-10, 10] },
        ].map((orb, index) => (
          <motion.div
            key={index}
            className={`absolute ${orb.size} ${orb.color} rounded-full blur-3xl`}
            style={{
              top: `${25 + index * 15}%`,
              left: `${20 + index * 10}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: orb.x,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        ))}

        {/* Animated sparkles */}
        {[Sparkles, Star, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/40"
            style={{
              top: `${30 + index * 20}%`,
              left: `${40 + index * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          >
            <Icon size={16 + index * 2} />
          </motion.div>
        ))}
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 relative">
            <motion.span 
              className="text-gradient relative whitespace-nowrap inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Bhimaraju Netaasree
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 h-20 relative">
            <TypingEffect texts={roles} />
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, functional, and user-centered digital experiences
            with modern technologies and creative problem-solving.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.span className="relative z-10">View My Work</motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.7 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 glass border-2 border-white/30 text-foreground font-semibold rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.span className="relative z-10">Get In Touch</motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { href: 'https://github.com/Netaasree', Icon: Github },
              { href: 'https://www.linkedin.com/in/netaasree-bhimaraju-35261826a/', Icon: Linkedin },
              { href: 'mailto:bnssrs05@gmail.com', Icon: Mail },
            ].map(({ href, Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-4 glass rounded-full relative overflow-hidden"
                whileHover={{ scale: 1.25, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Icon size={28} className="relative z-10 group-hover:text-blue-400 transition-colors" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1.5 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        {[0, 2, 4, 6].map((delay, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 border border-blue-400/20 rounded-full"
            style={{
              top: `${-10 + index * 30}%`,
              left: index % 2 === 0 ? '-10%' : 'auto',
              right: index % 2 === 1 ? '-10%' : 'auto',
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: delay * 0.5 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
