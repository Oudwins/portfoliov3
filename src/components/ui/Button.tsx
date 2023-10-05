import type { ReactNode } from "react";
import { cn } from "../../lib/tailwindcss";

export const ButtonLinkPrimary = ({
  children,
  href,
  className,
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
  [x: string]: any;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export const ButtonLinkSecondary = ({
  children,
  href,
  className,
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
  [x: string]: any;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-block rounded px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-50 hover:text-gray-900 border-2 border-gray-50 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export const ButtonPrimary = ({
  children,
  type = "button",
  className,
  ...props
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  [x: string]: any;
}) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
