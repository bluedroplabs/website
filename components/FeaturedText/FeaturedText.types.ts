import type { HTMLAttributes } from "react";

/**
 * Props for the FeaturedText component.
 */
export interface IFeaturedText extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Eyebrow text displayed above the title, often used for categorization or emphasis.
   */
  eyebrow?: string;
}
