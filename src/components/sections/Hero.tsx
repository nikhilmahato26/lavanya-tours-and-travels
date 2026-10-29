import React from 'react';
import { Compass, Car, Users, Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { scrollToSection } from '../../utils/contact';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-blue-soft via-white to-brand-surface">
      {/* Background Decorative Scenic Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Scenic Travel Route"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating subtle ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light border border-brand-blue/20 text-brand-navy shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-brand-navy">
                EXPLORE SOUTH & NORTH INDIA WITH LAVANYA TOURS & TRAVELS
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy font-heading tracking-tight leading-[1.1]">
                YOUR JOURNEY. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-royal to-brand-orange">
                  OUR PRIORITY.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed max-w-2xl font-normal">
              Discover memorable journeys with Lavanya Tours & Travels, Mysore. Explore our cars, Tempo Travellers, Force Urbania vehicles, and bus options for family trips, group travel, and customized tours across South and North India.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('tour-packages')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white font-bold text-sm uppercase tracking-wider shadow-cta-blue hover:from-brand-blue hover:to-brand-orange hover:shadow-lg transition-all duration-300 transform active:scale-98"
              >
                <span>EXPLORE TOUR PACKAGES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('fleet')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-brand-navy font-bold text-sm uppercase tracking-wider border-2 border-brand-navy/15 hover:border-brand-orange hover:text-brand-orange shadow-sm hover:shadow-md transition-all duration-300 transform active:scale-98"
              >
                <Car className="w-4 h-4 text-brand-orange" />
                <span>BOOK A VEHICLE</span>
              </button>
            </div>

            {/* Location & Trust mini badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Based in Gangothri Layout, Mysore, Karnataka</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-brand-blue font-medium">OPC Pvt Ltd Registered</span>
            </div>

            {/* 4 Hero Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-200/80">
              <div className="bg-white/90 p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 hover:border-brand-blue/30 transition-all">
                <Compass className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy leading-tight">South & North India Tours</span>
              </div>

              <div className="bg-white/90 p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 hover:border-brand-orange/30 transition-all">
                <Car className="w-5 h-5 text-brand-orange" />
                <span className="text-xs font-bold text-brand-navy leading-tight">Cars, Travellers & Buses</span>
              </div>

              <div className="bg-white/90 p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 hover:border-brand-blue/30 transition-all">
                <Sparkles className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy leading-tight">AC & Non-AC Options</span>
              </div>

              <div className="bg-white/90 p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-1 hover:border-brand-orange/30 transition-all">
                <Users className="w-5 h-5 text-brand-orange" />
                <span className="text-xs font-bold text-brand-navy leading-tight">Family & Group Travel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Presentation with Logo Emblem & Scenic Vehicle Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue via-brand-royal to-brand-orange rounded-3xl opacity-20 blur-xl"></div>

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-brand-navy">
                  <img
                    src="/images/hero/hero-car.jpg"
                    alt="Lavanya Tours & Travels South India Highway Travel"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"></div>

                  {/* Logo Emblem badge floating on card */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5">
                    <img
                      src="/images/logo/logo-original.jpg"
                      alt="LTT Official Emblem"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="pr-1 text-left">
                      <p className="text-[11px] font-extrabold text-brand-navy tracking-tight leading-none">LAVANYA</p>
                      <p className="text-[9px] font-bold text-brand-orange uppercase leading-none mt-0.5">Tours & Travels</p>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-orange text-white mb-1.5">
                      Mysore • Karnataka
                    </span>
                    <h3 className="text-lg font-bold font-heading drop-shadow-md">
                      Comfortable Travel Across South & North India
                    </h3>
                    <p className="text-xs text-gray-200 mt-0.5">
                      Tailored options from 4-seater cars to 49-seater buses
                    </p>
                  </div>
                </div>

                {/* Sub Features Card underneath */}
                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between text-xs text-gray-600 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Clean & Maintained Vehicles</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-brand-navy">Fast Quote via WhatsApp</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Immediate Assistance</p>
                      <p className="text-sm font-bold text-brand-navy">+91 8884565305</p>
                    </div>
                    <button
                      onClick={() => scrollToSection('booking-panel')}
                      className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center gap-1"
                    >
                      <span>Get Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
