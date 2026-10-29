export interface Vehicle {
  id: string;
  name: string;
  category: string;
  filterCategory: 'cars' | 'tempo-traveller' | 'force-urbania' | 'buses';
  capacity?: string;
  description: string;
  image: string;
  pricing: string;
  acOption: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Car Rental",
    filterCategory: "cars",
    description: "Enquire about Toyota Etios for your travel requirements.",
    image: "/images/vehicles/toyota-etios.png",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    category: "Family Travel",
    filterCategory: "cars",
    description: "Explore Toyota Innova for your planned journeys.",
    image: "/images/vehicles/toyota-innova.jpg",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium Family Travel",
    filterCategory: "cars",
    description: "Enquire about Toyota Innova Crysta for your travel requirements.",
    image: "/images/vehicles/toyota-innova-crysta.jpg",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Transportation",
    filterCategory: "tempo-traveller",
    description: "Explore Tempo Traveller options for family and group journeys.",
    image: "/images/vehicles/tempo-traveller.jpg",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "force-urbania-12",
    name: "Force Urbania — 12 Seater",
    category: "Premium Group Transportation",
    filterCategory: "force-urbania",
    capacity: "12 to 16 seats",
    description: "Enquire about Force Urbania vehicles for group travel.",
    image: "/images/vehicles/force-urbania-12.jpg",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "force-urbania-16",
    name: "Force Urbania — up to 16 Seater",
    category: "Premium Group Transportation",
    filterCategory: "force-urbania",
    capacity: "12 to 16 seats",
    description: "Enquire about Force Urbania vehicles for group travel.",
    image: "/images/vehicles/force-urbania-16.png",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "bus-21-seater",
    name: "21-Seater Bus",
    category: "Group Bus Rental",
    filterCategory: "buses",
    capacity: "21 seats",
    description: "Contact us about bus transportation for your group.",
    image: "/images/vehicles/bus-21-seater.jpg",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "bus-large-49",
    name: "Large Bus",
    category: "Group Transportation",
    filterCategory: "buses",
    capacity: "Options up to 49 seats",
    description: "Enquire about larger buses for group travel requirements.",
    image: "/images/vehicles/bus-49-seater.png",
    pricing: "Contact for Pricing",
    acOption: "AC / Non-AC on request",
  },
  {
    id: "volvo-bus",
    name: "Volvo Bus",
    category: "Volvo Bus Rental",
    filterCategory: "buses",
    description: "Contact us to discuss Volvo bus availability, capacity, and booking options.",
    image: "/images/vehicles/volvo-bus.png",
    pricing: "Contact for Pricing",
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
