export default function ArcanaFrameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Jacquard+24&family=Khula:wght@300;400;600;700;800&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Manufacturing+Consent&family=Mozilla+Headline:wght@200..700&family=Mukta+Vaani:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik+Glitch&family=Signika:wght@300..700&family=Stack+Sans+Notch:wght@200..700&family=UnifrakturCook:wght@700&family=UnifrakturMaguntia&family=VT323&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
}
