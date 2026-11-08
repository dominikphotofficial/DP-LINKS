import React, { useState } from 'react';
import {
  Instagram,
  Share2,
  Youtube,
  Video,
  Globe,
  Camera,
  Linkedin,
  ArrowUpRight,
  Check,
  Copy,
} from 'lucide-react';
import { SOCIAL_CHANNELS } from '../data/content';
import { SocialLink } from '../types';

export const SocialSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getIcon = (name: SocialLink['iconName']) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-slate-800" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-red-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-sky-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-teal-600" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5 text-blue-700" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const handleCopyLink = (e: React.MouseEvent, link: SocialLink) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="w-full my-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#113939] uppercase">
            CONNECT & FOLLOW
          </span>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Digital Channels & Social
          </h2>
        </div>
        <span className="text-xs text-slate-400 font-medium">
          {SOCIAL_CHANNELS.length} Channels
        </span>
      </div>

      <p className="text-xs text-slate-500 mb-5 leading-relaxed">
        Explore photo releases, behind-the-scenes reels, video productions, and professional networks across official DP channels.
      </p>

      {/* Grid of Social Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SOCIAL_CHANNELS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-[14px] bg-[#F8FAFA] border border-[#E4EAEA] hover:border-[#113939]/30 hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E4EAEA] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                {getIcon(item.iconName)}
              </div>
              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-[#113939] transition-colors">
                    {item.platform}
                  </span>
                </div>
                <span className="text-xs text-slate-400 truncate block">
                  {item.handle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={(e) => handleCopyLink(e, item)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title={`Copy ${item.platform} link`}
                aria-label={`Copy ${item.platform} link`}
              >
                {copiedId === item.id ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <div className="w-7 h-7 rounded-full bg-white border border-[#E4EAEA] flex items-center justify-center text-slate-400 group-hover:text-[#113939] group-hover:border-[#113939]/40 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
