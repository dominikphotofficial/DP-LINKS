/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSlideshow } from './components/HeroSlideshow';
import { DigitalLinkCard } from './components/DigitalLinkCard';
import { PhotoStackShowcase } from './components/PhotoStackShowcase';
import { EcosystemSection } from './components/EcosystemSection';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FullscreenPhotoModal } from './components/FullscreenPhotoModal';
import { QRShareModal } from './components/QRShareModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { NAVIGATION_CARDS, BRAND_DATA } from './data/content';
import { downloadVCard } from './utils/vcard';
import { QrCode, UserPlus, Sparkles } from 'lucide-react';

export default function App() {
  const [fullscreenPhotoIndex, setFullscreenPhotoIndex] = useState<number | null>(null);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 font-sans selection:bg-[#113939] selection:text-white flex flex-col justify-between">
      {/* 1. Cinematic Hero Section with Background Slideshow */}
      <HeroSlideshow
        onOpenFullscreen={(index) => setFullscreenPhotoIndex(index)}
        onOpenQR={() => setIsQRModalOpen(true)}
        onSaveContact={downloadVCard}
      />

      {/* 2. Main Content & Digital Business Card Stack */}
      <main
        id="digital-business-card"
        className="w-full max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center"
      >
        {/* Brand Emblem & Header Lockup */}
        <div className="w-full flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2 bg-[#F8FAFA] border border-[#E4EAEA] shadow-md flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
            <img
              src={BRAND_DATA.logoUrl}
              alt="DP Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFA] border border-[#E4EAEA] text-[10px] font-bold tracking-[0.2em] text-[#113939] uppercase mb-2">
            <Sparkles className="w-3 h-3 text-[#113939]" />
            <span>OFFICIAL DIGITAL BUSINESS CARD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            DP <span className="font-light text-slate-400">|</span> LINKS
          </h2>

          <p className="text-sm font-semibold text-[#113939] mt-0.5">
            {BRAND_DATA.fullName}
          </p>

          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-2 leading-relaxed">
            {BRAND_DATA.description}
          </p>

          {/* Rapid Networking Action Strip */}
          <div className="flex items-center justify-center gap-2.5 mt-5">
            <button
              onClick={() => setIsQRModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8FAFA] hover:bg-slate-100 border border-[#E4EAEA] text-xs font-semibold text-slate-700 transition-all active:scale-95 shadow-xs"
            >
              <QrCode className="w-3.5 h-3.5 text-[#113939]" />
              <span>Share QR</span>
            </button>
            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#113939] hover:bg-[#0A2424] text-white text-xs font-semibold transition-all active:scale-95 shadow-md shadow-[#113939]/20"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Save Contact</span>
            </button>
          </div>
        </div>

        {/* 3. Floating 3-Card Photo Stack Showcase */}
        <PhotoStackShowcase
          onSelectPhoto={(idx) => setFullscreenPhotoIndex(idx)}
        />

        {/* 4. Core Navigation / Digital Business Card Links */}
        <section className="w-full space-y-3.5 my-4">
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#113939] uppercase">
              PRIMARY DESTINATIONS
            </span>
            <span className="text-xs text-slate-400 font-medium">3 Core Links</span>
          </div>

          {NAVIGATION_CARDS.map((card) => (
            <DigitalLinkCard key={card.id} card={card} />
          ))}
        </section>

        {/* 5. DP.CORPORATION Ecosystem Section */}
        <EcosystemSection />

        {/* 6. Social Media Channels Directory */}
        <SocialSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Official Ecosystem Footer */}
      <Footer />

      {/* 9. Floating Thumb-Zone Bar on Mobile Viewports */}
      <FloatingMobileBar onOpenQR={() => setIsQRModalOpen(true)} />

      {/* 10. Modals & Overlays */}
      <FullscreenPhotoModal
        initialIndex={fullscreenPhotoIndex ?? 0}
        isOpen={fullscreenPhotoIndex !== null}
        onClose={() => setFullscreenPhotoIndex(null)}
      />

      <QRShareModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
}
