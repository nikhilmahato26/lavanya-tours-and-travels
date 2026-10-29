import React from 'react';
import { MapPin, Clock, ArrowRight, CheckCircle2, MessageCircle, Route } from 'lucide-react';
import { TourPackage } from '../../data/destinations';
import { scrollToSection } from '../../utils/contact';
import { buildTourEnquiryMessage, openWhatsApp } from '../../utils/whatsapp';

interface DestinationCardProps {
  packageData: TourPackage;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ packageData }) => {
  const handleEnquiry = () => {
    scrollToSection('booking-form', {
      destination: `${packageData.name} (${packageData.duration})`,
      bookingType: `${packageData.state} Tour`,
    });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = buildTourEnquiryMessage({
      destination: `${packageData.name} - ${packageData.state} (${packageData.duration})`,
      requirements: `Route: ${packageData.route}. Highlights: ${packageData.highlights.slice(0, 3).join(', ')}`,
    });
    openWhatsApp(msg);
  };

  const stateColorClasses: { [key: string]: string } = {
    Karnataka: 'bg-brand-blue text-white',
    Kerala: 'bg-emerald-700 text-white',
    'Tamil Nadu': 'bg-amber-600 text-white',
    Pondicherry: 'bg-rose-600 text-white',
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Package Image & Badges */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-brand-navy">
        <img
          src={packageData.image}
          alt={packageData.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm ${stateColorClasses[packageData.state] || 'bg-brand-navy text-white'}`}>
            {packageData.state}
          </span>
          <span className="text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-brand-gold border border-white/20 px-2.5 py-1 rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-brand-orange" />
            {packageData.duration}
          </span>
        </div>

        {/* Tag & Title on Bottom of Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded mb-1">
            {packageData.tag}
          </span>
          <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white drop-shadow-sm leading-snug">
            {packageData.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Route Pill */}
          <div className="flex items-start gap-1.5 p-2 rounded-lg bg-brand-surface border border-gray-100 text-xs text-brand-navy font-medium">
            <Route className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{packageData.route}</span>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            {packageData.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Package Highlights:</p>
            <ul className="space-y-1">
              {packageData.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing notice & CTAs */}
        <div className="pt-3 border-t border-gray-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue-light px-2.5 py-0.5 rounded">
              CUSTOMIZED TOUR
            </span>
            <span className="font-bold text-brand-orange text-xs">
              Enquire for Details
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleEnquiry}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white text-xs font-bold uppercase tracking-wider hover:from-brand-blue hover:to-brand-orange transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Enquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-300 hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
