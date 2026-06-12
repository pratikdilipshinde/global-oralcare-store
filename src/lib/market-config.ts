export type MarketCode = "us" | "ca" | "uk" | "au" | "de" | "eu";
export type LanguageCode = "en" | "de" | "fr" | "es";

export const markets: Record<
  MarketCode,
  {
    label: string;
    shortLabel: string;
    currency: string;
    locale: string;
    flag: string;
    freeShipping: number;
  }
> = {
  us: {
    label: "United States",
    shortLabel: "USA",
    currency: "USD",
    locale: "en-US",
    flag: "🇺🇸",
    freeShipping: 65,
  },
  ca: {
    label: "Canada",
    shortLabel: "Canada",
    currency: "CAD",
    locale: "en-CA",
    flag: "🇨🇦",
    freeShipping: 85,
  },
  uk: {
    label: "United Kingdom",
    shortLabel: "UK",
    currency: "GBP",
    locale: "en-GB",
    flag: "🇬🇧",
    freeShipping: 55,
  },
  au: {
    label: "Australia",
    shortLabel: "AUS",
    currency: "AUD",
    locale: "en-AU",
    flag: "🇦🇺",
    freeShipping: 95,
  },
  de: {
    label: "Germany",
    shortLabel: "Germany",
    currency: "EUR",
    locale: "de-DE",
    flag: "🇩🇪",
    freeShipping: 60,
  },
  eu: {
    label: "European Union",
    shortLabel: "EU",
    currency: "EUR",
    locale: "en-IE",
    flag: "🇪🇺",
    freeShipping: 70,
  },
};

export const languages: Record<
  LanguageCode,
  {
    label: string;
    nativeLabel: string;
  }
> = {
  en: {
    label: "English",
    nativeLabel: "English",
  },
  de: {
    label: "German",
    nativeLabel: "Deutsch",
  },
  fr: {
    label: "French",
    nativeLabel: "Français",
  },
  es: {
    label: "Spanish",
    nativeLabel: "Español",
  },
};

export const translations: Record<
  LanguageCode,
  {
    topbar: string;
    subscribe: string;
    rewards: string;
    shop: string;
    story: string;
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    heroPrimary: string;
    heroSecondary: string;
    productSectionEyebrow: string;
    productSectionTitle: string;
    addToCart: string;
    footerHelp: string;
    footerShop: string;
    footerBrand: string;
    newsletter: string;
  }
