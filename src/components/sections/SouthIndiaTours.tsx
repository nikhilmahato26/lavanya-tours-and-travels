import React, { useState } from 'react';
import { Compass, CheckSquare, Square, Send, MapPin, Sparkles } from 'lucide-react';
import { SOUTH_INDIA_STATES } from '../../data/destinations';
import { openWhatsApp, buildTourEnquiryMessage } from '../../utils/whatsapp';

export const SouthIndiaTours: React.FC = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    'Mysore',
    'Coorg',
    'Wayanad',
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState('4');
  const [travelDates, setTravelDates] = useState('');

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const handlePlanTour = (e: React.FormEvent) => {
    e.preventDefault();
    const destList = selectedDestinations.length > 0
      ? selectedDestinations.join(', ')
      : 'Custom Regional Tour';

    const msg = buildTourEnquiryMessage({
      destination: `South India Circuit: ${destList}`,
      name: name,
      phone: phone,
      passengers: passengers,
      travelDates: travelDates,
      requirements: `Selected destinations across Karnataka, Kerala, Tamil Nadu, Pondicherry: ${destList}`,
    });

    openWhatsApp(msg);
  };

  const allDestinationsByState = [
    {
      state: 'Karnataka',
      color: 'text-brand-blue border-brand-blue/30',
      places: ['Mysore', 'Coorg', 'Chikmagalur', 'Bandipur & Nagarhole', 'Mangalore'],
    },
    {
      state: 'Kerala',
      color: 'text-emerald-700 border-emerald-300',
      places: ['Munnar', 'Wayanad', 'Thekkady', 'Alleppey (Houseboat)', 'Varkala & Kovalam'],
    },
    {
      state: 'Tamil Nadu',
      color: 'text-amber-700 border-amber-300',
      places: ['Ooty & Coonoor', 'Kodaikanal', 'Madurai', 'Coimbatore & Isha', 'Rameshwaram & Kanyakumari'],
    },
    {
      state: 'Pondicherry',
      color: 'text-rose-700 border-rose-300',
      places: ['Pondicherry (White Town)', 'Auroville & Matrimandir', 'Paradise Beach'],
    },
  ];

  return (
    <section id="south-india-tours" className="py-20 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light border border-brand-blue/20 text-xs font-bold uppercase tracking-wider text-brand-navy">
            <Compass className="w-3.5 h-3.5 text-brand-blue" />
            <span>Multi-State Regional Tour Planner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-heading tracking-tight">
            DISCOVER SOUTH INDIA & PONDICHERRY
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Choose destinations across <strong>Karnataka</strong>, <strong>Kerala</strong>, <strong>Tamil Nadu</strong>, and <strong>Pondicherry</strong> to build your customized tour itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: State Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-5">
              <h3 className="font-heading font-extrabold text-xl text-brand-navy flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                Featured States & Regions
              </h3>

              <div className="space-y-3.5">
                {SOUTH_INDIA_STATES.map((state) => (
                  <div key={state.name} className="p-3.5 rounded-xl bg-brand-surface border border-gray-100">
                    <h4 className="font-bold text-sm text-brand-navy flex items-center justify-between">
                      <span>{state.name}</span>
                      <span className="text-[10px] uppercase font-bold text-brand-blue bg-white px-2 py-0.5 rounded border border-gray-200">
                        Custom Route
                      </span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {state.destinations.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-gray-500 bg-brand-orange-light p-3.5 rounded-xl border border-brand-orange/20">
                <p className="font-bold text-brand-orange flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Flexible Doorstep Pickup in Mysore & Bangalore
                </p>
                <p className="mt-0.5">Every package enquiry is customized around your preferred dates, pickup spot, and vehicle selection.</p>
              </div>
            </div>

            {/* Visual Photo Card */}
            <div className="relative rounded-2xl overflow-hidden h-48 shadow-md">
              <img
                src="/images/destinations/south-india.jpg"
                alt="Scenic South India & Pondicherry Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-brand-gold uppercase">Custom circuits</p>
                <p className="font-heading font-bold text-base">Karnataka • Kerala • Tamil Nadu • Pondicherry</p>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Destination Tour Planner Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                Select Your Destinations
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Click any places below to add them into your personalized holiday enquiry.
              </p>
            </div>

            <form onSubmit={handlePlanTour} className="space-y-6">
              {/* Grouped by Region */}
              <div className="space-y-4">
                {allDestinationsByState.map((group) => (
                  <div key={group.state} className="space-y-1.5">
                    <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      {group.state} Destinations:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {group.places.map((place) => {
                        const isSelected = selectedDestinations.includes(place);
                        return (
                          <button
                            type="button"
                            key={place}
                            onClick={() => toggleDestination(place)}
                            className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all text-left border cursor-pointer ${
                              isSelected
                                ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                                : 'bg-gray-50 text-brand-dark border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4 flex-shrink-0 text-white" />
                            ) : (
                              <Square className="w-4 h-4 flex-shrink-0 text-gray-400" />
                            )}
                            <span className="truncate">{place}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Passenger & Travel Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Mobile Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Number of Passengers
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4, 8, 12, 20"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Approx Travel Dates
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next weekend / 15 Nov"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-brand-blue focus:outline-none bg-white"
                  />
                </div>
              </div>

              {/* Selected summary */}
              <div className="p-3.5 bg-brand-surface rounded-xl border border-gray-200 text-xs text-gray-700">
                <span className="font-bold text-brand-navy">Selected Circuit: </span>
                <span className="font-medium text-brand-blue">
                  {selectedDestinations.length > 0 ? selectedDestinations.join(' ➔ ') : 'None selected (General South India / Pondicherry Tour)'}
                </span>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-royal text-white font-bold text-xs uppercase tracking-wider shadow-cta-blue hover:from-brand-blue hover:to-brand-orange transition-all duration-300 cursor-pointer"
              >
                <span>PLAN MY SOUTH INDIA & PONDICHERRY TOUR</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
