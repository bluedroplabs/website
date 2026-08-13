import type { HTMLAttributes } from "react";

/**
 * A single service card rendered inside a category group.
 */
export interface IFeaturedServiceCategoriesItem {
  /**
   * Bulleted feature list rendered below the card title.
   */
  features: string[];

  /**
   * Icon name matching an entry in the IconCard icon map.
   */
  icon: string;

  /**
   * Title of the service card.
   */
  title: string;
}

/**
 * A category group — category heading, intro paragraph, and the service
 * cards that belong to it.
 */
export interface IFeaturedServiceCategoriesGroup {
  /**
   * Short intro paragraph rendered alongside the category title.
   */
  description: string;

  /**
   * Service cards rendered in the category grid. Grid column count is driven
   * by `items.length` (3 → 3-col, 4 → 4-col on lg breakpoints).
   */
  items: IFeaturedServiceCategoriesItem[];

  /**
   * Category title.
   */
  title: string;
}

/**
 * Props for the FeaturedServiceCategories component.
 *
 * Renders a section with a 2-column intro header (eyebrow + title left,
 * description right) followed by any number of category groups. Each group
 * repeats the same header shape above its own row of icon-with-bullet service
 * cards.
 */
export interface IFeaturedServiceCategories extends HTMLAttributes<HTMLElement> {
  /**
   * Description paragraph in the section header.
   */
  description?: string;

  /**
   * Eyebrow label above the section title.
   */
  eyebrow?: string;

  /**
   * Category groups rendered below the section header.
   */
  groups: IFeaturedServiceCategoriesGroup[];

  /**
   * Section title.
   */
  title: string;
}
