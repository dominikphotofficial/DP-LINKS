import React from 'react';
import { QrCode, UserPlus, Send } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

interface FloatingMobileBarProps {
  onOpenQR: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenQR }) => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-white/95 backdrop-blur-lg border border-[#E4EAEA] shadow-xl shadow-black/10">
        {/* Share QR button */}
        <button
          onClick={onOpenQR}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#F8FAFA] text-slate-800 text-xs font-semibold border border-[#E4EAEA] active:scale-95 transition-all"
        >
          <QrCode className="w-4 h-4 text-[#113939]" />
          <span>Share QR</span>
        </button>

        {/* Save Contact vCard button */}
        <button
          onClick={downloadVCard}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#113939] text-white text-xs font-semibold shadow-md shadow-[#113939]/20 active:scale-95 transition-all"
        >
          <UserPlus className="w-4 h-4" />
          <span>Save Contact</span>
        </button>

        {/* Get in Touch link */}
        <a
          href="https://portfolio.dominikphotofficial.lt/contacts.html"
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#F8FAFA] text-[#113939] border border-[#E4EAEA] active:scale-95 transition-all"
          title="Direct Contact"
        >
          <Send className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
