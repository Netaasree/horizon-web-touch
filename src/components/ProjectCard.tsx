import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Video } from 'lucide-react';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  media: MediaItem[];
  github: string;
  live: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: (index: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  featured = false, 
  onClick 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    
    if (!video || !card || project.media[0].type !== 'video') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
          } else {
            video.pause();
            video.currentTime = 0;
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Autoplay prevented by browser');
        });
      }
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className={`glass rounded-xl overflow-hidden cursor-pointer relative ${
        featured ? 'lg:col-span-2' : ''
      }`}
      onClick={() => onClick(index)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
      }}
    >
      {/* Animated border gradient */}
      <motion.div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative overflow-hidden">
        {project.media[0].type === 'video' ? (
          <div className="relative">
            <motion.video
              ref={videoRef}
              src={project.media[0].src}
              poster={project.media[0].thumbnail}
              className="w-full h-48 object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Video size={40} className="text-white" />
            </motion.div>
          </div>
        ) : (
          <motion.img
            src={project.media[0].src}
            alt={project.title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-4 right-4"
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="bg-blue-500/80 text-white px-2 py-1 rounded text-sm font-medium shadow-lg backdrop-blur-sm">
            View Details
          </span>
        </motion.div>
      </div>
      
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-2"
          whileHover={{ color: 'rgb(96, 165, 250)' }}
        >
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <motion.span
              key={i}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                color: 'rgb(147, 197, 253)',
              }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1, color: 'rgb(96, 165, 250)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="mr-1" />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1, color: 'rgb(168, 85, 247)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
