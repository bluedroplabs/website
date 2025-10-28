import type { FormEvent, HTMLAttributes } from "react";

/**
 * Props for the SearchBar component.
 */
export interface ISearchBar
  extends Omit<HTMLAttributes<HTMLInputElement>, "onSubmit"> {
  /**
   * Function to handle form submission.
   */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;

  /**
   * Placeholder text for the search input field.
   */
  placeholder?: string;
}
