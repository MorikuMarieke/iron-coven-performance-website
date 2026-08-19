import {
  Jacquard_24,
  Libre_Baskerville,
  Open_Sans,
  Rubik_Glitch,
  UnifrakturCook,
  UnifrakturMaguntia,
  VT323,
} from "next/font/google";

export const jacquard24 = Jacquard_24({
  variable: "--font-jacquard-24",
  subsets: ["latin"],
  weight: "400",
});

export const jacquard24Class = Jacquard_24({
  subsets: ["latin"],
  weight: "400",
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const unifrakturCook = UnifrakturCook({
  variable: "--font-unifraktur-cook",
  subsets: ["latin"],
  weight: "700",
});

export const unifrakturMaguntia = UnifrakturMaguntia({
  variable: "--font-unifraktur-maguntia",
  subsets: ["latin"],
  weight: "400",
});

export const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

export const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});
