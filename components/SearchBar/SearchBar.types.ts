import type { HTMLAttributes } from "react";

/**
 * Props for the SearchBar component.
 */
export interface ISearchBar extends HTMLAttributes<HTMLElement> {
  /**
   * Placeholder text for the search input field.
   */
  placeholder?: string;
}
