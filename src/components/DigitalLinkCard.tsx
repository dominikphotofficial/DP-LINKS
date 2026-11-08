import React from 'react';
import { ArrowUpRight, Camera, Calendar, Mail } from 'lucide-react';
import { NavigationCard } from '../types';

interface DigitalLinkCardProps {
  card: NavigationCard;
}

export const DigitalLinkCard: React.FC<DigitalLinkCardProps> = ({ card }) => {
  const getIcon = () => {
    switch (card.id) {
      case 'services':
        return <Camera className="w-5 h-5 text-[#113939]" />;
      case 'tfp-booking':
        return <Calendar className="w-5 h-5 text-[#113939]" />;
      case 'contacts':
        return <Mail className="w-5 h-5 text-[#113939]" />;
      default:
        return <Camera className="w-5 h-5 text-[#113939]" />;
    }
  };

  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-[14px] bg-[#F8FAFA] border border-[#E4EAEA] p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#113939]/5 hover:border-[#113939]/30 hover:-translate-y-0.5 active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        {/* Left: Category Badge & Title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold tracking-wider text-[#113939] uppercase">
              {card.badge}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#113939] transition-colors">
            {card.title}
          </h2>
        </div>

        {/* Right: Circular Arrow Action Button */}
        <div className="w-10 h-10 rounded-full bg-white border border-[#E4EAEA] flex items-center justify-center shrink-0 shadow-sm text-slate-700 group-hover:bg-[#113939] group-hover:text-white group-hover:border-[#113939] transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
        {card.description}
      </p>

      {/* Explicit Bottom Action Strip */}
      <div className="pt-3 border-t border-[#E4EAEA]/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-500 font-medium">
          {getIcon()}
          <span className="text-[11px] text-slate-400">portfolio.dominikphotofficial.lt</span>
        </div>
        <span className="font-bold text-[11px] tracking-wider text-[#113939] uppercase group-hover:underline underline-offset-4">
          {card.buttonLabel} →
        </span>
      </div>
    </a>
  );
};
