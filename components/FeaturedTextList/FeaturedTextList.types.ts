import type { HTMLAttributes } from "react";

/**
 * Props for the FeaturedTextList component.
 */
export interface IFeaturedTextList extends HTMLAttributes<HTMLElement> {
  /**
   * Text items to be displayed in the list.
   */
  items: string[];

  /**
   * Optional flag to remove padding from the container.
   */
  noPadding?: boolean;
}
