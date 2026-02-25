import type { ICTA } from "@/types/cta.types";
import type { ComponentType, HTMLAttributes } from "react";

/**
 * Text alignment options for the ContentBlock component.
 */
export type TContentBlockVariant = "left" | "center" | "inline";

/**
 * Variant options for the eyebrow text.
 */
export type TContentBlockEyebrowVariant = "default" | "highlight";

/**
 * HTML tag options for the title element.
 */
export type TContentBlockTitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Variant options for the title text.
 */
export type TContentBlockTitleVariant =
  | "default"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "gradient-hero"
  | "resource-card-default"
  | "resource-card-featured";

/**
 * Props for the ContentBlock component.
 */
export interface IContentBlock
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /**
   * Author name displayed within the component.
   */
  author?: string;

  /**
   * Custom class name for the author text.
   */
  authorClassName?: string;

  /**
   * Blockquote text displayed within the component.
   */
  blockquote?: string;

  /**
   * Custom class name for the blockquote element.
   */
  blockquoteClassName?: string;

  /**
   * Custom class name for the content wrapper (description, blockquote, CTAs).
   */
  contentClassName?: string;

  /**
   * Custom class name for the CTA group container.
   */
  ctaGroupClassName?: string;

  /**
   * When true, groups header (eyebrow, title) with description in one block with gap-5,
   * and uses gap-8 between that group, blockquote, and CTAs. Matches Figma two-column layout.
   */
  groupHeaderWithDescription?: boolean;

  /**
   * Date text displayed alongside the eyebrow.
   */
  date?: string;

  /**
   * Custom class name for the date text.
   */
  dateClassName?: string;

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Custom class name for the description text.
   */
  descriptionClassName?: string;

  /**
   * Eyebrow text displayed above the main title.
   */
  eyebrow?: string;

  /**
   * Custom class name for the eyebrow text.
   */
  eyebrowClassName?: string;

  /**
   * Variant of the eyebrow text.
   */
  eyebrowVariant?: TContentBlockEyebrowVariant;

  /**
   * Icon component to be displayed at the top of the ContentBlock.
   */
  Icon?: ComponentType<HTMLAttributes<SVGElement>>;

  /**
   * Custom class name for the icon component.
   */
  iconClassName?: string;

  /**
   * Primary call-to-action (CTA) object containing properties like label and URL.
   */
  primaryCTA?: ICTA;

  /**
   * Custom class name for the primary CTA button.
   */
  primaryCTAClassName?: string;

  /**
   * Secondary call-to-action (CTA) object containing properties like label and URL.
   */
  secondaryCTA?: ICTA;

  /**
   * Custom class name for the secondary CTA button.
   */
  secondaryCTAClassName?: string;

  /**
   * Main title text displayed prominently within the component.
   */
  title?: string;

  /**
   * Custom class name for the title text.
   */
  titleClassName?: string;

  /**
   * HTML tag to be used for the title element
   */
  titleTag?: TContentBlockTitleTag;

  /**
   * Variant of the title text.
   */
  titleVariant?: TContentBlockTitleVariant;

  /**
   * Variant for the overall ContentBlock alignment.
   */
  variant?: TContentBlockVariant;
}
