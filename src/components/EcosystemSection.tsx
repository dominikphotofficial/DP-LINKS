import React from 'react';
import { ArrowUpRight, Globe, Layers, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

export const EcosystemSection: React.FC = () => {
  return (
    <section className="w-full my-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A1410] via-[#113939] to-[#0A1410] text-white p-7 sm:p-9 shadow-2xl border border-emerald-900/40">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header Tag */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-[0.2em] text-emerald-300 uppercase">
              <Layers className="w-3 h-3 text-emerald-300" />
              <span>OFFICIAL ECOSYSTEM</span>
            </div>
            <img
              src={BRAND_DATA.logoUrl}
              alt="DP Corporation Emblem"
              className="w-8 h-8 object-contain opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Brand */}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            DP.CORPORATION
          </h2>

          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-6 max-w-xl">
            The wider digital and media infrastructure powering the DP universe. DP.CORPORATION oversees high-end commercial visual campaigns, creative technology ventures, digital publishing, and specialized photography productions.
          </p>

          {/* Pillars Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2 text-white/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commercial Productions</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Digital Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Creative Media Studio</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-emerald-300/80 font-mono">
              corporation.dominikphotofficial.lt
            </div>
            <a
              href="https://corporation.dominikphotofficial.lt/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#113939] hover:bg-slate-100 active:scale-[0.98] font-bold text-xs tracking-wider uppercase transition-all shadow-lg group"
            >
              <span>EXPLORE DP.CORPORATION</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
