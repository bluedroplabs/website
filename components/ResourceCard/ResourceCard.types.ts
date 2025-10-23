import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Variants that define the visual style of the ResourceCard component.
 * - `default`: The main style, usually used for emphasis.
 * - `featured`: A style that highlights important content.
 */
export type TResourceCardVariant = "default" | "featured";

/**
 * Props for the ResourceCard component.
 */
export interface IResourceCard extends HTMLAttributes<HTMLElement> {
  /**
   * Date string displayed on the ResourceCard.
   */
  date: string;

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Text displayed above the title
   */
  eyebrow: string;

  /**
   * Image properties for displaying an image within the ResourceCard.
   */
  image: IImage;

  /**
   * Determines the visual variant of the component.
   * Defaults to `default` if not specified.
   */
  variant?: TResourceCardVariant;
}
