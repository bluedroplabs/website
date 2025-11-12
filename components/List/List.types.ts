import type { HTMLAttributes } from "react";

/**
 * Props for the List component.
 */
export interface IList extends HTMLAttributes<HTMLUListElement> {
  /**
   * List of items to display within the component
   */
  items: string[];
}
