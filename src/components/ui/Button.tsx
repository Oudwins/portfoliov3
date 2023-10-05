import type { ReactNode } from "react";
import { cn } from "../../lib/tailwindcss";

const variants = {
  primary:
    "inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none",
  secondary:
    "inline-block rounded px-12 py-3 text-sm font-medium transition hover:bg-indigo-700 border-indigo-600 border-2 hover:text-white focus:outline-none",
};
export const ButtonLink = ({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: keyof typeof variants;
  [x: string]: any;
}) => {
  return (
    <a href={href} className={cn(variants[variant], className)} {...props}>
      {children}
    </a>
  );
};

export const Button = ({
  children,
  type = "button",
  className,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: keyof typeof variants;
  [x: string]: any;
}) => {
  return (
    <button type={type} className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
