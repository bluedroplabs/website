import type { ReactNode } from "react";

/**
 * Target options for link behavior.
 */
export type TCTATarget = "_self" | "_blank" | "_parent" | "_top";

/**
 * Interface representing a Call-To-Action (CTA) component.
 */
export interface ICTA {
  /**
   * The text to be displayed on the CTA button or link.
   */
  children: ReactNode;

  /**
   * The URL that the CTA should link to. If not provided, the CTA may function as a button.
   */
  href?: string;

  /**
   * Optional: Callback function to be called when the CTA is clicked.
   */
  onClick?: () => void;

  /**
   * Optional: Determines if the link should open in a new tab.
   */
  target?: TCTATarget;
}
