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
    symbolSrc: "/images/arcana/broken-mirror.gif",
    portraitSrc: "/images/arcana/portraits/trixxxie.png",
    subtitle:
      "A BREAKER OF RULES AND STRUCTURES. WILD SPIRIT, TRUTH SPEAKER, DISRUPTOR.",
    theme: "fractured identity · rebellion · distorted reflections",
    accent: {
      primary: "#FF3FA4",
      secondary: "#FF7EDB",
      glow: "",
      border: "#FF3FA4",
      text: "#FFFFFF",
      panelBorder: "#FF7EDB",
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
    symbolSrc: "/images/arcana/moth.gif",
    portraitSrc: "/images/arcana/portraits/moth.png",
    subtitle:
      "A CREATURE OF TRANSFORMATION. LIMINAL, METAMORPHIC, DRAWN TO FLAME.",
    theme: "transformation · becoming · liminality",
    accent: {
      primary: "#9EF5C8",
      secondary: "#C6F7D6",
      glow: "",
      border: "#9EF5C8",
      text: "#EDEDED",
      panelBorder: "#C6F7D6",
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
    symbolSrc: "/images/arcana/snake.gif",
    portraitSrc: "/images/arcana/portraits/elena.png",
    subtitle:
      "A WEAVER OF SHADOW AND SPELL. ANCIENT KNOWLEDGE, RITUAL POWER, FORBIDDEN ARTS.",
    theme: "ritual · incantation · shadow · arcane knowledge",
    accent: {
      primary: "#D9D9D9",
      secondary: "#A764FF",
      tertiary: "#FF4FCF",
      glow: "",
      border: "#D9D9D9",
      text: "#FFFFFF",
      panelBorder: "#A764FF",
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
    symbolSrc: "/images/arcana/comet.gif",
    portraitSrc: "/images/arcana/portraits/annaestheesia.png",
    subtitle:
      "AN AGENT OF IGNITION AND CHANGE. VELOCITY, VOLTAGE, MOMENTUM.",
    theme: "ignition · change · momentum · movement",
    accent: {
      primary: "#57B8FF",
      secondary: "#8D72FF",
      tertiary: "#A5D7FF",
      glow: "",
      border: "#57B8FF",
      text: "#FFFFFF",
      panelBorder: "#8D72FF",
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
