import React from 'react';
import { MapPin, Compass, ArrowRight } from 'lucide-react';
import { Destination } from '../../data/destinations';
import { scrollToSection } from '../../utils/contact';
import { buildTourEnquiryMessage, openWhatsApp } from '../../utils/whatsapp';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const handleEnquiry = () => {
    scrollToSection('booking-form', { destination: destination.name });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = buildTourEnquiryMessage({
      destination: destination.name,
    });
    openWhatsApp(msg);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Destination Image */}
      <div className="relative h-60 w-full overflow-hidden bg-brand-navy">
        <img
          src={destination.image}
          alt={`${destination.name} - ${destination.tag}`}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent"></div>

        {/* State / Tag Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-brand-navy/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
            {destination.state}
          </span>
          <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-orange text-white px-2 py-1 rounded-md shadow-sm">
            {destination.tag}
          </span>
        </div>

        {/* Destination Name Overlay */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <div className="flex items-center gap-1.5 text-white/90 text-xs mb-0.5">
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span>South India Tour</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white drop-shadow-sm">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Destination Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {destination.description}
          </p>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-brand-blue bg-brand-blue-light px-2.5 py-1 rounded-md">
              <Compass className="w-3 h-3 text-brand-blue" />
              CUSTOMIZED TOUR
            </span>
            <span className="text-[11px] text-gray-500 font-semibold italic">
              Enquire for Details
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          <button
            onClick={handleEnquiry}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white text-xs font-bold uppercase tracking-wider hover:from-brand-blue hover:to-brand-orange transition-all duration-300 shadow-sm"
          >
            <span>{destination.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-300 hover:bg-emerald-100 transition-colors"
          >
            <span>WhatsApp Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};
