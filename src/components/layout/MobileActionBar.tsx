import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 shadow-2xl lg:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-blue-light text-brand-navy hover:bg-brand-blue/15 transition-colors border border-brand-blue/20"
          aria-label="Call primary phone number"
        >
          <Phone className="w-5 h-5 text-brand-blue mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_CONFIG.urls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors border border-emerald-300"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-500 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <button
          onClick={() => scrollToSection('booking-form')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold shadow-md hover:opacity-95 transition-all"
          aria-label="Scroll to booking enquiry form"
        >
          <Calendar className="w-5 h-5 mb-0.5 text-white" />
          <span className="text-[11px] uppercase tracking-tight">Book Now</span>
        </button>
      </div>
    </div>
  );
};
