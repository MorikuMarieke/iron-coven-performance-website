import type { Metadata } from "next";
import {
  Geist,
  Libre_Baskerville,
  Rubik_Glitch,
  UnifrakturCook,
  UnifrakturMaguntia,
  VT323,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const unifrakturCook = UnifrakturCook({
  variable: "--font-unifraktur-cook",
  subsets: ["latin"],
  weight: "700",
});

const unifrakturMaguntia = UnifrakturMaguntia({
  variable: "--font-unifraktur-maguntia",
  subsets: ["latin"],
  weight: "400",
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Witchy Performance — A ritual of body, shadow and becoming",
  description:
    "A dark feminine performance collective exploring witchcraft, embodiment, rebellion, and transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${libreBaskerville.variable} ${unifrakturCook.variable} ${unifrakturMaguntia.variable} ${rubikGlitch.variable} ${vt323.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground noise-overlay scanlines">
        {children}
      </body>
    </html>
  );
}
