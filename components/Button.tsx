import Link from "next/link";
import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export function Button({ variant = "primary", href, className, children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-base/40";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-brand-base to-brand-light text-white shadow-glow hover:from-brand-dark hover:to-brand-base",
    secondary:
      "border border-slate-200/70 bg-white text-slate-800 hover:border-brand-base/50 hover:text-brand-base",
    ghost: "text-slate-600 hover:text-slate-900"
  };

  return (
    <Link href={href} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
