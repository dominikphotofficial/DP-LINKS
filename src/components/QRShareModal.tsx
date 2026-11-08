import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Download, Share2 } from 'lucide-react';
import { BRAND_DATA } from '../data/content';

interface QRShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRShareModal: React.FC<QRShareModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (isOpen && canvasRef.current && pageUrl) {
      QRCode.toCanvas(
        canvasRef.current,
        pageUrl,
        {
          width: 240,
          margin: 1.5,
          color: {
            dark: '#113939',
            light: '#FFFFFF',
          },
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [isOpen, pageUrl]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'DP_Dominikphotofficial_QR.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 text-center animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src={BRAND_DATA.logoUrl}
            alt="DP Logo"
            className="w-7 h-7 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-xs font-bold uppercase tracking-widest text-[#113939]">
            {BRAND_DATA.brandName} | DIGITAL CARD
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Scan to Connect
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Scan with any mobile camera to immediately view this card on another phone.
        </p>

        {/* QR Code Container */}
        <div className="w-64 h-64 mx-auto p-3 rounded-2xl bg-[#F8FAFA] border border-[#E4EAEA] flex items-center justify-center shadow-inner mb-5">
          <canvas ref={canvasRef} className="rounded-xl shadow-xs" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F8FAFA] hover:bg-slate-100 border border-[#E4EAEA] text-xs font-semibold text-slate-700 transition-all active:scale-95"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
          </button>

          <button
            onClick={handleDownloadQR}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#113939] hover:bg-[#0A2424] text-white text-xs font-semibold transition-all active:scale-95 shadow-md shadow-[#113939]/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save QR</span>
          </button>
        </div>
      </div>
    </div>
  );
};
