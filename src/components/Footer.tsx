import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#E4EAEA] bg-[#F8FAFA] py-12 px-6 text-slate-600">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={BRAND_DATA.logoUrl}
            alt="DP Logo"
            className="w-9 h-9 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="text-left">
            <span className="text-sm font-bold tracking-widest uppercase text-slate-900 block">
              {BRAND_DATA.brandName}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {BRAND_DATA.fullName} .
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 max-w-sm mb-6 leading-relaxed">
          {BRAND_DATA.subtitle}
        </p>

        {/* Ecosystem Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-700 mb-8">
          <a
            href="https://portfolio.dominikphotofficial.lt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#113939] transition-colors"
          >
            Portfolio
          </a>
          <span className="text-slate-300">·</span>
          <a
            href="https://portfolio.dominikphotofficial.lt/services.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#113939] transition-colors"
          >
            Services
          </a>
          <span className="text-slate-300">·</span>
          <a
            href="https://portfolio.dominikphotofficial.lt/tfp-booking.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#113939] transition-colors"
          >
            TFP Booking
          </a>
          <span className="text-slate-300">·</span>
          <a
            href="https://portfolio.dominikphotofficial.lt/contacts.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#113939] transition-colors"
          >
            Contacts
          </a>
          <span className="text-slate-300">·</span>
          <a
            href="https://corporation.dominikphotofficial.lt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#113939] transition-colors text-[#113939]"
          >
            DP.CORPORATION
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E4EAEA] text-[11px] font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all mb-6"
        >
          <ArrowUp className="w-3 h-3 text-[#113939]" />
          <span>Back to Top</span>
        </button>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} {BRAND_DATA.fullName} . All rights reserved. Powered by the DP ecosystem.
        </div>
      </div>
    </footer>
  );
};
