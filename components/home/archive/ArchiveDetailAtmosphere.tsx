import Image from "next/image";

/** Shared atmospheric media for the archive detail panel (collective + performer). */
export function ArchiveDetailAtmosphere() {
  return (
    <div className="archive-detail-atmosphere" aria-hidden="true">
      <Image
        src="/images/archive/collective-atmosphere.png"
        alt=""
        fill
        unoptimized
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="archive-detail-atmosphere-image"
      />
      <div className="archive-detail-atmosphere-veil" />
    </div>
  );
}
