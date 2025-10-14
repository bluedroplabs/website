import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Props for the LogoMarquee component.
 */
export interface ILogoMarquee extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Array of logo images to be displayed in the marquee.
   */
  logos: IImage[];
}
