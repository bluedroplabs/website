import type Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Type representing the size properties of the Button component.
 */
export type TButtonSize = "default" | "icon" | "none" | "lg";

/**
 * Type representing the variant properties of the Button component.
 */
export type TButtonVariant = "default" | "ghost" | "outline" | "special";

/**
 * Combined props for the Button component, including standard button attributes and variant properties.
 */
export type TButton = React.ComponentProps<"button"> & {
  asChild?: boolean;
  href?: string;
} & Partial<ComponentProps<typeof Link>>;

/**
 * Props for the Button component.
 */
export interface IButton extends TButton {
  size?: TButtonSize;
  /**
   * Determines the visual variant of the component.
   * Defaults to `default` if not specified.
   */
  variant?: TButtonVariant;
}
