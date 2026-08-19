import { type ReactNode } from "react";
import { jacquard24Class } from "@/lib/fonts";

type ChromeButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
};

/** Simple late-90s desktop button: green outline, grey bevel, charcoal fill. */
export function ChromeButton({
  children,
  href,
  type = "button",
  className = "",
  "aria-label": ariaLabel,
}: ChromeButtonProps) {
  const cls = `cta-btn${className ? ` ${className}` : ""}`;
  const label = (
    <span className={`cta-btn-label ${jacquard24Class.className}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} className={cls} aria-label={ariaLabel}>
      {label}
    </button>
  );
}
