export const event = {
  title: "A ritual of body, shadow and becoming.",
  subtitle: "Underground performance collective",
  tagline:
    "Through pole, aerial silk, and embodied ritual — a séance of flesh, shadow, and feminine power.",
  date: {
    display: "Samhain Eve · 31 October 2026",
    iso: "2026-10-31",
  },
  location: {
    venue: "The Vault",
    city: "Berlin",
    display: "The Vault, Berlin",
  },
  concept: {
    heading: "The concept",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. This is not a show — it is a séance of flesh and will.",
    keywords: [
      "ritual",
      "desire",
      "transformation",
      "body",
      "rebellion",
      "softness",
      "shadow",
    ],
  },
  ironCoven: {
    heading: "The Iron Coven",
    intro:
      "Four performers. Four archetypes. One ritual circle. The Iron Coven moves as a living spell — each body a vessel, each act a working of shadow, desire, and defiant becoming.",
  },
  tarot: {
    heading: "Arcana",
    subtitle: "Draw a card. Read the ritual.",
    hint: "Tap card or ↻ in title bar to flip",
  },
} as const;

export type PracticalInfoItem = {
  label: string;
  value: string;
};

export const practicalInfo: PracticalInfoItem[] = [
  { label: "Date", value: event.date.display },
  { label: "Location", value: event.location.display },
  { label: "Doors", value: "19:30" },
  { label: "Ritual begins", value: "20:00" },
  { label: "Duration", value: "Approx. 90 minutes" },
  { label: "Age", value: "18+" },
  { label: "Tickets", value: "Via Eversports (link coming soon)" },
];

export type SocialLink = {
  platform: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    handle: "@witchyperformance",
    href: "https://instagram.com",
  },
  {
    platform: "TikTok",
    handle: "@witchyperformance",
    href: "https://tiktok.com",
  },
  {
    platform: "Email",
    handle: "ritual@witchyperformance.com",
    href: "mailto:ritual@witchyperformance.com",
  },
];
