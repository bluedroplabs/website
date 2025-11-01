import type { HTMLAttributes } from "react";

/**
 * Available prose sizes for the RichText component.
 */
export type ProseSize = "sm" | "base" | "lg" | "xl";

/**
 * Props for the RichText component.
 */
export interface IRichText extends HTMLAttributes<HTMLElement> {
  /**
   * The HTML content to be rendered within the RichText component.
   */
  content: string;

  /**
   * The size variant for the prose styling.
   * @default "base"
   */
  size?: ProseSize;
}
