import type { Metadata } from "next";
import "./globals.css";
import {
  jacquard24,
  libreBaskerville,
  openSans,
  rubikGlitch,
  unifrakturCook,
  unifrakturMaguntia,
  vt323,
} from "@/lib/fonts";


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
      className={`${openSans.variable} ${jacquard24.variable} ${libreBaskerville.variable} ${unifrakturCook.variable} ${unifrakturMaguntia.variable} ${rubikGlitch.variable} ${vt323.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Jacquard+24&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground noise-overlay scanlines">
        {children}
      </body>
    </html>
  );
}
