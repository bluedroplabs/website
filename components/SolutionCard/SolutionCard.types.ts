import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Defines the possible visual variants for the SolutionCard component.
 */
export type TSolutionCardVariant = "basic" | "full";

/**
 * Props for the SolutionCard component.
 */
export interface ISolutionCard extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * A short, descriptive label or heading for the card.
   */
  eyebrow?: string;

  /**
   * The URL to link to when the card is clicked.
   */
  href: string;

  /**
   * Image properties for displaying an image within the card.
   */
  image: IImage;

  /**
   * Determines the visual variant of the component.
   * Defaults to `basic` if not specified.
   */
  variant?: TSolutionCardVariant;
}
