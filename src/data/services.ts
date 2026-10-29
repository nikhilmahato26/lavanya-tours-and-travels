export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  vehicleType?: string;
  bookingType: string;
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "car-rental",
    title: "Car Rental",
    description: "Enquire about Toyota Etios, Toyota Innova, and Innova Crysta.",
    ctaText: "Enquire About Cars",
    vehicleType: "Toyota Innova Crysta",
    bookingType: "Car Rental",
    icon: "Car",
  },
  {
    id: "tempo-traveller-rental",
    title: "Tempo Traveller Rental",
    description: "Explore group transportation options with Tempo Traveller.",
    ctaText: "Enquire About Tempo Traveller",
    vehicleType: "Tempo Traveller",
    bookingType: "Tempo Traveller",
    icon: "Users",
  },
  {
    id: "force-urbania-rental",
    title: "Force Urbania Rental",
    description: "Enquire about Force Urbania vehicles for 12 to 16 passengers.",
    ctaText: "Enquire About Urbania",
    vehicleType: "Force Urbania — 12 Seater",
    bookingType: "Force Urbania",
    icon: "ShieldCheck",
  },
  {
    id: "bus-rental",
    title: "Bus Rental",
    description: "Explore bus options from 21-seat vehicles to larger buses.",
    ctaText: "Enquire About Buses",
    vehicleType: "21-Seater Bus",
    bookingType: "Bus Rental",
    icon: "Bus",
  },
  {
    id: "volvo-bus-enquiries",
    title: "Volvo Bus Enquiries",
    description: "Contact us to discuss Volvo bus availability and travel requirements.",
    ctaText: "Discuss Volvo Bus",
    vehicleType: "Volvo Bus",
    bookingType: "Bus Rental",
    icon: "Sparkles",
  },
  {
    id: "south-india-tours",
    title: "South India Tours",
    description: "Explore destinations across South India.",
    ctaText: "Explore South India",
    bookingType: "South India Tour",
    icon: "Compass",
  },
  {
    id: "north-india-tours",
    title: "North India Tours",
    description: "Enquire about customized journeys across North India.",
    ctaText: "Explore North India",
    bookingType: "North India Tour",
    icon: "MapPin",
  },
  {
    id: "customized-group-travel",
    title: "Customized Group Travel",
    description: "Share your group size, destination, and travel requirements.",
    ctaText: "Plan Group Travel",
    bookingType: "Customized Travel",
    icon: "CalendarCheck",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "wide-selection",
    title: "Wide Vehicle Selection",
    description: "Cars, Tempo Travellers, Force Urbania, and buses.",
    icon: "Truck",
  },
  {
    id: "group-options",
    title: "Family & Group Options",
    description: "Explore vehicles for different travel group sizes.",
    icon: "UsersRound",
  },
  {
    id: "north-south-tours",
    title: "South & North India Tours",
    description: "Enquire about travel across both regions.",
    icon: "Map",
  },
  {
    id: "ac-preferences",
    title: "AC & Non-AC Preferences",
    description: "Discuss suitable vehicle options for your journey.",
    icon: "Fan",
  },
  {
    id: "direct-assistance",
    title: "Direct Booking Assistance",
    description: "Contact the company directly by phone, WhatsApp, or email.",
    icon: "PhoneCall",
  },
];

export const BOOKING_STEPS = [
  {
    step: "01",
    title: "Choose Your Travel Plan",
    description: "Select a vehicle or tour destination.",
    icon: "Route",
  },
  {
    step: "02",
    title: "Share Your Details",
    description: "Provide your travel dates, route, and group size.",
    icon: "FileEdit",
  },
  {
    step: "03",
    title: "Request a Quote",
    description: "Send your enquiry through WhatsApp or phone.",
    icon: "MessageSquare",
  },
  {
    step: "04",
    title: "Confirm Your Booking",
    description: "Discuss availability, final prices, and applicable terms with the business.",
    icon: "CheckCircle2",
  },
];
