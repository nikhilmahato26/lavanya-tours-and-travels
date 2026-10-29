import React from 'react';
import { SOUTH_INDIA_DESTINATIONS } from '../../data/destinations';
import { DestinationCard } from '../ui/DestinationCard';
import { MapPin, Compass, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/contact';

export const Destinations: React.FC = () => {
  return (
    <section id="tour-packages" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-light border border-brand-orange/20 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <Compass className="w-3.5 h-3.5 text-brand-orange" />
            <span>Tour Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            EXPLORE BEAUTIFUL DESTINATIONS
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Discover popular destinations across South India and enquire about customized travel arrangements with Lavanya Tours & Travels.
          </p>

          <div className="pt-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-surface border border-gray-200 px-4 py-1.5 rounded-full">
              CUSTOMIZED TOUR — ENQUIRE FOR DETAILS
            </span>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOUTH_INDIA_DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-brand-orange">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Tailor-made itineraries</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Looking for a Multi-Destination Itinerary?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Combine Mysore, Coorg, Ooty, or coastal destinations into a seamless family holiday or group journey. Share your plan and we'll help arrange the vehicle and schedule.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('south-india-tours')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md transition-all cursor-pointer"
          >
            <span>Plan My South India Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
