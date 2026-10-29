import React, { useState } from 'react';
import { TOUR_PACKAGES, PACKAGE_STATE_TABS } from '../../data/destinations';
import { DestinationCard } from '../ui/DestinationCard';
import { Compass, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../../utils/contact';

export const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPackages = activeTab === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((pkg) => pkg.state === activeTab);

  return (
    <section id="tour-packages" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-light border border-brand-orange/20 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <Compass className="w-3.5 h-3.5 text-brand-orange" />
            <span>Tour Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            TOUR PACKAGES ACROSS SOUTH INDIA
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Explore curated tour packages for <strong>Karnataka</strong>, <strong>Kerala</strong>, <strong>Tamil Nadu</strong>, and <strong>Pondicherry</strong>. All itineraries can be customized according to your group size and schedule.
          </p>

          <div className="pt-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-navy bg-brand-surface border border-gray-200 px-4 py-1.5 rounded-full">
              CUSTOMIZED TOUR — ENQUIRE FOR DETAILS
            </span>
          </div>
        </div>

        {/* Region State Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PACKAGE_STATE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-brand-surface text-gray-700 hover:text-brand-navy hover:bg-gray-200/60 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Package Count Indicator */}
        <div className="flex items-center justify-between pb-6 text-xs text-gray-500 border-b border-gray-100 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>Showing <strong className="text-brand-navy">{filteredPackages.length}</strong> tour packages</span>
          </div>
          <span className="text-[11px] text-gray-400 italic">
            Private vehicle, driver allowance & custom pickup included on enquiry
          </span>
        </div>

        {/* Destination / Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <DestinationCard key={pkg.id} packageData={pkg} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-brand-orange">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Multi-City Combined Itineraries</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Want to Combine Karnataka, Kerala, Tamil Nadu or Pondicherry?
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl">
              We create personalized multi-state itineraries from Mysore or Bangalore. Tell us your travel dates and wishlist of destinations, and we'll arrange the ideal vehicle and schedule.
            </p>
          </div>

          <button
            onClick={() => scrollToSection('south-india-tours')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md transition-all cursor-pointer"
          >
            <span>Plan Custom Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
