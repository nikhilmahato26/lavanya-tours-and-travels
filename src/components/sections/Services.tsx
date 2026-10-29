import React from 'react';
import { SERVICES } from '../../data/services';
import { ServiceCard } from '../ui/ServiceCard';
import { Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            OUR TRAVEL & VEHICLE SERVICES
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            From single-car outstation rentals and family vacations to luxury Urbania and large-scale bus logistics, explore the services provided by Lavanya Tours & Travels.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
