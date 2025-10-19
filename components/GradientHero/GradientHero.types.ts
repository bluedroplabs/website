import type { HTMLAttributes } from "react";

/**
 * Variants that define the visual style of the GradientHero component.
 * - `primary`: The main style, usually used for emphasis.
 * - `secondary`: A subtle style, used for less prominent display.
 */
export type TGradientHeroVariant = "primary" | "secondary";

/**
 * Props for the GradientHero component.
 */
export interface IGradientHero extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Optional short description text displayed within or alongside the component.
   */
  eyebrow?: string;

  /**
   * Determines the visual variant of the component.
   * Defaults to `primary` if not specified.
   */
  variant?: TGradientHeroVariant;
}
