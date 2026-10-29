export interface Vehicle {
  id: string;
  name: string;
  category: string;
  filterCategory: 'cars' | 'tempo-traveller' | 'force-urbania' | 'buses';
  capacity?: string;
  description: string;
  image: string;
  pricing: string;
  perDayPrice?: string;
  extraTerms?: string;
  acOption: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-etios",
    name: "Toyota Etios (Sedan)",
    category: "Sedan Car Rental",
    filterCategory: "cars",
    capacity: "4 Passengers + 1 Driver",
    description: "Comfortable and budget-friendly AC sedan ideal for city rides, airport transfers, and outstation trips.",
    image: "/images/vehicles/toyota-etios.png",
    pricing: "₹12 / km",
    perDayPrice: "₹3,300 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    category: "Family SUV",
    filterCategory: "cars",
    capacity: "6 to 7 Passengers",
    description: "Spacious, dependable 7-seater SUV with superior legroom and luggage space for comfortable family journeys.",
    image: "/images/vehicles/toyota-innova.jpg",
    pricing: "₹15 / km",
    perDayPrice: "₹4,900 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    filterCategory: "cars",
    capacity: "6 to 7 Passengers",
    description: "Executive luxury with plush captain seats, powerful AC, and ultra-smooth highway cruising experience.",
    image: "/images/vehicles/toyota-innova-crysta.jpg",
    pricing: "₹18 / km",
    perDayPrice: "₹5,200 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Transportation",
    filterCategory: "tempo-traveller",
    capacity: "12 to 17 Seats",
    description: "High roof, pushback seats, and ample luggage space for group pilgrimage, family functions, and team outings.",
    image: "/images/vehicles/tempo-traveller.jpg",
    pricing: "₹22 / km",
    perDayPrice: "₹6,500 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "force-urbania-12",
    name: "Force Urbania — 12 Seater",
    category: "Luxury Van Rental",
    filterCategory: "force-urbania",
    capacity: "12 Seats",
    description: "State-of-the-art luxury group travel with reclining seats, individual AC vents, and panoramic windows.",
    image: "/images/vehicles/force-urbania-12.jpg",
    pricing: "₹40 / km",
    perDayPrice: "₹12,700 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "force-urbania-16",
    name: "Force Urbania — up to 16 Seater",
    category: "Luxury Van Rental",
    filterCategory: "force-urbania",
    capacity: "Up to 16 Seats",
    description: "World-class European styling, individual air conditioning, and supreme comfort for corporate and VIP group travel.",
    image: "/images/vehicles/force-urbania-16.png",
    pricing: "₹40 / km",
    perDayPrice: "₹12,700 / day",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "bus-21-seater",
    name: "21-Seater Bus",
    category: "Group Bus Rental",
    filterCategory: "buses",
    capacity: "21 seats",
    description: "Comfortable mini bus rental for weddings, institutional events, pilgrimage, and group excursions.",
    image: "/images/vehicles/bus-21-seater.jpg",
    pricing: "Contact for Pricing",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "bus-large-49",
    name: "Large Bus",
    category: "Group Transportation",
    filterCategory: "buses",
    capacity: "Options up to 49 seats",
    description: "Spacious heavy-duty tourist buses for large groups, conventions, school, and pilgrimage tours.",
    image: "/images/vehicles/bus-49-seater.png",
    pricing: "Contact for Pricing",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "volvo-bus",
    name: "Volvo Bus",
    category: "Volvo Bus Rental",
    filterCategory: "buses",
    description: "Ultra-luxury air-suspension Volvo coach for premium long-distance group tours across India.",
    image: "/images/vehicles/volvo-bus.png",
    pricing: "Contact for Pricing",
    extraTerms: "Toll, parking, tax extra",
    acOption: "AC / Non-AC on request",
  },
];

export const VEHICLE_FILTER_TABS = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'cars', label: 'Cars' },
  { id: 'tempo-traveller', label: 'Tempo Traveller' },
  { id: 'force-urbania', label: 'Force Urbania' },
  { id: 'buses', label: 'Buses' },
] as const;
