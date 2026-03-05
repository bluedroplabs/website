import type { HTMLAttributes } from "react";

/**
 * Represents a single highlight item in the HighlightsTable.
 */
export interface IHighlightsTableHighlight {
  /**
   * The title of the highlight item.
   */
  title: string;

  /**
   * A brief description or summary of the highlight item.
   */
  description: string;
}

/**
 * Props for the HighlightsTable component.
 */
export interface IHighlightsTable extends HTMLAttributes<HTMLElement> {
  /**
   *
   */
  highlights: IHighlightsTableHighlight[];
}
