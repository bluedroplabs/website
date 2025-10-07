import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/utils/classes";
import { isExternalLink } from "@/utils/validation";
import type { IButton } from "./Button.types";

const buttonVariants = cva(
  "cursor-pointer leading-none inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "border bg-button-default-bg border-transparent font-mono font-medium uppercase text-button-default-text hover:bg-button-default-bg-hover hover:text-button-default-bg-hover-text",
        ghost: "font-light text-default-strong",
        outline:
          "border bg-transparent border-button-default-bg font-mono font-medium uppercase text-button-outline-text hover:bg-button-default-bg-hover hover:text-button-default-bg-hover-text",
        special:
          "bg-button-default-bg-hover text-button-default-bg-hover-text font-mono font-medium uppercase text-button-special-text hover:bg-button-special-bg-hover hover:text-button-special-bg-hover-text",
      },
      size: {
        default: "px-7.75 py-4.75 has-[>svg]:px-3",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  asChild = false,
  className,
  href,
  size,
  variant,
  ...props
}: IButton) {
  const classes = cn(buttonVariants({ variant, size, className }));

  // If asChild is true, use Slot
  if (asChild) {
    return <Slot {...props} className={classes} data-slot="button" />;
  }

  // If href is provided, render as Next.js Link
  if (href) {
    const { type: _type, ...linkProps } = props;
    const isExternal = isExternalLink(href);
    const hasTarget = linkProps.target === "_blank";

    // Automatically add rel for external links witzh target="_blank"
    const rel =
      isExternal && hasTarget && !linkProps.rel
        ? "noopener noreferrer"
        : linkProps.rel;

    return <Link {...linkProps} className={classes} href={href} rel={rel} />;
  }

  // Default: render as button
  return <button {...props} className={classes} />;
}

export { Button, buttonVariants };
