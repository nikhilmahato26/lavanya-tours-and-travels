import React from 'react';
import { Route, FileEdit, MessageSquare, CheckCircle2, ChevronRight } from 'lucide-react';
import { BOOKING_STEPS } from '../../data/services';
import { scrollToSection } from '../../utils/contact';

const iconMap: { [key: string]: React.ElementType } = {
  Route,
  FileEdit,
  MessageSquare,
  CheckCircle2,
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <Route className="w-3.5 h-3.5 text-brand-orange" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            HOW BOOKING WORKS
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Planning and reserving your travel with Lavanya Tours & Travels is straightforward, transparent, and direct.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BOOKING_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Route;
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm relative flex flex-col justify-between group hover:border-brand-blue/40 hover:shadow-card transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-royal text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-navy flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ChevronRight className="w-4 h-4 text-brand-blue hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection('booking-form')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white font-bold text-xs uppercase tracking-wider hover:from-brand-blue hover:to-brand-orange shadow-cta-blue transition-all"
          >
            <span>Start Your Booking Enquiry</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
