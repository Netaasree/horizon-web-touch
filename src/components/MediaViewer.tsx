
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
        <div className="relative">
          <video
            src={mediaItem.src}
            className={`w-full object-cover rounded-lg ${className}`}
            controls
            poster={mediaItem.thumbnail}
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded-md flex items-center">
            <FileVideo size={14} className="mr-1" />
            Video
          </div>
        </div>
      );
    } else {
      return (
        <img
          src={mediaItem.src}
          alt={`Project media ${index}`}
          className={`w-full object-cover rounded-lg ${className}`}
        />
      );
    }
  };

  return (
    <div className="relative">
      {renderMediaItem(currentMedia, currentIndex)}
      
      {media.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {media.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
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
