import React from 'react';
import { Car, Users, Bus, Sparkles, Compass, MapPin, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../data/services';
import { scrollToSection } from '../../utils/contact';

const iconMap: { [key: string]: React.ElementType } = {
  Car,
  Users,
  Bus,
  Sparkles,
  Compass,
  MapPin,
  CalendarCheck,
  ShieldCheck,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Car;

  const handleClick = () => {
    scrollToSection('booking-form', {
      bookingType: service.bookingType,
      vehicle: service.vehicleType,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="font-heading font-extrabold text-lg text-brand-navy group-hover:text-brand-blue transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-100">
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-orange transition-colors"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
