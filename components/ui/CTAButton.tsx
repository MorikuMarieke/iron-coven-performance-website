import { type ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

const baseStyles =
  "inline-flex min-h-11 items-center justify-center border border-white px-6 py-2.5 text-center text-sm uppercase tracking-widest transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const variants = {
  primary:
    "bg-white text-black hover:bg-transparent hover:text-white",
  secondary:
    "bg-transparent text-white hover:bg-white hover:text-black",
};

export function CTAButton({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
}: CTAButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
