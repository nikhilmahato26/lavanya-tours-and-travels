import React, { useState, useEffect } from 'react';
import { Send, Calendar, MapPin, Users, Car, Phone, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildVehicleBookingMessage, openWhatsApp } from '../../utils/whatsapp';

export const BookingPanel: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    vehicle: 'Toyota Innova Crysta',
    passengers: '4',
    acPreference: 'AC Preferred',
    requirements: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePrefill = (e: CustomEvent) => {
      const detail = e.detail;
      if (detail) {
        let v = detail.vehicle;
        if (v && (v === 'Toyota Etios' || v.includes('Etios') || v.includes('Sedan'))) {
          v = 'Toyota Etios (Sedan)';
        }
        setFormData((prev) => ({
          ...prev,
          vehicle: v || prev.vehicle,
          destination: detail.destination || prev.destination,
        }));
      }
    };
    window.addEventListener('prefill-booking' as any, handlePrefill as any);
    return () => window.removeEventListener('prefill-booking' as any, handlePrefill as any);
  }, []);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit mobile number is required';
    if (!formData.pickup.trim()) errs.pickup = 'Enter pickup location';
    if (!formData.destination.trim()) errs.destination = 'Enter destination';
    if (!formData.travelDate) errs.travelDate = 'Select travel date';
    if (!formData.passengers) errs.passengers = 'Enter passenger count';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildVehicleBookingMessage({
      name: formData.name,
      phone: formData.phone,
      vehicle: formData.vehicle,
      passengers: formData.passengers,
      pickup: formData.pickup,
      destination: formData.destination,
      travelDate: formData.travelDate,
      returnDate: formData.returnDate || 'Not specified',
      acPreference: formData.acPreference,
      requirements: formData.requirements,
    });

    setStatusMessage('Redirecting to WhatsApp to send your enquiry...');
    setTimeout(() => {
      openWhatsApp(message);
      setStatusMessage(null);
    }, 400);
  };

  const vehicleOptions = [
    { value: "Toyota Etios (Sedan)", label: "Sedan (Etios) — ₹12/km | ₹3,300/day" },
    { value: "Toyota Innova", label: "Toyota Innova — ₹15/km | ₹4,900/day" },
    { value: "Toyota Innova Crysta", label: "Toyota Innova Crysta — ₹18/km | ₹5,200/day" },
    { value: "Tempo Traveller", label: "Tempo Traveller — ₹22/km | ₹6,500/day" },
    { value: "Force Urbania — 12 Seater", label: "Force Urbania (12 Seater) — ₹40/km | ₹12,700/day" },
    { value: "Force Urbania — up to 16 Seater", label: "Force Urbania (16 Seater) — ₹40/km | ₹12,700/day" },
    { value: "21-Seater Bus", label: "21-Seater Bus — On Enquiry" },
    { value: "Bus — up to 49 Seats", label: "Bus (up to 49 Seats) — On Enquiry" },
    { value: "Volvo Bus", label: "Volvo Bus — On Enquiry" },
    { value: "Any Available Vehicle", label: "Any Available Vehicle" },
  ];

  return (
    <section id="booking-panel" className="relative -mt-8 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Top Decorative Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full">
              Quick Booking Enquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading mt-2">
              Get Your Travel & Vehicle Quote
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select your vehicle or route. All pricing and availability will be verified directly with our team.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-brand-navy bg-brand-surface px-4 py-2.5 rounded-xl border border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Direct WhatsApp & Phone Consultation</span>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
                  }`}
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                  placeholder="e.g. Mysore / Railway Stn"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.pickup ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
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
                  placeholder="e.g. Coorg, Ooty, Madurai..."
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.destination ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
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
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.travelDate ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
                  }`}
                />
              </div>
              {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate}</p>}
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Return Date (Optional)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-brand-blue text-sm focus:outline-none transition-colors bg-white"
                />
              </div>
            </div>

            {/* Vehicle Type Dropdown */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Vehicle Type
              </label>
              <div className="relative">
                <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-brand-blue text-sm focus:outline-none transition-colors bg-white appearance-none cursor-pointer"
                >
                  {vehicleOptions.map((v) => (
                    <option key={v.value} value={v.value}>{v.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Number of Passengers */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Passengers <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. 4, 12, 25..."
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                    errors.passengers ? 'border-red-400 bg-red-50/50' : 'border-gray-200 focus:border-brand-blue bg-white'
                  }`}
                />
              </div>
              {errors.passengers && <p className="text-red-500 text-xs mt-1">{errors.passengers}</p>}
            </div>
          </div>

          {/* AC / Non-AC Preference and Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                AC / Non-AC Preference
              </label>
              <select
                value={formData.acPreference}
                onChange={(e) => setFormData({ ...formData, acPreference: e.target.value })}
                className="w-full px-3 py-3 rounded-xl border border-gray-200 focus:border-brand-blue text-sm focus:outline-none transition-colors bg-white cursor-pointer"
              >
                <option value="AC Preferred">AC Preferred</option>
                <option value="Non-AC Preferred">Non-AC Preferred</option>
                <option value="Subject to Availability">Subject to Availability</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Additional Requirements / Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="Luggage details, multiple stops, child seats, or special route requirements..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 focus:border-brand-blue text-sm focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>

          {/* Important Disclaimers */}
          <div className="bg-brand-surface p-3.5 rounded-xl border border-gray-200/80 text-xs text-gray-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
              <span>{BUSINESS_CONFIG.disclaimers.acPolicy}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                * Toll, parking & tax extra
              </span>
              <a
                href="#payment-details"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('payment-details')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-brand-blue hover:text-brand-orange font-bold underline"
              >
                Bank & QR Details
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-gray-500">
              Free price enquiry. Submitting will prepare your enquiry for instant discussion on WhatsApp.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-sm uppercase tracking-wider shadow-cta-orange hover:shadow-lg transition-all duration-300 transform active:scale-98"
            >
              <span>GET A FREE QUOTE</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          {statusMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
