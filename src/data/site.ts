// Locale-invariant facts about TRADER: addresses, hours, prices, URLs, image
// paths. Anything that needs translating lives in src/data/i18n.ts instead —
// components combine both via a `lang` prop.
//
// Swap placeholder image paths for real photography under /public/images later —
// nothing else needs to change.

export const site = {
  name: "TRADER",
  fullName: "TRADER Gallery",
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

export const menuPrices = {
  coffee: ["4,50", "3,00", "4,20", "4,80"],
  matcha: ["5,50", "5,80", "5,80"],
  pastries: ["3,80", "4,50", "4,20", "3,90"],
} as const;

export const matchaSignatureIndex = 0; // first matcha item is the signature item

export type GalleryCategory = "Space" | "Coffee" | "Art" | "People";

export type GalleryImageFact = {
  id: string;
  category: GalleryCategory;
  src: string;
};

// Placeholder manifest — each `src` points at a generated placeholder frame.
// Replace with real photography paths (e.g. "/images/space-01.jpg") when available.
// Titles/alt text live in i18n.ts, matched by id.
export const galleryImages: GalleryImageFact[] = [
  { id: "g1", category: "Space", src: "placeholder:space:1" },
  { id: "g2", category: "Coffee", src: "placeholder:coffee:1" },
  { id: "g3", category: "Art", src: "placeholder:art:1" },
  { id: "g4", category: "People", src: "placeholder:people:1" },
  { id: "g5", category: "Coffee", src: "placeholder:coffee:2" },
  { id: "g6", category: "Space", src: "placeholder:space:2" },
  { id: "g7", category: "Art", src: "placeholder:art:2" },
  { id: "g8", category: "Space", src: "placeholder:space:3" },
  { id: "g9", category: "People", src: "placeholder:people:2" },
];

export const exhibition = {
  title: "Nachbild",
  artist: "Mara Ostheim",
  works: [
    { title: "Nachbild I", medium: "Oil on board, 24 × 30 cm", price: "€480" },
    { title: "Nachbild IV", medium: "Oil on board, 18 × 24 cm", price: "€360" },
    { title: "Fundstück (Vitrine)", medium: "Found-object assemblage", price: "€620" },
  ],
  enquireEmail: "gallery@trader-hamburg.example",
};
