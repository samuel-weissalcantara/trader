// Locale-aware content for TRADER. Locale-invariant facts (address, hours,
// prices, URLs, image paths) live in site.ts; everything user-facing that
// needs translating lives here, keyed by language.
//
// Routing: German is the default locale and lives at the site root
// ("/", "/gallery", ...). English lives under "/en/" ("/en/", "/en/gallery",
// ...). Both are statically generated pages — see src/pages/ and
// src/pages/en/ — so the toggle works without JavaScript and each language
// is independently indexable.

export type Lang = "de" | "en";

export const locales: Lang[] = ["de", "en"];
export const defaultLocale: Lang = "de";

export function localePath(lang: Lang, path: string): string {
  // path starts with "/", e.g. "/" or "/gallery"
  if (lang === defaultLocale) return path;
  return path === "/" ? "/en/" : `/en${path}`;
}

type MenuItemText = { name: string; desc: string };

export type Content = {
  htmlLang: string;
  nav: { story: string; menu: string; gallery: string; visit: string; planVisit: string };
  hero: {
    eyebrow: string;
    tagline: string;
    descriptor: string;
    ctaVisit: string;
    ctaMenu: string;
    overlayPart1: string;
    overlayPart2: string;
    blurb: string;
    quotes: string[];
    readMore: string;
  };
  openStatus: {
    checking: string;
    openUntil: (time: string) => string;
    closedOpens: (day: string, time: string) => string;
    closedNow: string;
    intlLocale: string;
  };
  story: {
    eyebrow: string;
    heading: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  menu: {
    eyebrow: string;
    heading: string;
    description: string;
    groupTitles: { coffee: string; matcha: string; pastries: string };
    signatureBadge: string;
    coffee: MenuItemText[];
    matcha: MenuItemText[];
    pastries: MenuItemText[];
  };
  marqueeItems: string[];
  galleryTeaser: {
    eyebrow: string;
    heading: string;
    viewFull: string;
    seeExhibition: string;
  };
  visit: {
    eyebrow: string;
    heading: string;
    addressTitle: string;
    transitHint: string;
    hoursTitle: string;
    hoursDisplay: { label: string; value: string }[];
    ctaDirections: string;
  };
  footer: {
    visitTitle: string;
    directions: string;
    hoursTitle: string;
    exploreTitle: string;
    legalTitle: string;
    impressum: string;
    datenschutz: string;
    perPerson: string;
    reviews: string;
  };
  galleryPage: {
    eyebrow: string;
    heading: string;
    lede: string;
    exhibitionEyebrow: string;
    enquire: string;
    momentsEyebrow: string;
    momentsHeading: string;
    categories: { All: string; Space: string; Coffee: string; Art: string; People: string };
    images: { id: string; title: string; alt: string }[];
    exhibitionDatesLabel: string;
  };
  legalNav: { impressum: string; datenschutz: string };
  exhibition: {
    description: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    ratingSuffix: string;
    quotes: { quote: string; name: string; meta: string }[];
  };
};

const de: Content = {
  htmlLang: "de",
  nav: { story: "Geschichte", menu: "Speisekarte", gallery: "Galerie", visit: "Besuch", planVisit: "Besuch planen" },
  hero: {
    eyebrow: "Kaffeekultur & Hörerlebnis",
    tagline: "Mehr als ein Café.",
    descriptor: "Spezialitätenkaffee, zeremonieller Matcha & wechselnde Kunst im Hamburger Schanzenviertel.",
    ctaVisit: "Besuch planen",
    ctaMenu: "Zur Speisekarte",
    overlayPart1: "mehr als",
    overlayPart2: "ein café.",
    blurb:
      "Ein Raum für Spezialitätenkaffee, zeremoniellen Matcha und wechselnde Kunst — roh, ungeschönt, echt. Mitten im Schanzenviertel.",
    quotes: ["Bitterer Kaffee, süße Momente.", "Kaffee befeuert Ambition. Und Ungeduld."],
    readMore: "Mehr erfahren",
  },
  openStatus: {
    checking: "Öffnungszeiten werden geprüft…",
    openUntil: (time) => `Jetzt geöffnet — bis ${time}`,
    closedOpens: (day, time) => `Geschlossen — öffnet ${day} um ${time}`,
    closedNow: "Geschlossen",
    intlLocale: "de-DE",
  },
  story: {
    eyebrow: "Die Geschichte",
    heading: "Ein Café, gebaut von einem Sammler.",
    body: [
      "TRADER entstand aus dem Wunsch von Vincent von Thien, Hamburg mehr als nur ein weiteres Café zu geben — einen Raum, in dem Spezialitätenkaffee, zeremonieller Matcha und kuratierte Kunst denselben Tisch teilen.",
      "Der Raum im Schanzenviertel ist mit gefundenen und Vintage-Stücken eingerichtet, viele davon käuflich, direkt neben der Kunst an den Wänden. Ausstellungen wechseln, Fermentations- und Kombucha-Workshops finden statt, Abende werden zu Live-Musik und Print-Launches, und die Espressomaschine läuft die ganze Zeit weiter.",
      "Aus TRADER ist inzwischen eine kleine Konstellation in der Stadt geworden — das ursprüngliche Café, TRADER Gallery und die neuere TRADER HiFi Listening Bar — jede gebaut um dieselbe Idee: langsamer werden, genau hinsehen, etwas Gutes schmecken.",
    ],
    stats: [
      { value: "4,8", label: "★ Bewertung, 320+ Rezensionen" },
      { value: "3", label: "TRADER Orte in Hamburg" },
      { value: "2019", label: "Wo die erste Tasse serviert wurde" },
    ],
  },
  menu: {
    eyebrow: "Auf der Theke",
    heading: "Langsamer Kaffee, zeremonieller Matcha.",
    description:
      "Südhang-Bohnen aus Tübingen, frisch aufgeschlagener Goko-Matcha und Gebäck, jeden Morgen frisch gebacken. Volle Speisekarte vor Ort — Preise in €.",
    groupTitles: { coffee: "Kaffee", matcha: "Matcha", pastries: "Gebäck" },
    signatureBadge: "Hausspezialität",
    coffee: [
      { name: "Flat White", desc: "Südhang-Bohnen, Tübingen · seidiger doppelter Ristretto" },
      { name: "Espresso", desc: "Einfach oder doppelt, mit der La Marzocco gezogen" },
      { name: "Cappuccino", desc: "Nasser Schaum, Latte Art aus dem Haus" },
      { name: "Filterkaffee, handaufgegossen", desc: "Wechselnde Single-Origin-Röstung" },
    ],
    matcha: [
      { name: "Goko Zeremonieller Matcha", desc: "Frisch aufgeschlagen, mit Schaumkunst" },
      { name: "Matcha Latte", desc: "Hafer- oder Vollmilch, leicht gesüßt" },
      { name: "Iced Matcha", desc: "Mit Agavendicksaft, auf Eis" },
    ],
    pastries: [
      { name: "Riesencroissant", desc: "Jeden Morgen frisch gebacken" },
      { name: "Mandelcroissant", desc: "Frangipane, geröstete Mandelblättchen" },
      { name: "Apple Crumble", desc: "Warm, saisonal" },
      { name: "Pain au Chocolat", desc: "Mit dunkler Schokolade" },
    ],
  },
  marqueeItems: [
    "Zeremonieller Matcha",
    "Südhang Spezialitätenkaffee",
    "Wechselnde Ausstellungen",
    "Vintage-Interieur",
    "Live-Musik-Abende",
    "Designobjekte zu verkaufen",
  ],
  galleryTeaser: {
    eyebrow: "Die Galerie",
    heading: "Tagsüber Café, immer Galerie.",
    viewFull: "Ganze Galerie ansehen →",
    seeExhibition: "Zur Ausstellung →",
  },
  visit: {
    eyebrow: "Besuch",
    heading: "Findet uns im Schanzenviertel.",
    addressTitle: "Adresse",
    transitHint: "2 Minuten von der S-/U-Bahn Sternschanze entfernt.",
    hoursTitle: "Öffnungszeiten",
    hoursDisplay: [
      { label: "Dienstag – Freitag", value: "08:00 – 18:00" },
      { label: "Samstag – Sonntag", value: "09:00 – 18:00" },
      { label: "Montag", value: "Geschlossen" },
    ],
    ctaDirections: "Route anzeigen",
  },
  footer: {
    visitTitle: "Besuch",
    directions: "Route anzeigen ↗",
    hoursTitle: "Öffnungszeiten",
    exploreTitle: "Entdecken",
    legalTitle: "Rechtliches",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    perPerson: "pro Person",
    reviews: "Bewertungen",
  },
  galleryPage: {
    eyebrow: "Die Galerie",
    heading: "Kunst an den Wänden, immer verkäuflich.",
    lede: "TRADER hängt alle paar Wochen neue Werke — kleine Gemälde, Objekte aus Fundstücken, Drucke — neben den Vintage-Möbeln und Designobjekten, die schon im Raum stehen. Unten: die aktuelle Ausstellung und Momente aus dem Café selbst.",
    exhibitionEyebrow: "Aus der Galerie",
    enquire: "Nach einem Werk fragen",
    momentsEyebrow: "Café-Momente",
    momentsHeading: "Raum, Kaffee, Menschen.",
    categories: { All: "Alle", Space: "Raum", Coffee: "Kaffee", Art: "Kunst", People: "Menschen" },
    exhibitionDatesLabel: "Eröffnung 25. Juli 2025",
    images: [
      { id: "g1", title: "Schaufenster, Morgenlicht", alt: "Vintage eingerichtetes Café-Interieur mit Morgenlicht durch das Schaufenster" },
      { id: "g2", title: "Flat White, Latte Art", alt: "Flat White mit Rosetten-Latte-Art auf einem Holztisch" },
      { id: "g3", title: "Wand der aktuellen Ausstellung", alt: "Galeriewand mit gerahmten zeitgenössischen Kunstwerken über Vintage-Sitzgelegenheiten" },
      { id: "g4", title: "Bar im Betrieb", alt: "Barista zieht Espresso hinter der Theke" },
      { id: "g5", title: "Goko-Matcha, aufgeschlagen", alt: "Zeremonieller Matcha mit Schaumkunst in einer Keramikschale" },
      { id: "g6", title: "Vintage-Sitzecke", alt: "Leseecke mit unterschiedlichen Vintage-Sesseln und Beistelltischen" },
      { id: "g7", title: "Verkaufsobjekt, Regal-Detail", alt: "Kuratierte Designobjekte auf einem Regal, mit Preisschild" },
      { id: "g8", title: "Theke, Messing-Detail", alt: "La-Marzocco-Espressomaschine auf einer gefliesten Theke" },
      { id: "g9", title: "Sonntagstrubel", alt: "Gäste sitzen gemeinsam an einem großen Tisch an einem belebten Sonntag" },
    ],
  },
  legalNav: { impressum: "Impressum", datenschutz: "Datenschutz" },
  exhibition: {
    description:
      "Fantasievolle Entdecker, die sowohl die Erde als auch den Weltraum bevölkern — im Zentrum von Henry Woods Bildhauerarbeit. Die Figuren spiegeln seine Leidenschaft für die Natur und für Technologie wider. Mit traditionellen Grünholz-Schnitztechniken schnitzt er jedes Stück aus Holz, das er lokal und auf seinen Reisen sammelt, in Zusammenarbeit mit Aleph Geddis.",
  },
  testimonials: {
    eyebrow: "Bewertungen",
    heading: "Was unsere Gäste sagen.",
    ratingSuffix: "aus 323 Google-Bewertungen",
    quotes: [
      { quote: "Wunderschöner Cappuccino und ruhiges Flair.", name: "Google Rezension", meta: "★★★★★" },
      {
        quote:
          "Ich bin selber Barista und das ist mein Lieblingscafé in Hamburg. So eine schöne Einrichtung, so leckerer Kaffee. Ganz große Empfehlung.",
        name: "Helene S.",
        meta: "Local Guide · Barista",
      },
      {
        quote:
          "Nach drei Monaten Europareise hat dieser Ort genau ins Schwarze getroffen. Ein bescheidener Ort mit toller Kunst und Kunsthandwerk zum Kaufen.",
        name: "Kurtis Kelly",
        meta: "Local Guide",
      },
    ],
  },
};

const en: Content = {
  htmlLang: "en",
  nav: { story: "Story", menu: "Menu", gallery: "Gallery", visit: "Visit", planVisit: "Plan your visit" },
  hero: {
    eyebrow: "Coffee culture & listening experience",
    tagline: "More than a café.",
    descriptor: "Specialty coffee, ceremonial matcha & rotating art in Hamburg's Schanze.",
    ctaVisit: "Plan your visit",
    ctaMenu: "See the menu",
    overlayPart1: "more than",
    overlayPart2: "a café.",
    blurb:
      "A room for specialty coffee, ceremonial matcha, and rotating art — raw, unpolished, real. Right in the middle of the Schanze.",
    quotes: ["Bitter coffee, sweet moments.", "Coffee fuels ambition. And impatience."],
    readMore: "Read more",
  },
  openStatus: {
    checking: "Checking today's hours…",
    openUntil: (time) => `Open now — until ${time}`,
    closedOpens: (day, time) => `Closed — opens ${day} ${time}`,
    closedNow: "Closed now",
    intlLocale: "en-GB",
  },
  story: {
    eyebrow: "The story",
    heading: "A café built by a collector.",
    body: [
      "TRADER began with Vincent von Thien's wish to give Hamburg more than another coffee shop — a room where specialty coffee, ceremonial matcha, and curated art share the same table.",
      "The Schanze space is furnished in found and vintage pieces, many of them for sale alongside the art on the walls. Exhibitions rotate, fermentation and kombucha workshops happen in between, evenings turn into live music and print launches, and the espresso machine keeps running through all of it.",
      "TRADER has since grown into a small constellation across the city — the original café, TRADER Gallery, and the newer TRADER HiFi listening bar — each one still built around the same idea: slow down, look closely, taste something good.",
    ],
    stats: [
      { value: "4.8", label: "★ rating, 320+ reviews" },
      { value: "3", label: "TRADER spaces in Hamburg" },
      { value: "2019", label: "Where the first cup was poured" },
    ],
  },
  menu: {
    eyebrow: "On the counter",
    heading: "Slow coffee, ceremonial matcha.",
    description: "Südhang beans from Tübingen, whisked-to-order Goko matcha, and pastries baked each morning. Full menu in-house — prices in €.",
    groupTitles: { coffee: "Coffee", matcha: "Matcha", pastries: "Pastries" },
    signatureBadge: "Signature",
    coffee: [
      { name: "Flat White", desc: "Südhang beans, Tübingen · silky double ristretto" },
      { name: "Espresso", desc: "Single or double, La Marzocco pulled" },
      { name: "Cappuccino", desc: "Wet foam, house latte art" },
      { name: "Filter, hand-poured", desc: "Rotating single origin" },
    ],
    matcha: [
      { name: "Goko Ceremonial Matcha", desc: "Whisked to order, foam artwork" },
      { name: "Matcha Latte", desc: "Oat or whole milk, lightly sweetened" },
      { name: "Iced Matcha", desc: "Agave, over ice" },
    ],
    pastries: [
      { name: "Giant Croissant", desc: "Baked fresh each morning" },
      { name: "Almond Croissant", desc: "Frangipane, toasted flakes" },
      { name: "Apple Crumble", desc: "Warm, seasonal" },
      { name: "Pain au Chocolat", desc: "Dark chocolate batons" },
    ],
  },
  marqueeItems: [
    "Ceremonial Matcha",
    "Südhang Specialty Coffee",
    "Rotating Exhibitions",
    "Vintage Interior",
    "Live Music Evenings",
    "Design Objects for Sale",
  ],
  galleryTeaser: {
    eyebrow: "The gallery",
    heading: "Café by day, gallery always.",
    viewFull: "View full gallery →",
    seeExhibition: "See the exhibition →",
  },
  visit: {
    eyebrow: "Visit",
    heading: "Find us in the Schanze.",
    addressTitle: "Address",
    transitHint: "2 min from Sternschanze S-Bahn / U-Bahn.",
    hoursTitle: "Hours",
    hoursDisplay: [
      { label: "Tuesday – Friday", value: "08:00 – 18:00" },
      { label: "Saturday – Sunday", value: "09:00 – 18:00" },
      { label: "Monday", value: "Closed" },
    ],
    ctaDirections: "Get directions",
  },
  footer: {
    visitTitle: "Visit",
    directions: "Get directions ↗",
    hoursTitle: "Hours",
    exploreTitle: "Explore",
    legalTitle: "Legal",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    perPerson: "per person",
    reviews: "reviews",
  },
  galleryPage: {
    eyebrow: "The gallery",
    heading: "Art on the walls, always for sale.",
    lede: "TRADER hangs new work every few weeks — small paintings, found-object pieces, prints — alongside the vintage furniture and design objects already in the room. Below: the current exhibition, and moments from the café itself.",
    exhibitionEyebrow: "From the gallery",
    enquire: "Enquire about a piece",
    momentsEyebrow: "Café moments",
    momentsHeading: "Space, coffee, people.",
    categories: { All: "All", Space: "Space", Coffee: "Coffee", Art: "Art", People: "People" },
    exhibitionDatesLabel: "Opened 25 July 2025",
    images: [
      { id: "g1", title: "Front window, morning light", alt: "Vintage-furnished café interior with morning light through the front window" },
      { id: "g2", title: "Flat white, latte art", alt: "Flat white with rosetta latte art on a wooden table" },
      { id: "g3", title: "Current exhibition wall", alt: "Gallery wall with framed contemporary artworks above vintage seating" },
      { id: "g4", title: "Bar in service", alt: "Barista pulling espresso shots behind the counter" },
      { id: "g5", title: "Goko matcha, whisked", alt: "Ceremonial matcha with foam artwork in a ceramic bowl" },
      { id: "g6", title: "Vintage seating corner", alt: "Reading corner with mismatched vintage armchairs and side tables" },
      { id: "g7", title: "Object for sale, shelf detail", alt: "Curated design objects displayed on a shelf, tagged for sale" },
      { id: "g8", title: "Bar counter, brass detail", alt: "La Marzocco espresso machine on a tiled counter" },
      { id: "g9", title: "Sunday crowd", alt: "Guests seated together at a communal table on a busy Sunday" },
    ],
  },
  legalNav: { impressum: "Legal Notice", datenschutz: "Privacy Policy" },
  exhibition: {
    description:
      "Imaginative explorers that populate both earth and space, from the core of Henry Wood's sculptural work. The figures reflect his passion for the great outdoors and for technology. Using traditional green-woodcarving techniques, he carves each piece from timber sourced locally and during his travels, in collaboration with Aleph Geddis.",
  },
  testimonials: {
    eyebrow: "Reviews",
    heading: "What our guests say.",
    ratingSuffix: "from 323 Google reviews",
    quotes: [
      { quote: "Beautiful cappuccino and a calm atmosphere.", name: "Google review", meta: "★★★★★" },
      {
        quote:
          "I'm a barista myself, and this is my favorite café in Hamburg. Such beautiful decor, such delicious coffee. Highly recommend.",
        name: "Helene S.",
        meta: "Local Guide · Barista",
      },
      {
        quote:
          "After travelling Europe for 3 months this place absolutely hit the spot. A humble place with awesome arts and crafts you can purchase.",
        name: "Kurtis Kelly",
        meta: "Local Guide",
      },
    ],
  },
};

const dictionary: Record<Lang, Content> = { de, en };

export function getContent(lang: Lang): Content {
  return dictionary[lang];
}
