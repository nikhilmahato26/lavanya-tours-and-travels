import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const Contact: React.FC = () => {
  const mapSearchQuery = encodeURIComponent("LIG 143, 2nd Main, 3rd Cross, Gangothri Layout, Mysore, Karnataka, India");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            VISIT OR CONTACT LAVANYA TOURS & TRAVELS
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Reach out to our Mysore office directly by telephone, WhatsApp, or email for quick tour quotes and vehicle reservations.
          </p>
        </div>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Business Card */}
            <div className="bg-brand-surface rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-brand-blue to-brand-orange shadow-sm flex-shrink-0">
                  <img
                    src="/images/logo/logo-original.jpg"
                    alt="Lavanya Tours & Travels"
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-brand-navy leading-snug">
                    {BUSINESS_CONFIG.officialName}
                  </h3>
                  <p className="text-xs text-brand-blue font-semibold">Mysore, Karnataka</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-navy text-xs uppercase tracking-wider">Office Address</p>
                  <p className="mt-0.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {BUSINESS_CONFIG.address.full}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-navy text-xs uppercase tracking-wider">Direct Phone Numbers</p>
                  <div className="mt-1 space-y-1 text-xs sm:text-sm">
                    <p>
                      <strong className="text-brand-navy">Primary: </strong>
                      <a href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`} className="text-brand-blue hover:text-brand-orange font-semibold">
                        {BUSINESS_CONFIG.phones.primary}
                      </a>
                    </p>
                    <p>
                      <strong className="text-brand-navy">Secondary: </strong>
                      <a href={`tel:${BUSINESS_CONFIG.phones.secondary.replace(/\s+/g, '')}`} className="text-brand-blue hover:text-brand-orange font-semibold">
                        {BUSINESS_CONFIG.phones.secondary}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-navy text-xs uppercase tracking-wider">Email Enquiries</p>
                  <div className="mt-1 space-y-1 text-xs sm:text-sm">
                    <p>
                      <strong className="text-brand-navy">Primary: </strong>
                      <a href={`mailto:${BUSINESS_CONFIG.emails.primary}`} className="text-brand-blue hover:underline font-medium break-all">
                        {BUSINESS_CONFIG.emails.primary}
                      </a>
                    </p>
                    <p>
                      <strong className="text-brand-navy">Secondary: </strong>
                      <a href={`mailto:${BUSINESS_CONFIG.emails.secondary}`} className="text-brand-blue hover:underline font-medium break-all">
                        {BUSINESS_CONFIG.emails.secondary}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Primary Phone</span>
              </a>

              <a
                href={BUSINESS_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Directions */}
          <div className="lg:col-span-7 bg-brand-surface rounded-2xl overflow-hidden border border-gray-200/80 shadow-md flex flex-col">
            <div className="p-4 sm:p-5 bg-white border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-extrabold text-base text-brand-navy">
                  Location on Google Maps
                </h4>
                <p className="text-xs text-gray-500">
                  Gangothri Layout, Mysore, Karnataka
                </p>
              </div>

              <a
                href={BUSINESS_CONFIG.urls.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-blue-light text-brand-blue hover:bg-brand-blue hover:text-white transition-colors text-xs font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative w-full h-80 sm:h-96 bg-gray-100">
              <iframe
                title="Lavanya Tours & Travels Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-white text-xs text-gray-500 flex items-center justify-between">
              <span>Searched by official address: LIG 143, 2nd Main, 3rd Cross, Gangothri Layout, Mysore</span>
              <span className="font-semibold text-brand-navy hidden sm:inline">Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
