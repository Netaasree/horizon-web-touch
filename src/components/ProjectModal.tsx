
import React from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import MediaViewer from './MediaViewer';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  currentMediaIndex: number;
  onClose: () => void;
  onNextMedia: () => void;
  onPrevMedia: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  currentMediaIndex,
  onClose,
  onNextMedia,
  onPrevMedia
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-300 z-10"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <MediaViewer
            media={project.media}
            currentIndex={currentMediaIndex}
            onNext={onNextMedia}
            onPrev={onPrevMedia}
            className="h-64 sm:h-80"
          />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.longDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
          >
            <Github size={16} className="mr-2" />
            View Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
