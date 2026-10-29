import React from 'react';
import { Users, Send, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { scrollToSection } from '../../utils/contact';
import { openWhatsApp, buildVehicleBookingMessage } from '../../utils/whatsapp';

export const UrbaniaSection: React.FC = () => {
  const handleBookUrbania = () => {
    scrollToSection('booking-form', { vehicle: 'Force Urbania — 12 Seater' });
  };

  const handleDirectWhatsApp = () => {
    const msg = buildVehicleBookingMessage({
      name: '',
      phone: '',
      vehicle: 'Force Urbania (12 to 16 seats)',
      passengers: '12-16',
      acPreference: 'AC Preferred',
    });
    openWhatsApp(msg);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-tr from-brand-surface via-white to-brand-blue-soft rounded-3xl border border-gray-200/80 p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
                <Users className="w-3.5 h-3.5 text-brand-blue" />
                <span>Featured Group Vehicle</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight leading-tight">
                EXPLORE FORCE URBANIA FOR GROUP TRAVEL
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Planning a journey with a group? Enquire about our Force Urbania options with capacities ranging from 12 to 16 seats.
              </p>

              {/* Verified Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Capacities ranging from 12 to 16 seats</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span>Well-suited for family gatherings, weddings, and group excursions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span>AC and non-AC options subject to availability on enquiry</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <Shield className="w-5 h-5 text-brand-navy flex-shrink-0" />
                  <span>Contact for transparent rental pricing & route discussions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={handleBookUrbania}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider shadow-cta-orange hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK FORCE URBANIA</span>
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Vehicle Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-2xl p-4">
                <div className="relative h-64 sm:h-72 w-full flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden">
                  <img
                    src="/images/vehicles/force-urbania-12.jpg"
                    alt="Force Urbania 12 to 16 Seater"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    12 to 16 Seats
                  </div>
                  <div className="absolute bottom-3 right-3 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    Contact for Pricing
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-heading font-extrabold text-lg text-brand-navy">
                    Force Urbania Group Fleet
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Available for outstation tours from Mysore and South India destinations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
