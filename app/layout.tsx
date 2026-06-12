import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Libre_Baskerville,
  UnifrakturCook,
  UnifrakturMaguntia,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${unifrakturCook.variable} ${unifrakturMaguntia.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground noise-overlay scanlines">
        {children}
      </body>
    </html>
  );
}