> = {
  en: {
    topbar: "Free shipping on orders over",
    subscribe: "Subscribe",
    rewards: "Rewards",
    shop: "Shop",
    story: "Our Story",
    heroEyebrow: "Premium oral care made fresh",
    heroTitle: "Clean breath. Brighter smile. Better daily care.",
    heroText:
      "Explore toothpaste, mouthwash, oil pulling rinse, and electric toothbrush essentials built for a modern oral-care routine.",
    heroPrimary: "Shop Best Sellers",
    heroSecondary: "Build Your Routine",
    productSectionEyebrow: "Best Sellers",
    productSectionTitle: "Fresh oral-care essentials for every day.",
    addToCart: "Add to Cart",
    footerHelp: "Help",
    footerShop: "Shop",
    footerBrand: "Brand",
    newsletter: "Join our list for offers, launches, and oral-care tips.",
  },
  de: {
    topbar: "Kostenloser Versand ab",
    subscribe: "Abo",
    rewards: "Prämien",
    shop: "Shop",
    story: "Unsere Geschichte",
    heroEyebrow: "Premium-Mundpflege für jeden Tag",
    heroTitle: "Frischer Atem. Helleres Lächeln. Bessere Pflege.",
    heroText:
      "Entdecke Zahnpasta, Mundspülung, Ölziehspülung und elektrische Zahnbürsten für moderne Mundpflege.",
    heroPrimary: "Bestseller kaufen",
    heroSecondary: "Routine erstellen",
    productSectionEyebrow: "Bestseller",
    productSectionTitle: "Frische Mundpflege-Essentials für jeden Tag.",
    addToCart: "In den Warenkorb",
    footerHelp: "Hilfe",
    footerShop: "Shop",
    footerBrand: "Marke",
    newsletter: "Erhalte Angebote, neue Produkte und Mundpflege-Tipps.",
  },
  fr: {
    topbar: "Livraison gratuite dès",
    subscribe: "S’abonner",
    rewards: "Récompenses",
    shop: "Boutique",
    story: "Notre histoire",
    heroEyebrow: "Soin bucco-dentaire premium",
    heroTitle: "Haleine fraîche. Sourire plus lumineux. Soin quotidien.",
    heroText:
      "Découvrez dentifrice, bain de bouche, rinçage à l’huile et brosse électrique pour une routine moderne.",
    heroPrimary: "Voir les best-sellers",
    heroSecondary: "Créer une routine",
    productSectionEyebrow: "Best-sellers",
    productSectionTitle: "Les essentiels frais du soin oral.",
    addToCart: "Ajouter au panier",
    footerHelp: "Aide",
    footerShop: "Boutique",
    footerBrand: "Marque",
    newsletter: "Recevez nos offres, nouveautés et conseils oral-care.",
  },
  es: {
    topbar: "Envío gratis en pedidos mayores a",
    subscribe: "Suscribirse",
    rewards: "Recompensas",
    shop: "Tienda",
    story: "Nuestra historia",
    heroEyebrow: "Cuidado oral premium",
    heroTitle: "Aliento fresco. Sonrisa brillante. Cuidado diario.",
    heroText:
      "Descubre pasta dental, enjuague bucal, oil pulling y cepillo eléctrico para una rutina moderna.",
    heroPrimary: "Comprar populares",
    heroSecondary: "Crear rutina",
    productSectionEyebrow: "Más vendidos",
    productSectionTitle: "Esenciales frescos para el cuidado oral.",
    addToCart: "Agregar al carrito",
    footerHelp: "Ayuda",
    footerShop: "Tienda",
    footerBrand: "Marca",
    newsletter: "Recibe ofertas, lanzamientos y consejos de cuidado oral.",
  },
};

export const products = [
  {
    id: 1,
    name: "Whitening Toothpaste",
    category: "Toothpaste",
    image: "/images/product-whitening-toothpaste.png",
    prices: {
      us: 12,
      ca: 16,
      uk: 10,
      au: 19,
      de: 12,
      eu: 13,
    },
  },
  {
    id: 2,
    name: "Fresh Mint Mouthwash",
    category: "Mouthwash",
    image: "/images/product-fresh-mint-mouthwash.png",
    prices: {
      us: 15,
      ca: 20,
      uk: 13,
      au: 24,
      de: 15,
      eu: 16,
    },
  },
  {
    id: 3,
    name: "Oil Pulling Rinse",
    category: "Oil Pulling",
    image: "/images/product-oil-pulling-rinse.png",
    prices: {
      us: 18,
      ca: 25,
      uk: 16,
      au: 29,
      de: 19,
      eu: 20,
    },
  },
  {
    id: 4,
    name: "Electric Toothbrush Kit",
    category: "Toothbrush",
    image: "/images/product-electric-toothbrush-kit.png",
    prices: {
      us: 49,
      ca: 68,
      uk: 42,
      au: 78,
      de: 52,
      eu: 55,
    },
  },
];

export function formatMoney(amount: number, marketCode: MarketCode) {
  const market = markets[marketCode];

  return new Intl.NumberFormat(market.locale, {
    style: "currency",
    currency: market.currency,
  }).format(amount);
}

export function isMarketCode(value: string): value is MarketCode {
  return ["us", "ca", "uk", "au", "de", "eu"].includes(value);
}

export function isLanguageCode(value: string): value is LanguageCode {
  return ["en", "de", "fr", "es"].includes(value);
}

export function detectMarketFromCountryCode(countryCode: string): MarketCode {
  const code = countryCode.toUpperCase();

  if (code === "US") return "us";
  if (code === "CA") return "ca";
  if (code === "GB") return "uk";
  if (code === "AU") return "au";
  if (code === "DE") return "de";

  const euCountries = [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
  ];

  if (euCountries.includes(code)) return "eu";

  return "us";
}