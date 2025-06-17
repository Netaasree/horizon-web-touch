
import React from 'react';
import { Video, FileVideo, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  thumbnail?: string;
}

interface MediaViewerProps {
  media: MediaItem[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
}

const MediaViewer: React.FC<MediaViewerProps> = ({
  media,
  currentIndex,
  onNext,
  onPrev,
  className = ""
}) => {
  const currentMedia = media[currentIndex];

  const renderMediaItem = (mediaItem: MediaItem, index: number) => {
    if (mediaItem.type === 'video') {
      return (
        <div className="relative w-full h-full">
          <video
            src={mediaItem.src}
            className={`w-full h-full object-contain rounded-lg bg-black/20 ${className}`}
            controls
            poster={mediaItem.thumbnail}
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md flex items-center text-xs">
            <FileVideo size={12} className="mr-1" />
            Video
          </div>
        </div>
      );
    } else {
      return (
        <img
          src={mediaItem.src}
          alt={`Project media ${index}`}
          className={`w-full h-full object-contain rounded-lg bg-black/5 ${className}`}
        />
      );
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="w-full h-full">
        {renderMediaItem(currentMedia, currentIndex)}
      </div>
      
      {media.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
          
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {media.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                  i === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaViewer;
