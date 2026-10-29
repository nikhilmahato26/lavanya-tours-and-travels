export interface TourPackage {
  id: string;
  name: string;
  state: 'Karnataka' | 'Kerala' | 'Tamil Nadu' | 'Pondicherry';
  duration: string;
  route: string;
  highlights: string[];
  description: string;
  image: string;
  tag: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  // ================= KARNATAKA PACKAGES =================
  {
    id: "mysore-heritage-tour",
    name: "Mysore Heritage Tour Package",
    state: "Karnataka",
    duration: "3 Days / 2 Nights",
    route: "Mysore ➔ Srirangapatna ➔ Chamundi Hills",
    highlights: [
      "Mysore Palace & illumination",
      "Chamundi Hill Temple & Nandi Bull",
      "St. Philomena's Church",
      "Brindavan Gardens musical fountain",
      "Srirangapatna Tipu Sultan Summer Palace"
    ],
    description: "Explore the royal city of Karnataka with grand palaces, cultural monuments, and evening musical fountains.",
    image: "/images/destinations/mysore.jpg",
    tag: "Royal Heritage",
  },
  {
    id: "coorg-waterfalls-coffee",
    name: "Coorg Tour Package – Waterfalls, Wildlife & Coffee Trails",
    state: "Karnataka",
    duration: "5 Days / 4 Nights",
    route: "Bangalore / Mysore ➔ Coorg ➔ Talacauvery",
    highlights: [
      "Dubare Elephant Camp & River Rafting",
      "Abbey Falls & Raja's Seat sunset",
      "Talacauvery & Bhagamandala temples",
      "Coffee plantation guided walks",
      "Golden Temple (Namdroling Monastery)"
    ],
    description: "The complete Scotland of India experience with coffee trails, cascading waterfalls, and misty hills.",
    image: "/images/destinations/coorg.jpg",
    tag: "Nature & Coffee",
  },
  {
    id: "coorg-abbey-dubare",
    name: "Coorg Tour Package – Abbey Falls, Dubare & Talacauvery",
    state: "Karnataka",
    duration: "3 Days / 2 Nights",
    route: "Mysore ➔ Kushalnagar ➔ Madikeri",
    highlights: [
      "Abbey Falls scenic nature walk",
      "Dubare Elephant Camp interaction",
      "Talacauvery scenic hill peak",
      "Raja's Seat view point",
      "Kushalnagar Tibetan Monastery"
    ],
    description: "Ideal short holiday escaping to Coorg's refreshing hill scenery, waterfalls, and sacred origins.",
    image: "/images/destinations/coorg.jpg",
    tag: "Weekend Getaway",
  },
  {
    id: "coorg-2-days-holiday",
    name: "Coorg 2 Days Holiday Package",
    state: "Karnataka",
    duration: "2 Days / 1 Night",
    route: "Mysore ➔ Madikeri ➔ Mysore",
    highlights: [
      "Dubare Elephant Camp",
      "Namdroling Golden Temple",
      "Raja's Seat garden sunset",
      "Coffee & homemade chocolate shopping"
    ],
    description: "Quick weekend getaway from Mysore to unwind in the cool hill breeze and scenic estates of Coorg.",
    image: "/images/destinations/coorg.jpg",
    tag: "Short Break",
  },
  {
    id: "chikmagalur-tour-5d",
    name: "Chikmagalur Tour Package",
    state: "Karnataka",
    duration: "5 Days / 4 Nights",
    route: "Mysore / Bangalore ➔ Chikmagalur ➔ Kemmanagundi",
    highlights: [
      "Mullayanagiri (highest peak in Karnataka)",
      "Baba Budangiri cave shrine",
      "Belur & Halebidu Hoysala temples",
      "Kemmanagundi hill station",
      "Hebbe Falls & coffee estates"
    ],
    description: "An extensive retreat to the Coffee Land of Karnataka, blending cloud-kissed peaks and Hoysala architecture.",
    image: "/images/destinations/chikmagalur.jpg",
    tag: "Mountain Peaks",
  },
  {
    id: "chikmagalur-3d-2n",
    name: "Chikmagalur 3 Days / 2 Nights Tour – Mullayanagiri & Coffee",
    state: "Karnataka",
    duration: "3 Days / 2 Nights",
    route: "Chikmagalur ➔ Mullayanagiri ➔ Baba Budangiri",
    highlights: [
      "Trek to Mullayanagiri peak",
      "Baba Budangiri mountain range",
      "Aromatic coffee plantation walks",
      "Jhari (Buttermilk) Waterfalls"
    ],
    description: "Short and refreshing escape exploring Karnataka's highest peak, waterfalls, and verdant coffee estates.",
    image: "/images/destinations/chikmagalur.jpg",
    tag: "Adventure & Hills",
  },
  {
    id: "bandipur-nagarhole-safari",
    name: "Bandipur & Nagarhole National Parks Tour Package",
    state: "Karnataka",
    duration: "2 Days / 1 Night",
    route: "Mysore ➔ Bandipur ➔ Nagarhole / Kabini",
    highlights: [
      "Bandipur National Park Jungle Safari",
      "Nagarhole National Park wildlife drive",
      "Kabini backwaters nature view",
      "Sightings of elephants, deer, and big cats"
    ],
    description: "Designed for wildlife lovers seeking an exhilarating jungle safari and forest retreat near Mysore.",
    image: "/images/destinations/bandipur.jpg",
    tag: "Wildlife Safari",
  },
  {
    id: "bangalore-mysore-coorg-super-saver",
    name: "Bangalore – Mysore – Coorg Super Saver Package",
    state: "Karnataka",
    duration: "6 Days / 5 Nights",
    route: "Bangalore ➔ Mysore ➔ Coorg ➔ Bangalore",
    highlights: [
      "Bangalore Lalbagh & Palace tour",
      "Mysore Royal Palace & Brindavan Gardens",
      "Srirangapatna historical monuments",
      "Coorg waterfalls, monasteries & coffee hills"
    ],
    description: "The ultimate Karnataka circuit combining urban sights, royal history, and lush mountain serenity.",
    image: "/images/destinations/mysore.jpg",
    tag: "Complete Circuit",
  },

  // ================= KERALA PACKAGES =================
  {
    id: "gods-own-kerala",
    name: "God’s Own Kerala Tour Package",
    state: "Kerala",
    duration: "7 Days / 6 Nights",
    route: "Kochi ➔ Munnar ➔ Thekkady ➔ Alleppey ➔ Kovalam ➔ Trivandrum",
    highlights: [
      "Munnar tea gardens & Mattupetty Dam",
      "Thekkady Periyar Wildlife Sanctuary",
      "Alleppey Backwater Houseboat cruise",
      "Kovalam Lighthouse Beach sunset",
      "Trivandrum Padmanabhaswamy Temple"
    ],
    description: "Comprehensive Kerala holiday covering tea-clad mountains, spice estates, houseboats, and coastal beaches.",
    image: "/images/destinations/munnar.jpg",
    tag: "Grand Kerala",
  },
  {
    id: "best-of-kerala",
    name: "Best of Kerala Tour Package",
    state: "Kerala",
    duration: "7 Days / 6 Nights",
    route: "Guruvayur ➔ Munnar ➔ Thekkady ➔ Alleppey ➔ Kochi",
    highlights: [
      "Guruvayur Sri Krishna Temple darshan",
      "Munnar misty hills & spice plantations",
      "Thekkady wildlife boating",
      "Alleppey overnight luxury houseboat",
      "Historic Fort Kochi & Chinese fishing nets"
    ],
    description: "Spiritual and scenic Kerala route combining famous temple visits with backwaters and tea hills.",
    image: "/images/destinations/south-india.jpg",
    tag: "Spiritual & Nature",
  },
  {
    id: "enchanting-kerala-delight",
    name: "Enchanting Kerala Delight",
    state: "Kerala",
    duration: "5 Days / 4 Nights",
    route: "Kochi ➔ Munnar ➔ Thekkady ➔ Kochi",
    highlights: [
      "Cheeyappara & Valara Waterfalls",
      "Eravikulam National Park (Nilgiri Tahr)",
      "Tea Museum & scenic viewpoints",
      "Periyar Lake boat safari in Thekkady"
    ],
    description: "A compact mountain and wilderness getaway designed for families and couples visiting Kerala.",
    image: "/images/destinations/munnar.jpg",
    tag: "Hills & Wildlife",
  },
  {
    id: "wayanad-escape",
    name: "Wayanad Escape – A Perfect Kerala Holiday Retreat",
    state: "Kerala",
    duration: "4 Days / 3 Nights",
    route: "Calicut / Mysore ➔ Wayanad ➔ Calicut",
    highlights: [
      "Banasura Sagar Dam (largest earthen dam in India)",
      "Edakkal Caves ancient rock carvings",
      "Soochipara Waterfalls & tea estates",
      "Muthanga Wildlife Sanctuary safari",
      "Chembra Peak panoramic view"
    ],
    description: "Conveniently accessible from Mysore, Wayanad combines peaceful bamboo forests, caves, and scenic waterfalls.",
    image: "/images/destinations/wayanad.jpg",
    tag: "Forests & Waterfalls",
  },
  {
    id: "varkala-thekkady",
    name: "Varkala & Thekkady Tour Package",
    state: "Kerala",
    duration: "5 Days / 4 Nights",
    route: "Trivandrum ➔ Varkala ➔ Thekkady ➔ Kochi",
    highlights: [
      "Varkala Beach & stunning red cliff cafes",
      "Janardhana Swami ancient temple",
      "Thekkady spice gardens & elephant ride",
      "Periyar boating safari"
    ],
    description: "A unique journey blending serene cliff beaches of Varkala with the cardamom hills of Thekkady.",
    image: "/images/destinations/south-india.jpg",
    tag: "Cliffs & Wildlife",
  },

  // ================= TAMIL NADU PACKAGES =================
  {
    id: "ooty-coonoor-hills",
    name: "Ooty & Coonoor Hill Station Tour",
    state: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    route: "Mysore ➔ Bandipur ➔ Ooty ➔ Coonoor",
    highlights: [
      "Government Botanical Garden & Rose Garden",
      "Ooty Lake boat ride & leisure walk",
      "Doddabetta Peak panoramic viewpoint",
      "Nilgiri Mountain Railway toy train experience",
      "Coonoor Sim's Park & tea gardens"
    ],
    description: "The Queen of Hill Stations tour starting from Mysore via scenic Nilgiri hairpin bends and forest routes.",
    image: "/images/destinations/ooty.jpg",
    tag: "Queen of Hills",
  },
  {
    id: "kodaikanal-princess-tour",
    name: "Kodaikanal Princess of Hills Tour",
    state: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    route: "Kodaikanal Lake ➔ Pillar Rocks ➔ Coaker's Walk",
    highlights: [
      "Star-shaped Kodai Lake cycling & boating",
      "Coaker's Walk misty valley cliff path",
      "Pillar Rocks majestic stone cliffs",
      "Silver Cascade Waterfalls & pine forest"
    ],
    description: "Explore tranquil misty valleys, lush pine woods, and panoramic mountain drops in Kodaikanal.",
    image: "/images/destinations/kodaikanal.jpg",
    tag: "Misty Valleys",
  },
  {
    id: "madurai-heritage-temple",
    name: "Madurai Temple & Heritage Tour",
    state: "Tamil Nadu",
    duration: "3 Days / 2 Nights",
    route: "Madurai City ➔ Thirumalai Nayakkar ➔ Alagar Kovil",
    highlights: [
      "Meenakshi Amman Temple sacred gopurams",
      "Thirumalai Nayakkar Mahal palace architecture",
      "Gandhi Memorial Museum & cultural heritage",
      "Famous Madurai street food & market visits"
    ],
    description: "Immerse yourself in one of the oldest living cultural and temple cities in India.",
    image: "/images/destinations/madurai.jpg",
    tag: "Ancient Temples",
  },
  {
    id: "coimbatore-isha-yoga",
    name: "Coimbatore & Isha Yoga Tour",
    state: "Tamil Nadu",
    duration: "2 Days / 1 Night",
    route: "Coimbatore ➔ Adiyogi ➔ Marudhamalai",
    highlights: [
      "112-ft Adiyogi Shiva Statue & Isha Yoga Center",
      "Marudhamalai Murugan Temple on scenic hill",
      "Dhyanalinga meditative experience",
      "Siruvani Waterfalls & Western Ghats foothills"
    ],
    description: "A rejuvenating spiritual trip to the Adiyogi statue and foothill shrines around Coimbatore.",
    image: "/images/destinations/coimbatore.jpg",
    tag: "Spiritual Retreat",
  },
  {
    id: "tamilnadu-temple-circuit",
    name: "Tamil Nadu Temple Circuit – Madurai, Rameshwaram & Kanyakumari",
    state: "Tamil Nadu",
    duration: "5 Days / 4 Nights",
    route: "Madurai ➔ Rameshwaram ➔ Dhanushkodi ➔ Kanyakumari",
    highlights: [
      "Meenakshi Amman Temple in Madurai",
      "Ramanathaswamy Temple & 22 sacred teerthams",
      "Pamban Bridge rail-sea engineering marvel",
      "Dhanushkodi ghost town & Indian Ocean point",
      "Kanyakumari sunrise & Vivekananda Rock Memorial"
    ],
    description: "A deeply revered pilgrimage and coastal journey connecting the historic southern tips of India.",
    image: "/images/destinations/madurai.jpg",
    tag: "Grand Pilgrimage",
  },

  // ================= PONDICHERRY PACKAGES =================
  {
    id: "pondicherry-french-heritage",
    name: "Pondicherry French Heritage & Promenade Tour",
    state: "Pondicherry",
    duration: "3 Days / 2 Nights",
    route: "White Town ➔ Promenade Beach ➔ Auroville",
    highlights: [
      "White Town French Quarter colonial architecture",
      "Promenade Rock Beach evening walkway",
      "Auroville Matrimandir & peaceful gardens",
      "Sri Aurobindo Ashram spiritual visit",
      "Paradise Beach boat cruise & golden sands"
    ],
    description: "Experience the French colonial charm, vibrant yellow villas, seaside promenades, and serene ashram life.",
    image: "/images/destinations/pondicherry-french.jpg",
    tag: "French Colony",
  },
  {
    id: "pondicherry-mahabalipuram-coastal",
    name: "Pondicherry & Mahabalipuram Coastal Heritage Circuit",
    state: "Pondicherry",
    duration: "4 Days / 3 Nights",
    route: "Chennai / Bangalore ➔ Mahabalipuram ➔ Pondicherry",
    highlights: [
      "UNESCO Shore Temples & Arjuna's Penance",
      "White Town cafes & French culinary heritage",
      "Chunnambar Boat House to Paradise Beach",
      "Serenity Beach leisure & coastal drive"
    ],
    description: "A scenic East Coast road journey combining Pallava rock-cut architecture with French Riviera vibes.",
    image: "/images/destinations/pondicherry.jpg",
    tag: "Coastal Heritage",
  },
];

export const PACKAGE_STATE_TABS = [
  { id: 'all', label: 'All Packages' },
  { id: 'Karnataka', label: 'Karnataka (8 Packages)' },
  { id: 'Kerala', label: 'Kerala (5 Packages)' },
  { id: 'Tamil Nadu', label: 'Tamil Nadu (5 Packages)' },
  { id: 'Pondicherry', label: 'Pondicherry (2 Packages)' },
] as const;

export const SOUTH_INDIA_STATES = [
  { name: "Karnataka", destinations: ["Mysore", "Coorg", "Chikmagalur", "Bandipur", "Nagarhole", "Mangalore"] },
  { name: "Kerala", destinations: ["Munnar", "Wayanad", "Thekkady", "Alleppey", "Kovalam", "Varkala", "Guruvayur"] },
  { name: "Tamil Nadu", destinations: ["Ooty", "Kodaikanal", "Madurai", "Coimbatore", "Rameshwaram", "Kanyakumari"] },
  { name: "Pondicherry", destinations: ["White Town", "Promenade Beach", "Auroville", "Paradise Beach", "Chunnambar"] },
];
