import type { TContentBlockVariant } from "@/components/ContentBlock/ContentBlock.types";
import type { HTMLAttributes } from "react";
import type { IIconCard } from "../IconCard/IconCard.types";

/**
 * Props for the FeaturedIconGrid component.
 */
export interface IFeaturedIconGrid extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Eyebrow text displayed above the title.
   */
  eyebrow?: string;

  /**
   * Array of items to be displayed in the icon grid.
   */
  items: IIconCard[];

  /**
   * Visual style variant of the icon grid.
   */
  variant?: TContentBlockVariant;
}
