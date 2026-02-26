import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Logo item rendered via an Icon component (by name) instead of an image src.
 */
export interface ILogoIcon {
  alt: string;
  icon: string;
  width?: number;
  height?: number;
}

/**
 * Props for the LogoMarquee component.
 */
export interface ILogoMarquee extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Array of logos: either image-based (src) or icon-based (icon name).
   */
  logos: (IImage | ILogoIcon)[];
}
