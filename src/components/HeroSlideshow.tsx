import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Maximize2, ChevronRight, ChevronLeft, ArrowDown } from 'lucide-react';
import { SLIDESHOW_PHOTOS, BRAND_DATA } from '../data/content';

interface HeroSlideshowProps {
  onOpenFullscreen: (index: number) => void;
  onOpenQR: () => void;
  onSaveContact: () => void;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({
  onOpenFullscreen,
  onOpenQR,
  onSaveContact,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_PHOTOS.length);
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_PHOTOS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDESHOW_PHOTOS.length) % SLIDESHOW_PHOTOS.length);
  };

  const currentPhoto = SLIDESHOW_PHOTOS[currentIndex];

  const scrollToLinks = () => {
    const el = document.getElementById('digital-business-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0A0F0D] text-white">
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        {SLIDESHOW_PHOTOS.map((photo, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center ${
                  isActive ? 'animate-kenburns' : ''
                }`}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Cinematic Scrims & Vignettes for High-Contrast Text Legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/65 to-black/70" />
        <div className="absolute inset-0 z-20 bg-radial from-transparent via-[#0A0F0D]/40 to-[#0A0F0D]/90" />
      </div>

      {/* Top Utility Header Bar */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-5 pt-6 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={BRAND_DATA.logoUrl}
            alt="DP Logo"
            className="w-10 h-10 object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-white/90">
              {BRAND_DATA.brandName}
            </span>
            <span className="text-[10px] tracking-wider text-emerald-300 font-medium">
              OFFICIAL HUB
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQR}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-xs font-medium text-white backdrop-blur-md border border-white/15 transition-all"
            title="Scan or share QR code"
          >
            <span className="text-[11px] font-semibold tracking-wide">SHARE QR</span>
          </button>
          <button
            onClick={onSaveContact}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-xs font-semibold text-white shadow-md shadow-emerald-950/40 transition-all"
            title="Download vCard contact file"
          >
            <span>+ SAVE CONTACT</span>
          </button>
        </div>
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-30 w-full max-w-xl mx-auto px-6 py-10 flex flex-col items-center text-center my-auto">
        {/* Emblem Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium tracking-[0.2em] text-emerald-300 uppercase shadow-lg">
          <span>PORTFOLIO & ECOSYSTEM</span>
        </div>

        {/* Brand Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
          DP <span className="font-light text-white/40">|</span> LINKS
        </h1>

        <p className="text-sm sm:text-base font-medium tracking-wide text-white/80 max-w-md mx-auto mb-2">
          {BRAND_DATA.fullName}
        </p>

        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md mx-auto mb-8 font-normal">
          {BRAND_DATA.subtitle}
        </p>

        {/* Primary CTA Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md">
          <a
            href="https://portfolio.dominikphotofficial.lt/services.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#0A0F0D] hover:bg-slate-100 active:scale-[0.98] font-bold text-xs tracking-wider uppercase transition-all shadow-xl shadow-black/40 group"
          >
            <span>EXPLORE SERVICES</span>
            <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://portfolio.dominikphotofficial.lt/contacts.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white active:scale-[0.98] font-semibold text-xs tracking-wider uppercase backdrop-blur-md border border-white/25 transition-all"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Mobile Save Contact CTA */}
        <button
          onClick={onSaveContact}
          className="sm:hidden mt-3 text-xs text-emerald-300 hover:text-emerald-200 underline underline-offset-4 font-medium flex items-center gap-1"
        >
          <span>Save to Phone Contacts (.vcf)</span>
        </button>
      </div>

      {/* Bottom Cinematic Slideshow Utility Bar */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-6 pb-6 pt-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
          {/* Active Photo Info */}
          <div className="flex items-center gap-3 text-left w-full sm:w-auto">
            <span className="text-[11px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
              0{currentIndex + 1} / 0{SLIDESHOW_PHOTOS.length}
            </span>
            <div className="truncate">
              <p className="text-xs font-semibold text-white truncate">
                {currentPhoto.title}
              </p>
              <p className="text-[11px] text-white/60 truncate">
                {currentPhoto.location} · {currentPhoto.category}
              </p>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Previous photograph"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              title={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="text-[11px]">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Next photograph"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="h-4 w-px bg-white/20 mx-1" />

            <button
              onClick={() => onOpenFullscreen(currentIndex)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="View photography in fullscreen"
              aria-label="View photograph full screen"
            >
              <Maximize2 className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <button
          onClick={scrollToLinks}
          className="mx-auto mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em]"
        >
          <span>Scroll to links</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
