import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Calendar, MapPin, Users, Car, Phone, Mail, User, Info, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildCompleteBookingMessage, openWhatsApp } from '../../utils/whatsapp';

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid 10-digit mobile number' }),
  email: z.string().email({ message: 'Invalid email address' }).optional().or(z.literal('')),
  bookingType: z.string().min(1, { message: 'Select a booking type' }),
  pickup: z.string().min(2, { message: 'Pickup location is required' }),
  destination: z.string().min(2, { message: 'Destination is required' }),
  travelDate: z.string().min(1, { message: 'Travel date is required' }),
  returnDate: z.string().optional(),
  passengers: z.string().min(1, { message: 'Number of passengers is required' }),
  vehicle: z.string().optional(),
  acPreference: z.string().optional(),
  requirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const [submittedFeedback, setSubmittedFeedback] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      bookingType: 'Car Rental',
      vehicle: 'Toyota Innova Crysta',
      acPreference: 'AC Preferred',
      passengers: '4',
      pickup: 'Mysore',
      destination: '',
      requirements: '',
    },
  });

  useEffect(() => {
    const handlePrefill = (e: any) => {
      const detail = e.detail;
      if (detail) {
        if (detail.vehicle) setValue('vehicle', detail.vehicle);
        if (detail.destination) setValue('destination', detail.destination);
        if (detail.bookingType) setValue('bookingType', detail.bookingType);
      }
    };
    window.addEventListener('prefill-booking', handlePrefill);
    return () => window.removeEventListener('prefill-booking', handlePrefill);
  }, [setValue]);

  const onSubmit = (data: BookingFormData) => {
    const message = buildCompleteBookingMessage({
      name: data.name,
      phone: data.phone,
      email: data.email,
      bookingType: data.bookingType,
      pickup: data.pickup,
      destination: data.destination,
      travelDate: data.travelDate,
      returnDate: data.returnDate,
      passengers: data.passengers,
      vehicle: data.vehicle,
      acPreference: data.acPreference,
      requirements: data.requirements,
    });

    setSubmittedFeedback('Opening WhatsApp with your booking details...');
    setTimeout(() => {
      openWhatsApp(message);
      setSubmittedFeedback(null);
    }, 400);
  };

  const bookingTypes = [
    "Car Rental",
    "Tempo Traveller",
    "Force Urbania",
    "Bus Rental",
    "South India Tour",
    "North India Tour",
    "Customized Travel",
  ];

  const vehicles = [
    "Toyota Etios",
    "Toyota Innova",
    "Toyota Innova Crysta",
    "Tempo Traveller",
    "Force Urbania — 12 Seater",
    "Force Urbania — up to 16 Seater",
    "21-Seater Bus",
    "Bus — up to 49 Seats",
    "Volvo Bus",
    "Any Available Vehicle",
  ];

  return (
    <section id="booking-form" className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-200">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full">
              Complete Enquiry Form
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
              LET'S PLAN YOUR NEXT JOURNEY
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fill in your trip details below. Submitting will prepare a detailed enquiry directly to our WhatsApp booking desk for quick verification and pricing.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Anand Sharma"
                    {...register('name')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    {...register('phone')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    {...register('email')}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Booking Type */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Booking Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('bookingType')}
                  className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white cursor-pointer"
                >
                  {bookingTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.bookingType && <p className="text-red-500 text-xs mt-1">{errors.bookingType.message}</p>}
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
                    placeholder="e.g. Mysore Railway Station / Gangothri Layout"
                    {...register('pickup')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.pickup ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup.message}</p>}
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
                    placeholder="e.g. Coorg, Ooty, Madurai, Kodaikanal..."
                    {...register('destination')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.destination ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
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
                    {...register('travelDate')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.travelDate ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.travelDate && <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>}
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
                    {...register('returnDate')}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Number of Passengers <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. 4, 12, 16, 35..."
                    {...register('passengers')}
                    className={`w-full pl-10 pr-3 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.passengers ? 'border-red-400 bg-red-50/40' : 'border-gray-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.passengers && <p className="text-red-500 text-xs mt-1">{errors.passengers.message}</p>}
              </div>

              {/* Preferred Vehicle */}
              <div>
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                  Preferred Vehicle (Optional)
                </label>
                <div className="relative">
                  <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    {...register('vehicle')}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white cursor-pointer"
                  >
                    {vehicles.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* AC / Non-AC Preference */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                AC / Non-AC Preference (Optional)
              </label>
              <select
                {...register('acPreference')}
                className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white cursor-pointer"
              >
                <option value="AC Preferred">AC Preferred</option>
                <option value="Non-AC Preferred">Non-AC Preferred</option>
                <option value="Subject to Availability">Subject to Availability</option>
              </select>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Additional Requirements / Special Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention sightseeing stops, airport transfer details, child seating requirements, or specific pickup time..."
                {...register('requirements')}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none"
              />
            </div>

            {/* Important Disclaimer Banner */}
            <div className="bg-brand-surface p-3.5 rounded-xl border border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-brand-navy">Booking & Air Conditioning Terms:</p>
                <p className="text-gray-500 mt-0.5">{BUSINESS_CONFIG.disclaimers.acPolicy}</p>
                <p className="text-gray-400 mt-0.5 italic">
                  Note: Submitting this form generates an enquiry to discuss dates and vehicle availability. Final confirmation and pricing require verification with Lavanya Tours & Travels.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-sm uppercase tracking-wider shadow-cta-orange hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <span>SEND BOOKING ENQUIRY</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            {submittedFeedback && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{submittedFeedback}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
