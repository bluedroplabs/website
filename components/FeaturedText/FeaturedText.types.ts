import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";

/**
 * Variants for the FeaturedText component.
 */
export type TFeaturedTextVariant = "default" | "small";

/**
 * Background variants for the FeaturedText component.
 */
export type TFeaturedTextBgVariant = "sky" | "none";

/**
 * Props for the FeaturedText component.
 */
export interface IFeaturedText
  extends HTMLAttributes<HTMLElement>, Omit<IContentBlock, "variant"> {
  /**
   * Background variant for the FeaturedText component.
   */
  bgVariant?: TFeaturedTextBgVariant;

  /**
   * The main title text.
   */
  variant?: TFeaturedTextVariant;
}
