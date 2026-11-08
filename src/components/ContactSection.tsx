import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Download, Send } from 'lucide-react';
import { BRAND_DATA } from '../data/content';
import { downloadVCard } from '../utils/vcard';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="w-full my-10">
      <div className="rounded-2xl bg-[#F8FAFA] border border-[#E4EAEA] p-6 sm:p-8 text-center shadow-sm">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#113939] uppercase">
          INITIATE A CONVERSATION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1 mb-2">
          Let’s Create Together
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
          Available for commercial projects, editorial assignments, portrait bookings, and creative TFP collaborations worldwide.
        </p>

        {/* Quick Email Copy Box */}
        <div className="max-w-md mx-auto mb-6 p-2 sm:p-2.5 rounded-xl bg-white border border-[#E4EAEA] flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5 pl-2 min-w-0">
            <Mail className="w-4 h-4 text-[#113939] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
              {BRAND_DATA.email}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 active:scale-95 text-xs font-semibold text-slate-700 transition-all shrink-0"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href="https://portfolio.dominikphotofficial.lt/contacts.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#113939] text-white hover:bg-[#0A2424] active:scale-[0.98] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#113939]/20 group"
          >
            <Send className="w-3.5 h-3.5 mr-2" />
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={downloadVCard}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 active:scale-[0.98] font-semibold text-xs tracking-wider uppercase border border-[#E4EAEA] transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5 mr-2 text-[#113939]" />
            <span>SAVE VCARD</span>
          </button>
        </div>
      </div>
    </section>
  );
};
