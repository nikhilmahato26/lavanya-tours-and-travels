import React, { useState } from 'react';
import { VEHICLES, VEHICLE_FILTER_TABS } from '../../data/vehicles';
import { VehicleCard } from '../ui/VehicleCard';
import { BUSINESS_CONFIG } from '../../config/business';
import { Info, Sparkles } from 'lucide-react';

export const Fleet: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredVehicles = activeFilter === 'all'
    ? VEHICLES
    : VEHICLES.filter((v) => v.filterCategory === activeFilter);

  return (
    <section id="fleet" className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Our Fleet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            THE PERFECT VEHICLE FOR EVERY JOURNEY
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            From comfortable cars to group transportation, explore our vehicle options and contact us for availability and rental pricing.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {VEHICLE_FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-brand-navy hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Disclaimers & AC Policy Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-600 justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-brand-navy">Vehicle Availability & Air Conditioning Notice:</p>
              <p className="text-gray-500 mt-0.5">{BUSINESS_CONFIG.disclaimers.acPolicy}</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full whitespace-nowrap">
            {BUSINESS_CONFIG.disclaimers.pricing}
          </span>
        </div>
      </div>
    </section>
  );
};
