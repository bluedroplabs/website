import type { HTMLAttributes } from "react";

/**
 * A single step rendered by the FeaturedProcessList component.
 */
export interface IFeaturedProcessListItem {
  /**
   * Description text for the step.
   */
  description: string;

  /**
   * Title of the step.
   */
  title: string;
}

/**
 * Props for the FeaturedProcessList component.
 *
 * Renders a section heading followed by a vertically stacked list of numbered
 * process steps. Each row is split into a left column (auto-incremented
 * bracketed index + title) and a right column (description), separated by
 * full-width horizontal dividers.
 */
export interface IFeaturedProcessList extends HTMLAttributes<HTMLElement> {
  /**
   * Optional description rendered alongside the section title.
   */
  description?: string;

  /**
   * Ordered list of process steps.
   */
  items: IFeaturedProcessListItem[];

  /**
   * Section heading rendered above the list.
   */
  title?: string;
}
