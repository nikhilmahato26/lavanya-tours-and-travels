import React, { useState } from 'react';
import { Bus, Users, Send, Calendar, MapPin, User, Phone, CheckCircle2, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildBusRentalMessage, openWhatsApp } from '../../utils/whatsapp';

export const BusRentals: React.FC = () => {
  const [formData, setFormData] = useState({
    organizerName: '',
    phone: '',
    busType: '21-Seater Bus',
    passengers: '20',
    pickup: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    acPreference: 'AC Preferred',
    requirements: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.organizerName.trim()) errs.organizerName = 'Organizer name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!formData.pickup.trim()) errs.pickup = 'Enter pickup location';
    if (!formData.destination.trim()) errs.destination = 'Enter destination';
    if (!formData.travelDate) errs.travelDate = 'Select travel date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildBusRentalMessage({
      organizerName: formData.organizerName,
      phone: formData.phone,
      busType: formData.busType,
      passengers: formData.passengers,
      pickup: formData.pickup,
      destination: formData.destination,
      travelDate: formData.travelDate,
      returnDate: formData.returnDate,
      acPreference: formData.acPreference,
      requirements: formData.requirements,
    });

    openWhatsApp(message);
  };

  const busOptions = [
    {
      id: "21-seater",
      name: "21-Seater Bus",
      capacity: "21 seats",
      image: "/images/vehicles/bus-21-seater.jpg",
      description: "Ideal for family functions, temple tours, and mid-size group journeys.",
      features: ["21 Passenger Capacity", "AC / Non-AC on enquiry", "Contact for Pricing"],
    },
    {
      id: "large-bus",
      name: "Larger Buses",
      capacity: "Options up to 49 seats",
      image: "/images/vehicles/bus-49-seater.png",
      description: "Spacious bus options suited for large family groups, pilgrimage, and institutional travel.",
      features: ["Options up to 49 Seats", "AC / Non-AC on enquiry", "Contact for Pricing"],
    },
    {
      id: "volvo-bus",
      name: "Volvo Bus",
      capacity: "Capacity to be confirmed",
      image: "/images/vehicles/volvo-bus.png",
      description: "Volvo bus travel options available for long-distance group tours and premium travel.",
      features: ["Volvo Bus Option", "Specifications confirmed on enquiry", "Contact for Pricing"],
    },
  ];

  return (
    <section id="bus-rentals" className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange-light border border-brand-orange/20 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <Bus className="w-3.5 h-3.5 text-brand-orange" />
            <span>Group Transportation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            BUS RENTALS FOR GROUP TRAVEL
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Explore bus rental options for group journeys, with vehicles ranging from 21-seat options to larger buses, along with Volvo bus enquiries.
          </p>
        </div>

        {/* 3 Bus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {busOptions.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 w-full bg-slate-100 flex items-center justify-center p-3">
                <img
                  src={bus.image}
                  alt={bus.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 text-[11px] font-bold bg-brand-navy text-white px-2.5 py-1 rounded-md">
                  {bus.capacity}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                    {bus.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {bus.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-gray-700">
                    {bus.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-full">
                    Contact for Pricing
                  </span>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, busType: bus.name }));
                      const element = document.getElementById('bus-booking-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange transition-colors"
                  >
                    Select Bus ➔
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bus Rental Booking Form Box */}
        <div id="bus-booking-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl max-w-4xl mx-auto">
          <div className="border-b border-gray-100 pb-5 mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full">
                Custom Bus Quotation
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-brand-navy mt-1.5">
                Request a Bus Rental Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Share your group size, travel route, and preferred bus type for a tailored quote via WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-navy bg-brand-surface p-2.5 rounded-xl border border-gray-200">
              <Users className="w-4 h-4 text-brand-orange" />
              <span>Group Specialists</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Group Organizer Name */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Group Organizer Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Organizer's Full Name"
                    value={formData.organizerName}
                    onChange={(e) => setFormData({ ...formData, organizerName: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none ${
                      errors.organizerName ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.organizerName && <p className="text-red-500 text-xs mt-1">{errors.organizerName}</p>}
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none ${
                      errors.phone ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Preferred Bus Type */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Preferred Bus Type
                </label>
                <select
                  value={formData.busType}
                  onChange={(e) => setFormData({ ...formData, busType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white cursor-pointer"
                >
                  <option value="21-Seater Bus">21-Seater Bus</option>
                  <option value="Bus Options up to 49 Seats">Larger Bus (up to 49 Seats)</option>
                  <option value="Volvo Bus">Volvo Bus</option>
                </select>
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Number of Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. 21, 35, 45"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Mysore / Bangalore"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none ${
                      errors.pickup ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Destination <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-orange" />
                  <input
                    type="text"
                    placeholder="e.g. Tirupati, Ooty, Madurai..."
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none ${
                      errors.destination ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none ${
                      errors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>}
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* AC / Non-AC Preference */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  AC / Non-AC Preference
                </label>
                <select
                  value={formData.acPreference}
                  onChange={(e) => setFormData({ ...formData, acPreference: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white cursor-pointer"
                >
                  <option value="AC Preferred">AC Preferred</option>
                  <option value="Non-AC Preferred">Non-AC Preferred</option>
                  <option value="Subject to Availability">Subject to Availability</option>
                </select>
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Additional Requirements / Trip Details (Optional)
              </label>
              <input
                type="text"
                placeholder="Multiple day pilgrimage, school / college trip, corporate event, luggage requirements..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
              />
            </div>

            <div className="bg-brand-surface p-3 rounded-xl border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <span>{BUSINESS_CONFIG.disclaimers.acPolicy}</span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-500">
                Direct WhatsApp enquiry with Lavanya Tours & Travels team.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider shadow-cta-orange hover:shadow-lg transition-all"
              >
                <span>REQUEST BUS RENTAL QUOTE</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
