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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Our Fleet & Transparent Rates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            THE PERFECT VEHICLE FOR EVERY JOURNEY
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            From budget-friendly sedans at ₹12/km to premium Force Urbania and luxury buses, explore our fleet with transparent per-kilometer pricing.
          </p>
        </div>

        {/* Transparent Rate Summary Card */}
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 sm:pb-3.5 border-b border-gray-100 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Verified Fleet Per-KM & Per-Day Rates
              </span>
              <p className="text-[11px] text-amber-800 font-medium mt-0.5">
                * Toll, parking & state permit / tax extra on all vehicles.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap">
              Transparent Pricing
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3.5 text-center">
            <div className="bg-brand-surface p-2.5 rounded-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold text-gray-500 uppercase">Sedan</span>
                <span className="block text-xs font-bold text-brand-navy mt-1">₹12 <span className="text-[10px] text-gray-500 font-normal">/ km</span></span>
                <span className="block text-sm font-extrabold text-brand-orange mt-0.5">₹3,300 <span className="text-[10px] text-gray-500 font-normal">/ day</span></span>
              </div>
              <span className="block text-[10px] text-gray-400 mt-1">Toyota Etios</span>
            </div>
            <div className="bg-brand-surface p-2.5 rounded-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold text-gray-500 uppercase">Innova</span>
                <span className="block text-xs font-bold text-brand-navy mt-1">₹15 <span className="text-[10px] text-gray-500 font-normal">/ km</span></span>
                <span className="block text-sm font-extrabold text-brand-orange mt-0.5">₹4,900 <span className="text-[10px] text-gray-500 font-normal">/ day</span></span>
              </div>
              <span className="block text-[10px] text-gray-400 mt-1">7-Seater Family</span>
            </div>
            <div className="bg-brand-surface p-2.5 rounded-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold text-gray-500 uppercase">Innova Crysta</span>
                <span className="block text-xs font-bold text-brand-navy mt-1">₹18 <span className="text-[10px] text-gray-500 font-normal">/ km</span></span>
                <span className="block text-sm font-extrabold text-brand-orange mt-0.5">₹5,200 <span className="text-[10px] text-gray-500 font-normal">/ day</span></span>
              </div>
              <span className="block text-[10px] text-gray-400 mt-1">Premium SUV</span>
            </div>
            <div className="bg-brand-surface p-2.5 rounded-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-semibold text-gray-500 uppercase">Tempo Traveller</span>
                <span className="block text-xs font-bold text-brand-navy mt-1">₹22 <span className="text-[10px] text-gray-500 font-normal">/ km</span></span>
                <span className="block text-sm font-extrabold text-brand-orange mt-0.5">₹6,500 <span className="text-[10px] text-gray-500 font-normal">/ day</span></span>
              </div>
              <span className="block text-[10px] text-gray-400 mt-1">12–17 Seater</span>
            </div>
            <div className="bg-brand-orange-light/50 p-2.5 rounded-xl border border-brand-orange/20 col-span-2 sm:col-span-1 flex flex-col justify-between">
              <div>
                <span className="block text-[11px] font-bold text-brand-orange uppercase">Force Urbania</span>
                <span className="block text-xs font-bold text-brand-navy mt-1">₹40 <span className="text-[10px] text-gray-500 font-normal">/ km</span></span>
                <span className="block text-sm font-extrabold text-brand-orange mt-0.5">₹12,700 <span className="text-[10px] text-brand-orange/80 font-normal">/ day</span></span>
              </div>
              <span className="block text-[10px] text-brand-orange/90 mt-1 font-medium">Luxury 12–16 Seats</span>
            </div>
          </div>
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
