import React from 'react';
import { Users, Wind, ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { Vehicle } from '../../data/vehicles';
import { scrollToSection } from '../../utils/contact';
import { buildVehicleBookingMessage, openWhatsApp } from '../../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const handleEnquireNow = () => {
    scrollToSection('booking-form', { vehicle: vehicle.name });
  };

  const handleDirectWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = buildVehicleBookingMessage({
      name: '',
      phone: '',
      vehicle: vehicle.name,
      acPreference: 'AC Preferred',
    });
    openWhatsApp(message);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Vehicle Image Container */}
      <div className="relative h-52 sm:h-56 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-4">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-transparent"></div>

        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-contain object-center z-10 transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="text-[11px] font-bold tracking-wider uppercase bg-brand-navy/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
            {vehicle.category}
          </span>
        </div>

        {/* Verified Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified
          </span>
        </div>
      </div>

      {/* Vehicle Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-extrabold text-lg text-brand-navy group-hover:text-brand-blue transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Capacity and AC Details */}
          <div className="flex flex-wrap items-center gap-2 pt-3">
            {vehicle.capacity && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-brand-blue-light px-2.5 py-1 rounded-lg border border-brand-blue/15">
                <Users className="w-3.5 h-3.5 text-brand-blue" />
                {vehicle.capacity}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200">
              <Wind className="w-3.5 h-3.5 text-brand-orange" />
              {vehicle.acOption}
            </span>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Pricing</span>
            <span className="text-xs font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full">
              {vehicle.pricing}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleEnquireNow}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-royal transition-colors shadow-sm"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
