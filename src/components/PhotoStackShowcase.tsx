import React, { useState } from 'react';
import { SLIDESHOW_PHOTOS } from '../data/content';
import { Sparkles, Eye } from 'lucide-react';

interface PhotoStackShowcaseProps {
  onSelectPhoto: (index: number) => void;
}

export const PhotoStackShowcase: React.FC<PhotoStackShowcaseProps> = ({ onSelectPhoto }) => {
  // Select 3 standout photographs representing portraiture, landscape, and winter fine art
  const stackIndices = [1, 3, 7]; // Love (idx 1), Dune (idx 3), Winter Sventa (idx 7)
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  const cycleDeck = () => {
    setActiveDeckIndex((prev) => (prev + 1) % stackIndices.length);
  };

  return (
    <div className="w-full my-8 flex flex-col items-center">
      {/* Editorial Kicker */}
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#113939]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#113939]">
          CURATED VISUAL ATMOSPHERE
        </span>
      </div>

      {/* Floating 3-Card Interactive Stack */}
      <div
        className="relative w-72 sm:w-80 h-48 sm:h-52 cursor-pointer select-none perspective-[1000px] group"
        onClick={cycleDeck}
        title="Tap to shuffle showcase stack"
      >
        {stackIndices.map((photoIdx, stackPos) => {
          const photo = SLIDESHOW_PHOTOS[photoIdx];
          // Calculate offset based on active deck position
          const relativePos = (stackPos - activeDeckIndex + stackIndices.length) % stackIndices.length;

          let transformClass = '';
          let zIndex = 10;
          let opacity = 'opacity-100';

          if (relativePos === 0) {
            // Front card
            transformClass = 'translate-y-0 rotate-0 scale-100 shadow-2xl';
            zIndex = 30;
          } else if (relativePos === 1) {
            // Middle card
            transformClass = 'translate-y-3 sm:translate-y-4 rotate-3 scale-95 shadow-lg';
            zIndex = 20;
            opacity = 'opacity-90';
          } else {
            // Back card
            transformClass = 'translate-y-6 sm:translate-y-7 -rotate-3 scale-90 shadow-md';
            zIndex = 10;
            opacity = 'opacity-75';
          }

          return (
            <div
              key={photo.id}
              className={`absolute inset-0 rounded-2xl overflow-hidden border border-[#E4EAEA] bg-[#F8FAFA] transition-all duration-500 ease-out transform ${transformClass} ${opacity}`}
              style={{ zIndex }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom Subtle Caption on Front Card */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold">{photo.title}</p>
                  <p className="text-[10px] text-white/70">{photo.category}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPhoto(photoIdx);
                  }}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm"
                  title="Expand photo"
                  aria-label="Expand photo"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] text-slate-500 tracking-wide">
        Tap stack to cycle · 8-series cinematic rotation
      </p>
    </div>
  );
};
