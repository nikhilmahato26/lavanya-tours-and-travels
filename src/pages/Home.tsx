import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { BookingPanel } from '../components/sections/BookingPanel';
import { Fleet } from '../components/sections/Fleet';
import { Destinations } from '../components/sections/Destinations';
import { SouthIndiaTours } from '../components/sections/SouthIndiaTours';
import { NorthIndiaTours } from '../components/sections/NorthIndiaTours';
import { BusRentals } from '../components/sections/BusRentals';
import { UrbaniaSection } from '../components/sections/UrbaniaSection';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { HowItWorks } from '../components/sections/HowItWorks';
import { About } from '../components/sections/About';
import { BookingForm } from '../components/sections/BookingForm';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { MobileActionBar } from '../components/layout/MobileActionBar';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-brand-dark selection:bg-brand-orange selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Premium Hero */}
        <Hero />

        {/* 3. Quick Booking Enquiry */}
        <BookingPanel />

        {/* 4. Our Fleet */}
        <Fleet />

        {/* 5. Popular South India Destinations */}
        <Destinations />

        {/* 6. South India Tours */}
        <SouthIndiaTours />

        {/* 7. North India Tours */}
        <NorthIndiaTours />

        {/* 8. Bus Rental Section */}
        <BusRentals />

        {/* 9. Force Urbania Section */}
        <UrbaniaSection />

        {/* 10. Our Services */}
        <Services />

        {/* 11. Why Choose Us */}
        <WhyChooseUs />

        {/* 12. How Booking Works */}
        <HowItWorks />

        {/* 13. About Us */}
        <About />

        {/* 14. Complete Booking Form */}
        <BookingForm />

        {/* 15. Contact and Location */}
        <Contact />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Floating WhatsApp Button (Desktop) */}
      <WhatsAppButton />

      {/* 18. Mobile Sticky Booking Bar */}
      <MobileActionBar />
    </div>
  );
};
