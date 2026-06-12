export function TitleOrnament({ color }: { color: string }) {
  return (
    <div className="mt-2 flex items-center justify-center gap-2 opacity-70" aria-hidden="true">
      <span className="h-px w-6" style={{ backgroundColor: color }} />
      <span className="text-[10px]" style={{ color }}>
        ✦
      </span>
      <span className="h-px w-6" style={{ backgroundColor: color }} />
    </div>
  );
}
