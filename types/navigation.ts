import type { ICTA } from "./cta.types";

export interface INavigation {
  /**
   * The title of the navigation item.
   */
  title: string;

  /**
   * An array of link items associated with the navigation item.
   */
  links: ICTA[];
}
