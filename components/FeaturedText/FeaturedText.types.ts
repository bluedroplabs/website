import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";

/**
 * Variants for the FeaturedText component.
 */
export type TFeaturedTextVariant = "default" | "small";

/**
 * Props for the FeaturedText component.
 */
export interface IFeaturedText
  extends HTMLAttributes<HTMLElement>,
    Omit<IContentBlock, "variant"> {
  /**
   * The main title text.
   */
  variant?: TFeaturedTextVariant;
}
