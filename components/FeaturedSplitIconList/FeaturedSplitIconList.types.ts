import type { HTMLAttributes } from "react";
import type { IIconCard } from "../IconCard/IconCard.types";

/**
 * Props for the FeaturedSplitIconList component.
 *
 * Renders a two-column section: a large heading on the left and a vertically
 * stacked list of inline icon + title + description items on the right.
 */
export interface IFeaturedSplitIconList extends HTMLAttributes<HTMLElement> {
  /**
   * Items rendered in the right column using the inline IconCard variant.
   */
  items: IIconCard[];

  /**
   * Heading rendered in the left column.
   */
  title: string;
}
