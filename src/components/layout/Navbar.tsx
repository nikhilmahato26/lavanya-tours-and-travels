import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { scrollToSection } from '../../utils/contact';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Tours', href: '#tour-packages' },
    { name: 'Bus Rentals', href: '#bus-rentals' },
    { name: 'Pay Online', href: '#payment-details' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-brand-blue to-brand-orange shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo/logo-original.jpg"
                  alt="Lavanya Tours & Travels Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-brand-navy leading-none">
                  LAVANYA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand-blue uppercase leading-tight mt-0.5">
                  TOURS & TRAVELS
                </span>
                <span className="text-[9px] text-gray-500 tracking-wider hidden sm:block">
                  OPC PVT LTD • MYSORE
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-brand-dark hover:text-brand-blue transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Phone quick link */}
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-xs font-semibold text-brand-navy bg-brand-blue-light hover:bg-brand-blue/10 px-3 py-2 rounded-lg transition-colors border border-brand-blue/20"
                title="Call Primary Number"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span className="hidden xl:inline">{BUSINESS_CONFIG.phones.primary}</span>
                <span className="xl:hidden">Call Us</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={BUSINESS_CONFIG.urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-600" />
              </a>

              {/* Primary Book Now CTA */}
              <button
                onClick={() => scrollToSection('booking-form')}
                className="bg-gradient-to-r from-brand-blue to-brand-royal text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:from-brand-blue hover:to-brand-orange transition-all duration-300 flex items-center gap-1.5"
              >
                <span>BOOK NOW</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`}
                className="p-2 text-brand-blue bg-brand-blue-light rounded-lg sm:hidden"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-navy hover:bg-gray-100 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-brand-dark hover:bg-brand-blue-light hover:text-brand-blue transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-navy bg-brand-blue-light py-2.5 rounded-lg border border-brand-blue/20"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call {BUSINESS_CONFIG.phones.primary}</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 py-2.5 rounded-lg border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-600" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <button
                  onClick={() => {
                    scrollToSection('booking-form');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-orange text-white font-bold py-3 rounded-lg shadow-md text-sm uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
