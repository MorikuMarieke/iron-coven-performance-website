import { arcanaAccents } from "./arcana-colors";

export type ArcanaAccent = {
  primary: string;
  secondary: string;
  tertiary?: string;
  glow: string;
  border: string;
  text: string;
  panelBorder: string;
};

export type ArcanaPerformer = {
  slug: string;
  archetype: string;
  name: string;
  romanNumeral: string;
  symbol: string;
  symbolSrc: string;
  portraitSrc: string;
  subtitle: string;
  theme: string;
  accent: ArcanaAccent;
  bio: string;
  cardDescription: string;
  longBio: string;
  performanceDescription: string;
  role: string;
  alignment: string;
  element: string;
  medium: string[];
  motto: string;
};

export const performers: ArcanaPerformer[] = [
  {
    slug: "trixxxie",
    archetype: "The Anarchist",
    name: "Trixxxie",
    romanNumeral: "IX",
    symbol: "broken mirror",
    symbolSrc: "/images/arcana/Mirror%20Arcana.svg",
    portraitSrc: "/images/arcana/portraits/trixxxie.svg",
    subtitle:
      "A BREAKER OF RULES AND STRUCTURES. WILD SPIRIT, TRUTH SPEAKER, DISRUPTOR.",
    theme: "fractured identity · rebellion · distorted reflections",
    accent: {
      ...arcanaAccents.anarchist,
      glow: "",
      text: "#FFFFFF",
    },
    bio: "Fragmented light, unbroken will — rebellion stitched into every gesture.",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    longBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trixxxie enters the circle as pure disruption: a mirror held up to every structure that dares to hold still.",
    performanceDescription:
      "Performance work rooted in confrontation, distortion, and the refusal to perform comfort.",
    role: "Disruptor",
    alignment: "Disruption",
    element: "Chaos",
    medium: ["Chains", "Mirror"],
    motto: "I don't follow systems.\nI break them.",
  },
  {
    slug: "moth",
    archetype: "The Shapeshifter",
    name: "Moth",
    romanNumeral: "II",
    symbol: "moth",
    symbolSrc: "/images/arcana/Moth%20Arcana.svg",
    portraitSrc: "/images/arcana/portraits/moth.svg",
    subtitle:
      "A CREATURE OF TRANSFORMATION. LIMINAL, METAMORPHIC, DRAWN TO FLAME.",
    theme: "transformation · becoming · liminality",
    accent: {
      ...arcanaAccents.shapeshifter,
      glow: "",
      text: "#EDEDED",
    },
    bio: "Metamorphosis as ritual — neither shadow nor light, always becoming.",
    cardDescription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    longBio:
      "Pellentesque habitant morbi tristique senectus. Moth moves between states: neither fully shadow nor fully light, always becoming.",
    performanceDescription:
      "Embodied metamorphosis — soft, insectile, and endlessly in flux.",
    role: "The Shapeshifter",
    alignment: "Transformation",
    element: "Air",
    medium: ["Silk", "Hoop"],
    motto: "I shed, I shift,\nI become.",
  },
  {
    slug: "elena",
    archetype: "The Sorceress",
    name: "Elena",
    romanNumeral: "XI",
    symbol: "snake",
    symbolSrc: "/images/arcana/Snake%20Arcana.svg",
    portraitSrc: "/images/arcana/portraits/elena.svg",
    subtitle:
      "A WEAVER OF SHADOW AND SPELL. ANCIENT KNOWLEDGE, RITUAL POWER, FORBIDDEN ARTS.",
    theme: "ritual · incantation · shadow · arcane knowledge",
    accent: {
      ...arcanaAccents.sorceress,
      glow: "",
      text: "#FFFFFF",
    },
    bio: "Silver tongue, serpent grace — spellcraft woven through gesture and gaze.",
    cardDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    longBio:
      "Excepteur sint occaecat cupidatat non proident. Elena moves through the coven as living grimoire — each performance a working of shadow, incantation, and withheld power.",
    performanceDescription:
      "Ritual performance rooted in spellwork, serpentine movement, and the slow unfurling of arcane force.",
    role: "Sorceress",
    alignment: "Arcana",
    element: "Shadow",
    medium: ["Pole", "Chains"],
    motto: "Knowledge is\na kind of spell.",
  },
  {
    slug: "annaestheesia",
    archetype: "The Catalyst",
    name: "Annaestheesia",
    romanNumeral: "IV",
    symbol: "comet",
    symbolSrc: "/images/arcana/Eclipse%20Arcana.svg",
    portraitSrc: "/images/arcana/portraits/annaestheesia.svg",
    subtitle:
      "AN AGENT OF IGNITION AND CHANGE. VELOCITY, VOLTAGE, MOMENTUM.",
    theme: "ignition · change · momentum · movement",
    accent: {
      ...arcanaAccents.catalyst,
      glow: "",
      text: "#FFFFFF",
    },
    bio: "A comet through the coven — velocity, voltage, transformation.",
    cardDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    longBio:
      "Vivamus luctus urna sed urna ultricies. Annaestheesia arrives as ignition: the spark that makes everything after irreversible.",
    performanceDescription:
      "High-energy rupture — comet-strike choreography that leaves the room altered.",
    role: "Ignition",
    alignment: "Change",
    element: "Energy",
    medium: ["Pole", "Hoop"],
    motto: "Strike once.\nChange everything.",
  },
];
