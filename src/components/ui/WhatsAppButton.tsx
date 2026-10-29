import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Contact" className="hidden lg:block fixed bottom-6 right-6 z-40">
      <a
        href={BUSINESS_CONFIG.urls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Lavanya Tours & Travels on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="font-semibold text-sm tracking-wide pr-1">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
