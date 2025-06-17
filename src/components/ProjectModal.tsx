
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
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] glass border border-white/20 overflow-hidden p-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors duration-300 z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col h-full max-h-[95vh] overflow-y-auto">
          <div className="flex-shrink-0 p-6 pb-4">
            <MediaViewer
              media={project.media}
              currentIndex={currentMediaIndex}
              onNext={onNextMedia}
              onPrev={onPrevMedia}
              className="h-48 sm:h-64 lg:h-80 xl:h-96"
            />
          </div>

          <div className="flex-1 px-6 pb-6 space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-sm sm:text-base"
              >
                <Github size={16} className="mr-2" />
                View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
