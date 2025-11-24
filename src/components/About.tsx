import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Award, Sparkles, FileText, Download } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      color: 'from-lightblue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies',
      color: 'from-sky-500 to-lightblue-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions',
      color: 'from-lightblue-500 to-sky-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute text-lightblue-500/30"
            style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? `${10 + i * 5}%` : 'auto',
              right: i % 2 === 1 ? `${10 + i * 5}%` : 'auto',
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            <Sparkles size={24 + i * 2} />
          </motion.div>
        ))}
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-32 right-20 w-16 h-16 border border-lightblue-500/20 rotate-45"
          animate={{
            y: [-20, 20, -20],
            rotate: [45, 90, 45],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-lightblue">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer and want to create some amazing projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-lightblue-500/20 via-sky-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                animate={{
                  rotate: [3, 6, 3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <div className="relative glass rounded-3xl p-8 group-hover:bg-white/15 transition-all duration-500">
                <div className="w-72 h-72 mx-auto rounded-xl flex items-center justify-center relative overflow-hidden border-4 border-gradient-to-r from-lightblue-400 via-sky-400 to-cyan-400 shadow-2xl shadow-lightblue-500/50">
                  {/* Floating particles on hover */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-${1 + i % 3} h-${1 + i % 3} bg-lightblue-400 rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        top: `${20 + i * 10}%`,
                        left: i % 2 === 0 ? `${10 + i * 5}%` : 'auto',
                        right: i % 2 === 1 ? `${10 + i * 5}%` : 'auto',
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                  
                  {/* Rotating border effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-lightblue-400 via-sky-400 via-cyan-400 to-lightblue-400 bg-clip-border"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <div className="absolute inset-2 rounded-xl bg-background"></div>
                  </motion.div>
                  
                  {/* Glowing pulse ring */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-xl border-4 border-lightblue-400/50 shadow-lg shadow-lightblue-400/50"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>

                  {/* Holographic overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30"
                    transition={{ duration: 0.7 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-lightblue-400/20 via-transparent via-sky-400/20 to-cyan-400/20 rounded-xl"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                  
                  <motion.img 
                    src='/images/netaimg.jpg' 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-xl relative z-10 group-hover:brightness-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Resume Buttons */}
            <motion.div 
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="gap-2 group hover:bg-lightblue-500/20 hover:border-lightblue-400/50 hover:shadow-lg hover:shadow-lightblue-500/25 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-lightblue-500/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <FileText className="w-5 h-5 group-hover:text-lightblue-400 relative z-10" />
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group-hover:text-lightblue-400 relative z-10">
                    View Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="gap-2 group hover:bg-sky-500/20 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/25 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <Download className="w-5 h-5 group-hover:text-sky-400 relative z-10" />
                  <a href="/resume.pdf" download className="group-hover:text-sky-400 relative z-10">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6 hover:text-gradient-lightblue transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Hello! I'm Bhimaraju Netaasree,
            </motion.h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed hover:text-foreground/80 transition-colors duration-300">
              Currently I am pursuing my BTech degreee in NRIIT university. I specialize 
              in creating modern, responsive, and user-friendly applications. I'm passionate 
              about clean code, innovative solutions, and continuous learning.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed hover:text-foreground/80 transition-colors duration-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              other develpers.
            </p>

            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="group glass p-6 rounded-xl relative overflow-hidden hover:border-2 hover:border-lightblue-400/50"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    boxShadow: '0 20px 40px rgba(96, 165, 250, 0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1 }}
                  />
                  <motion.div 
                    className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-3 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2 relative z-10 group-hover:text-gradient-lightblue">{item.title}</h4>
                  <p className="text-muted-foreground text-sm relative z-10 group-hover:text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
