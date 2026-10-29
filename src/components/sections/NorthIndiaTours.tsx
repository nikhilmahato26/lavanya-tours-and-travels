import React, { useState } from 'react';
import { Compass, Send, Users, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { openWhatsApp, buildTourEnquiryMessage } from '../../utils/whatsapp';

export const NorthIndiaTours: React.FC = () => {
  const [preferredCircuit, setPreferredCircuit] = useState('Customized North India Itinerary');
  const [dates, setDates] = useState('');
  const [groupSize, setGroupSize] = useState('Family / Group');

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildTourEnquiryMessage({
      destination: `North India Tour Enquiry (${preferredCircuit})`,
      travelDates: dates,
      passengers: groupSize,
      requirements: `Enquiring for North India travel: ${preferredCircuit}. Group size: ${groupSize}.`,
    });
    openWhatsApp(msg);
  };

  const enquiryTypes = [
    {
      title: "North India Travel Enquiries",
      desc: "Discuss your travel aspirations across North India with our booking desk.",
      type: "General North India Tour",
    },
    {
      title: "Family Tour Enquiries",
      desc: "Comfortable and coordinated family tours with vehicle and route assistance.",
      type: "North India Family Tour",
    },
    {
      title: "Group Tour Enquiries",
      desc: "Vehicle rentals and coordinated arrangements for large family or corporate groups.",
      type: "North India Group Tour",
    },
    {
      title: "Customized Itinerary Enquiries",
      desc: "Flexible day-by-day travel schedules tailored around your group's exact needs.",
      type: "Custom North India Itinerary",
    },
  ];

  return (
    <section id="north-india-tours" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-gold">
                  <Compass className="w-3.5 h-3.5 text-brand-orange" />
                  <span>EXPLORE NORTH INDIA</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                  YOUR NORTH INDIA JOURNEY STARTS HERE
                </h2>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Planning a journey across North India? Share your preferred destinations, dates, and group size with Lavanya Tours & Travels to enquire about customized travel arrangements.
                </p>
              </div>

              {/* 4 Enquiry Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {enquiryTypes.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setPreferredCircuit(item.type)}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      preferredCircuit === item.type
                        ? 'bg-white/20 border-brand-gold text-white shadow-sm'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <p className="font-bold text-xs text-white">{item.title}</p>
                    <p className="text-[11px] text-gray-300 mt-1 leading-snug">{item.desc}</p>
                  </button>
                ))}
              </div>

              {/* Form Input Strip */}
              <form onSubmit={handleEnquiry} className="bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/15 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-brand-gold uppercase tracking-wider mb-1">
                      Preferred Travel Dates
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g. November 2026 / 10 days"
                        value={dates}
                        onChange={(e) => setDates(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/90 text-brand-navy text-xs focus:outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-brand-gold uppercase tracking-wider mb-1">
                      Group Size / Passengers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g. 6 Members / Tempo Traveller"
                        value={groupSize}
                        onChange={(e) => setGroupSize(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/90 text-brand-navy text-xs focus:outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] text-gray-300 italic">
                    Customized arrangements tailored upon discussion.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all cursor-pointer"
                  >
                    <span>ENQUIRE ABOUT NORTH INDIA TOURS</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Visual Imagery Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src="/images/destinations/north-india.jpg"
                alt="North India Scenic Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-navy/80 lg:to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/85 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="flex items-center gap-2 text-brand-gold text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Custom Tour Planning</span>
                </div>
                <p className="text-xs text-gray-200">
                  Discuss with our Mysore team to coordinate vehicle options, pickup logistics, and travel itinerary across North India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
