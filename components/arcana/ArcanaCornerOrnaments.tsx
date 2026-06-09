export function ArcanaCornerOrnaments({ color }: { color: string }) {
  const sw = 1.15;

  const Corner = ({
    className,
    transform,
  }: {
    className: string;
    transform?: string;
  }) => (
    <svg
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute h-6 w-6 ${className}`}
      style={{ color, transform, transformOrigin: "center" }}
      aria-hidden="true"
    >
      <path
        d="M3 3h9M3 3v9M3 3l6 6M3 16h4M16 3v4"
        fill="none"
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="square"
      />
      <path d="M3 3l2 2M8 3l-1 1M3 8l1-1" stroke="currentColor" strokeWidth={0.75} opacity="0.6" />
      <rect x="2.5" y="2.5" width="2" height="2" fill="none" stroke="currentColor" strokeWidth={0.75} />
    </svg>
  );

  return (
    <>
      <Corner className="left-0 top-0" />
      <Corner className="right-0 top-0" transform="scaleX(-1)" />
      <Corner className="bottom-0 left-0" transform="scaleY(-1)" />
      <Corner className="bottom-0 right-0" transform="scale(-1)" />
    </>
  );
}
