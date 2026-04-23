import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";
import type { ISolutionCard } from "../SolutionCard/SolutionCard.types";

/**
 * Props for the FeaturedSolutionsRow component.
 *
 * Renders an optional 2-column header (title + description) followed by a
 * single row of equally-sized solution cards. Unlike `FeaturedSolutionsGrid`,
 * this component always lays cards out in a clean 3-up (or N-up) row with no
 * full-width variants.
 */
export interface IFeaturedSolutionsRow extends HTMLAttributes<HTMLElement> {
  /**
   * Description text displayed alongside the title in the section header.
   */
  description?: string;

  /**
   * Eyebrow text rendered above the section title.
   */
  eyebrow?: string;

  /**
   * Optional primary CTA rendered in the section header.
   */
  primaryCTA?: ICTA;

  /**
   * The solution cards rendered in the row.
   */
  solutions: ISolutionCard[];

  /**
   * Main title text for the section header.
   */
  title?: string;
}
