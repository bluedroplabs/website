import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";
import type { ISolutionCard } from "../SolutionCard/SolutionCard.types";

/**
 * Props for the FeaturedSolutionsGrid component.
 */
export interface IFeaturedSolutionsGrid extends HTMLAttributes<HTMLElement> {
  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;

  /**
   * Formatted solution cards arranged in a grid layout.
   */
  formattedSolutionsSet?: ISolutionCard[][];

  /**
   * Optional Primary CTA (Call to Action) object for user interaction.
   */
  primaryCTA?: ICTA;

  /**
   * List of featured solution cards to display within the grid.
   */
  solutions: ISolutionCard[];
}
