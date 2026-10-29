import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Logo Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-brand-navy p-6 shadow-2xl text-white border border-gray-100">
              {/* Background ambient pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/30 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-brand-blue to-brand-orange flex-shrink-0">
                    <img
                      src="/images/logo/logo-original.jpg"
                      alt="Lavanya Tours & Travels Official Logo"
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-white">
                      LAVANYA TOURS & TRAVELS
                    </h3>
                    <p className="text-xs text-brand-gold font-medium">OPC PVT LTD</p>
                    <p className="text-[11px] text-gray-300">Registered in Mysore, Karnataka</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>LIG 143, 2nd Main, 3rd Cross, Gangothri Layout, Mysore, Karnataka</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>+91 8884565305 / +91 8105614693</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span className="truncate">lavanyatoursandtravelsmysore@gmail.com</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs text-brand-gold font-bold">South & North India</p>
                    <p className="text-[10px] text-gray-300 mt-0.5">Tour Enquiries</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-xs text-brand-gold font-bold">Cars, Travellers & Buses</p>
                    <p className="text-[10px] text-gray-300 mt-0.5">Diverse Fleet Options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Text Content from Prompt */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
              YOUR TRAVEL PARTNER IN MYSORE
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Lavanya Tours and Travels OPC Pvt Ltd is based in Mysore, Karnataka. The company offers travel enquiries for destinations across South India and North India, along with vehicle options for individuals, families, and groups.
              </p>

              <p>
                Our vehicle range includes Toyota Etios, Toyota Innova, Toyota Innova Crysta, Tempo Traveller, Force Urbania options from 12 to 16 seats, and bus options ranging from 21 to 49 seats, including Volvo bus enquiries.
              </p>

              <p>
                Contact us to discuss your preferred destination, travel dates, vehicle requirements, and booking options.
              </p>
            </div>

            {/* Quick Fleet Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-semibold text-brand-navy">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sedan — ₹3,300/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Innova — ₹4,900/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Crysta — ₹5,200/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Tempo — ₹6,500/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Urbania — ₹12,700/day</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Toll / Tax Extra</span>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white font-bold text-xs uppercase tracking-wider hover:from-brand-blue hover:to-brand-orange shadow-cta-blue transition-all"
              >
                <span>CONTACT LAVANYA TOURS & TRAVELS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
