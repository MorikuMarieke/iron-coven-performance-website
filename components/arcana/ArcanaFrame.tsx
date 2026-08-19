import type { ReactNode } from "react";
import "./arcana-frame.css";

export function ArcanaFrame({
  color = "#fafae6",
  className = "",
  children,
}: {
  color?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`arcana-frame ${className}`.trim()}
      style={{ color }}
      data-arcana-frame=""
    >
      {children ? <div className="arcana-frame-content">{children}</div> : null}
    </div>
  );
}
