import type { HTMLAttributes } from "react";

/**
 * Props for the FeaturedTextList component.
 */
export interface IFeaturedTextList extends HTMLAttributes<HTMLElement> {
  /**
   *
   */
  items: string[];
}
