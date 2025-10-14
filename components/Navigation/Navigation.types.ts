import type { ICTA } from "@/types/cta.types";
import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Props for the Navigation component.
 */
export interface INavigation extends HTMLAttributes<HTMLElement> {
  /**
   * Call to action button properties.
   */
  cta: ICTA;

  /**
   * Dark logo image properties.
   */
  darkLogo: IImage;

  /**
   * Array of navigation links.
   */
  links: ICTA[];

  /**
   * Logo element to be displayed in the navigation.
   */
  logo: IImage;
}
