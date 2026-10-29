export interface Destination {
  id: string;
  name: string;
  state: string;
  region: 'South India' | 'North India';
  description: string;
  image: string;
  ctaText: string;
  tag: string;
}

export const SOUTH_INDIA_DESTINATIONS: Destination[] = [
  {
    id: "coorg",
    name: "Coorg",
    state: "Karnataka",
    region: "South India",
    description: "Discover the scenic landscapes, coffee estates, and natural beauty of Coorg.",
    image: "/images/destinations/coorg.jpg",
    ctaText: "Enquire About Coorg Tour",
    tag: "Coffee Estates & Hills",
  },
  {
    id: "mangalore",
    name: "Mangalore",
    state: "Karnataka",
    region: "South India",
    description: "Explore the coastal charm and attractions of Mangalore.",
    image: "/images/destinations/mangalore.jpg",
    ctaText: "Enquire About Mangalore Tour",
    tag: "Coastal & Heritage",
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    region: "South India",
    description: "Discover the cultural and spiritual heritage of Madurai.",
    image: "/images/destinations/madurai.jpg",
    ctaText: "Enquire About Madurai Tour",
    tag: "Temple & Heritage City",
  },
  {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    region: "South India",
    description: "Explore Ooty's hill-station scenery and natural beauty.",
    image: "/images/destinations/ooty.jpg",
    ctaText: "Enquire About Ooty Tour",
    tag: "Nilgiri Mountain Queen",
  },
  {
    id: "mysore",
    name: "Mysore",
    state: "Karnataka",
    region: "South India",
    description: "Discover Mysore's famous heritage landmarks and attractions.",
    image: "/images/destinations/mysore.jpg",
    ctaText: "Enquire About Mysore Tour",
    tag: "Heritage & Royal Palaces",
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    region: "South India",
    description: "Explore Coimbatore and plan your preferred travel itinerary.",
    image: "/images/destinations/coimbatore.jpg",
    ctaText: "Enquire About Coimbatore Tour",
    tag: "Gateway to the Hills",
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    region: "South India",
    description: "Discover Kodaikanal's scenic landscapes and hill-station attractions.",
    image: "/images/destinations/kodaikanal.jpg",
    ctaText: "Enquire About Kodaikanal Tour",
    tag: "Princess of Hill Stations",
  },
];

export const SOUTH_INDIA_STATES = [
  { name: "Karnataka", destinations: ["Mysore", "Coorg", "Mangalore", "Other Karnataka destinations on enquiry"] },
  { name: "Tamil Nadu", destinations: ["Ooty", "Kodaikanal", "Madurai", "Coimbatore", "Other Tamil Nadu destinations on enquiry"] },
  { name: "Kerala", destinations: ["Popular Kerala destinations and scenic circuits on enquiry"] },
  { name: "Other South India", destinations: ["Custom South India multi-city routes available on request"] },
];
