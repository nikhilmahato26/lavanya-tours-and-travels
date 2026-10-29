import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Compass, Shield, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-24 md:pb-12 border-t-4 border-brand-orange relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-brand-blue to-brand-orange shadow-lg flex-shrink-0">
                <img
                  src="/images/logo/logo-original.jpg"
                  alt="Lavanya Tours & Travels Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                  LAVANYA
                </h3>
                <p className="text-xs font-semibold tracking-wider text-brand-gold uppercase">
                  TOURS & TRAVELS
                </p>
                <p className="text-[10px] text-gray-300">
                  OPC PVT LTD • MYSORE
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              Based in Mysore, Karnataka, <strong className="text-white font-medium">Lavanya Tours and Travels OPC Pvt Ltd</strong> provides reliable travel enquiries and vehicle rental options for families, corporate groups, and tourists exploring South and North India.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-brand-gold font-medium">
              <Compass className="w-4 h-4 text-brand-orange" />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/10 text-gray-200 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AC & Non-AC Vehicles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/10 text-gray-200 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-brand-orange" /> Mysore Based Agency
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-4 border-l-2 border-brand-orange pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-brand-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tour-packages')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bus-rentals')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Bus Rentals
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('payment-details')}
                  className="hover:text-brand-gold transition-colors text-brand-gold font-semibold flex items-center gap-1.5"
                >
                  <span>Bank & QR Payment</span>
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded">UPI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Vehicles */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-4 border-l-2 border-brand-blue pl-2.5">
              Our Vehicles & Rates
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection('fleet', { vehicle: 'Toyota Etios (Sedan)' })}
                  className="hover:text-brand-gold transition-colors text-left flex items-center justify-between w-full gap-2"
                >
                  <span>Sedan (Etios)</span>
                  <span className="text-[11px] text-brand-gold font-bold">₹12/km • ₹3.3k/d</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet', { vehicle: 'Toyota Innova' })}
                  className="hover:text-brand-gold transition-colors text-left flex items-center justify-between w-full gap-2"
                >
                  <span>Toyota Innova</span>
                  <span className="text-[11px] text-brand-gold font-bold">₹15/km • ₹4.9k/d</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet', { vehicle: 'Toyota Innova Crysta' })}
                  className="hover:text-brand-gold transition-colors text-left flex items-center justify-between w-full gap-2"
                >
                  <span>Innova Crysta</span>
                  <span className="text-[11px] text-brand-gold font-bold">₹18/km • ₹5.2k/d</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet', { vehicle: 'Tempo Traveller' })}
                  className="hover:text-brand-gold transition-colors text-left flex items-center justify-between w-full gap-2"
                >
                  <span>Tempo Traveller</span>
                  <span className="text-[11px] text-brand-gold font-bold">₹22/km • ₹6.5k/d</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet', { vehicle: 'Force Urbania — 12 Seater' })}
                  className="hover:text-brand-gold transition-colors text-left flex items-center justify-between w-full gap-2"
                >
                  <span>Force Urbania</span>
                  <span className="text-[11px] text-brand-gold font-bold">₹40/km • ₹12.7k/d</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bus-rentals', { vehicle: '21-Seater Bus' })}
                  className="hover:text-brand-gold transition-colors text-left"
                >
                  21–49 Seat Bus Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('bus-rentals', { vehicle: 'Volvo Bus' })}
                  className="hover:text-brand-gold transition-colors text-left"
                >
                  Volvo Bus
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Popular Destinations */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-4 border-l-2 border-brand-orange pl-2.5">
              Tour Packages
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: 'Mysore Heritage Tour', val: 'Mysore Heritage Tour Package' },
                { label: 'Coorg Coffee & Falls Tour', val: 'Coorg Tour Package' },
                { label: 'Chikmagalur Peaks Tour', val: 'Chikmagalur Tour Package' },
                { label: 'Kerala & Munnar Tour', val: 'Best of Kerala Tour Package' },
                { label: 'Wayanad Nature Escape', val: 'Wayanad Escape Tour Package' },
                { label: 'Ooty & Nilgiri Tour', val: 'Ooty & Coonoor Hill Station Tour' },
                { label: 'Kodaikanal Hill Tour', val: 'Kodaikanal Princess of Hills Tour' },
                { label: 'Pondicherry French Tour', val: 'Pondicherry French Heritage Tour' },
              ].map((dest) => (
                <li key={dest.val}>
                  <button
                    onClick={() => scrollToSection('booking-form', { destination: dest.val })}
                    className="hover:text-brand-gold transition-colors text-left text-xs"
                  >
                    {dest.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300 border-b border-white/10">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Registered Address</p>
              <p className="text-gray-300 text-xs mt-0.5">{BUSINESS_CONFIG.address.full}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Direct Phone Numbers</p>
              <div className="flex flex-col text-xs mt-0.5 space-y-0.5">
                <a href={`tel:${BUSINESS_CONFIG.phones.primaryRaw}`} className="hover:text-brand-gold">
                  Primary: {BUSINESS_CONFIG.phones.primary}
                </a>
                <a href={`tel:${BUSINESS_CONFIG.phones.secondaryRaw}`} className="hover:text-brand-gold">
                  Secondary: {BUSINESS_CONFIG.phones.secondary}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Email Enquiries</p>
              <div className="flex flex-col text-xs mt-0.5 space-y-0.5">
                <a href={`mailto:${BUSINESS_CONFIG.emails.primary}`} className="hover:text-brand-gold truncate">
                  {BUSINESS_CONFIG.emails.primary}
                </a>
                <a href={`mailto:${BUSINESS_CONFIG.emails.secondary}`} className="hover:text-brand-gold truncate">
                  {BUSINESS_CONFIG.emails.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {BUSINESS_CONFIG.copyrightYear} {BUSINESS_CONFIG.officialName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">Mysore, Karnataka, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-orange" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
