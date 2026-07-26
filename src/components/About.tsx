import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';
import { Download, FileText } from 'lucide-react';

const Counter = ({ to, suffix = '+' }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient-lightblue">
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { value: 8, label: 'Projects' },
    { value: 4, label: 'Years Coding' },
    { value: 15, label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A little bit about who I am and what I do.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 sm:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
            I'm a final-year Computer Science and Engineering student passionate about software development,
            artificial intelligence, and problem solving. I enjoy building full-stack web applications and
            AI-powered solutions while continuously improving my data structures and algorithms skills.
            I'm always eager to learn new technologies and create projects that solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild variant="outline" className="gap-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> View Resume
              </a>
            </Button>
            <Button asChild className="gap-2 bg-gradient-to-r from-lightblue-500 to-purple-500 text-white">
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-lightblue-500/20 transition-all duration-300"
            >
              <Counter to={s.value} />
              <div className="text-sm sm:text-base text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
