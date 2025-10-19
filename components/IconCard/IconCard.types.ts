import type { HTMLAttributes } from "react";

/**
 * Defines the available visual variants for the IconCard component.
 */
export type TIconCardVariant = "default" | "inline";

/**
 * Props for the IconCard component.
 */
export interface IIconCard extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Icon component to be rendered within the IconCard.
   */
  icon: string;

  /**
   * Determines the visual variant of the component.
   * Defaults to `primary` if not specified.
   */
  variant?: TIconCardVariant;
}
