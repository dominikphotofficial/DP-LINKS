import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDESHOW_PHOTOS } from '../data/content';

interface FullscreenPhotoModalProps {
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenPhotoModal: React.FC<FullscreenPhotoModalProps> = ({
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % SLIDESHOW_PHOTOS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + SLIDESHOW_PHOTOS.length) % SLIDESHOW_PHOTOS.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  const photo = SLIDESHOW_PHOTOS[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all">
      {/* Top Bar with metadata and close button */}
      <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white">{photo.title}</h2>
          <p className="text-xs text-white/60">
            {photo.location} · {photo.category} ({photo.year})
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close fullscreen"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Frame */}
      <div className="relative w-full h-full max-h-[85vh] max-w-6xl p-4 flex items-center justify-center">
        <img
          src={photo.url}
          alt={photo.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-all z-20"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-all z-20"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400">
        {index + 1} / {SLIDESHOW_PHOTOS.length}
      </div>
    </div>
  );
};
