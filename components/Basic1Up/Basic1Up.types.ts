import type { ICTA } from "@/types/cta.types";
import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Alignment options for the Basic1Up component.
 */
export type TBasic1UpAlignment = "left" | "right";

/**
 * Props for the Basic1Up component.
 */
export interface IBasic1Up extends HTMLAttributes<HTMLElement> {
  /**
   * Determines the visual alignment of the component.
   * Defaults to `left` if not specified.
   */
  alignment?: TBasic1UpAlignment;

  /**
   * Blockquote text displayed within the component.
   */
  blockquote?: string;

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * A small piece of text, often used as a label or category indicator.
   */
  eyebrow?: string;

  /**
   * Image displayed within the component.
   */
  image: IImage;

  /**
   * Primary call-to-action button.
   */
  primaryCTA?: ICTA;

  /**
   * Secondary call-to-action button.
   */
  secondaryCTA?: ICTA;
}
