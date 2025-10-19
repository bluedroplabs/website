import type { HTMLAttributes, ReactNode } from "react";

export interface IComparisonTableColumn {
  /**
   * Header content for the column
   */
  header: ReactNode;

  /**
   * Name of the column for identification purposes.
   */
  name: string;

  /**
   * Indicates if the column should be visually highlighted.
   */
  isHighlighted?: boolean;
}

export interface IComparisonTableRow {
  /**
   * Label for the row, displayed in the first column.
   */
  label: string;

  /**
   * Array of boolean values indicating the presence or absence of a feature in each column.
   */
  values: boolean[];
}

/**
 * Props for the ComparisonTable component.
 */
export interface IComparisonTable extends HTMLAttributes<HTMLElement> {
  /**
   * Caption for the comparison table for accessibility purposes.
   */
  caption?: string;

  /**
   * Array of column headers for the comparison table.
   */
  columns: IComparisonTableColumn[];

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Text displayed above the main title.
   */
  eyebrow: string;

  /**
   * Array of rows, each containing an array of cell values corresponding to the columns.
   */
  rows: IComparisonTableRow[];

  /**
   * Main title text of the component.
   */
  title?: string;
}
