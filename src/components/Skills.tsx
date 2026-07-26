import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Languages } from 'lucide-react';

const groups = [
  {
    title: 'Frontend',
    icon: <Code className="w-5 h-5" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Socket.IO'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="w-5 h-5" />,
    skills: ['Git', 'GitHub', 'Docker', 'Bazel', 'Postman', 'Render', 'Vercel', 'VS Code'],
  },
  {
    title: 'Languages',
    icon: <Languages className="w-5 h-5" />,
    skills: ['Python', 'JavaScript', 'C', 'Java'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              className="glass rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-lightblue-500/20 to-purple-500/20 text-lightblue-400">
                  {g.icon}
                </div>
                <h3 className="text-xl font-bold">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {g.skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full bg-white/5 border border-white/15 text-foreground/90 cursor-default transition-shadow duration-300 hover:border-lightblue-400/60 hover:shadow-[0_0_18px_hsl(var(--lightblue-500)/0.5)] hover:text-lightblue-300"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
