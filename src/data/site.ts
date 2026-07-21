// Single source of truth for TRADER content.
// Swap placeholder image paths for real photography under /public/images later —
// nothing else needs to change.

export const site = {
  name: "TRADER",
  fullName: "TRADER Gallery",
  tagline: "More than a café.",
  descriptor: "Specialty coffee, ceremonial matcha & rotating art in Hamburg's Schanze.",
  instagram: "https://www.instagram.com/trader.gallery/",
  instagramHandle: "@trader.gallery",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=TRADER,Bartelsstra%C3%9Fe+37,20357+Hamburg",
  mapsEmbedUrl: "https://www.google.com/maps/place/Bartelsstra%C3%9Fe+37,+20357+Hamburg",
  address: {
    street: "Bartelsstraße 37",
    postal: "20357",
    city: "Hamburg",
    district: "Sternschanze / Altona",
    lat: 53.5628,
    lng: 9.9614,
  },
  priceRange: "€1–10",
  rating: { value: 4.8, count: 323 },
} as const;

// Hours keyed 0 (Sun) – 6 (Sat), matching Date#getDay().
export const hours: Record<number, { open: string; close: string } | null> = {
  0: { open: "09:00", close: "18:00" }, // Sunday
  1: null, // Monday — closed
  2: { open: "08:00", close: "18:00" },
  3: { open: "08:00", close: "18:00" },
  4: { open: "08:00", close: "18:00" },
  5: { open: "08:00", close: "18:00" },
  6: { open: "09:00", close: "18:00" }, // Saturday
};

export const hoursDisplay = [
  { label: "Tuesday – Friday", value: "08:00 – 18:00" },
  { label: "Saturday – Sunday", value: "09:00 – 18:00" },
  { label: "Monday", value: "Closed" },
];

export const menu = {
  coffee: [
    { name: "Flat White", desc: "Südhang beans, Tübingen · silky double ristretto", price: "4,50" },
    { name: "Espresso", desc: "Single or double, La Marzocco pulled", price: "3,00" },
    { name: "Cappuccino", desc: "Wet foam, house latte art", price: "4,20" },
    { name: "Filter, hand-poured", desc: "Rotating single origin", price: "4,80" },
  ],
  matcha: [
    { name: "Goko Ceremonial Matcha", desc: "Whisked to order, foam artwork", price: "5,50", signature: true },
    { name: "Matcha Latte", desc: "Oat or whole milk, lightly sweetened", price: "5,80" },
    { name: "Iced Matcha", desc: "Agave, over ice", price: "5,80" },
  ],
  pastries: [
    { name: "Giant Croissant", desc: "Baked fresh each morning", price: "3,80" },
    { name: "Almond Croissant", desc: "Frangipane, toasted flakes", price: "4,50" },
    { name: "Apple Crumble", desc: "Warm, seasonal", price: "4,20" },
    { name: "Pain au Chocolat", desc: "Dark chocolate batons", price: "3,90" },
  ],
} as const;

export const marqueeItems = [
  "Ceremonial Matcha",
  "Südhang Specialty Coffee",
  "Rotating Exhibitions",
  "Vintage Interior",
  "Live Music Evenings",
  "Design Objects for Sale",
];

export const story = {
  eyebrow: "The story",
  heading: "A café built by a collector.",
  body: [
    "TRADER began with Vincent von Thien's wish to give Hamburg more than another coffee shop — a room where specialty coffee, ceremonial matcha, and curated art share the same table.",
    "The Schanze space is furnished in found and vintage pieces, many of them for sale alongside the art on the walls. Exhibitions rotate, evenings turn into live music, and the espresso machine keeps running through all of it.",
    "TRADER has since grown into a small constellation across the city — the original café, TRADER Gallery, and the newer TRADER HiFi listening bar — each one still built around the same idea: slow down, look closely, taste something good.",
  ],
  stats: [
    { value: "4.8", label: "★ rating, 320+ reviews" },
    { value: "3", label: "TRADER spaces in Hamburg" },
    { value: "2019", label: "Where the first cup was poured" },
  ],
};

export type GalleryImage = {
  id: string;
  category: "Space" | "Coffee" | "Art" | "People";
  title: string;
  src: string;
  alt: string;
};

// Placeholder manifest — each `src` points at a generated placeholder frame.
// Replace with real photography paths (e.g. "/images/space-01.jpg") when available.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Space", title: "Front window, morning light", src: "placeholder:space:1", alt: "Vintage-furnished café interior with morning light through the front window" },
  { id: "g2", category: "Coffee", title: "Flat white, latte art", src: "placeholder:coffee:1", alt: "Flat white with rosetta latte art on a wooden table" },
  { id: "g3", category: "Art", title: "Current exhibition wall", src: "placeholder:art:1", alt: "Gallery wall with framed contemporary artworks above vintage seating" },
  { id: "g4", category: "People", title: "Bar in service", src: "placeholder:people:1", alt: "Barista pulling espresso shots behind the counter" },
  { id: "g5", category: "Coffee", title: "Goko matcha, whisked", src: "placeholder:coffee:2", alt: "Ceremonial matcha with foam artwork in a ceramic bowl" },
  { id: "g6", category: "Space", title: "Vintage seating corner", src: "placeholder:space:2", alt: "Reading corner with mismatched vintage armchairs and side tables" },
  { id: "g7", category: "Art", title: "Object for sale, shelf detail", src: "placeholder:art:2", alt: "Curated design objects displayed on a shelf, tagged for sale" },
  { id: "g8", category: "Space", title: "Bar counter, brass detail", src: "placeholder:space:3", alt: "La Marzocco espresso machine on a tiled counter" },
  { id: "g9", category: "People", title: "Sunday crowd", src: "placeholder:people:2", alt: "Guests seated together at a communal table on a busy Sunday" },
];

export const exhibition = {
  eyebrow: "Currently showing",
  title: "Nachbild",
  artist: "Mara Ostheim",
  dates: "12 July — 24 August 2026",
  description:
    "A series of small oil studies and found-object assemblages exploring afterimage and memory, hung salon-style through the café. Pieces are available to purchase at the bar.",
  works: [
    { title: "Nachbild I", medium: "Oil on board, 24 × 30 cm", price: "€480" },
    { title: "Nachbild IV", medium: "Oil on board, 18 × 24 cm", price: "€360" },
    { title: "Fundstück (Vitrine)", medium: "Found-object assemblage", price: "€620" },
  ],
  enquireEmail: "gallery@trader-hamburg.example",
};
