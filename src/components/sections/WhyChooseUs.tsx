import React from 'react';
import { Truck, Users, Map, Wind, PhoneCall, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/services';

const iconMap: { [key: string]: React.ElementType } = {
  Truck,
  UsersRound: Users,
  Map,
  Fan: Wind,
  PhoneCall,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-light border border-brand-orange/20 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <Award className="w-3.5 h-3.5 text-brand-orange" />
            <span>Customer Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            WHY CHOOSE LAVANYA TOURS & TRAVELS?
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Reliable travel coordination, diverse fleet selections, and direct personalized assistance from Mysore.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || Truck;
            return (
              <div
                key={item.id}
                className="bg-brand-surface rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center hover:border-brand-blue/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-brand-navy shadow-sm flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-brand-blue group-hover:to-brand-orange group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange mb-1">
                  Feature 0{idx + 1}
                </span>

                <h3 className="font-heading font-extrabold text-base text-brand-navy">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
