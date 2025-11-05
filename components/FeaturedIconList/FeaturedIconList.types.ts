import type { HTMLAttributes } from "react";
import type { IIconCard } from "../IconCard/IconCard.types";

/**
 * Props for the FeaturedIconList component.
 */
export interface IFeaturedIconList extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * List of icon cards to display within the component.
   */
  items: IIconCard[];
}
