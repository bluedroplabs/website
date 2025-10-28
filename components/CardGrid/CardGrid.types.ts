import type { HTMLAttributes } from "react";
import type { IMultiSelect } from "../MultiSelect/MultiSelect.types";
import type { IResourceCard } from "../ResourceCard/ResourceCard.types";

/**
 * Parameters for the updateCards function in the CardGrid component.
 */
export interface ICardGridUpdateCardsParams {
  page?: number;
  searchTerm?: string;
  topic?: string[];
  type?: string[];
}

/**
 * Type definition for the updateCards function in the CardGrid component.
 * It accepts filter parameters and returns a Promise that resolves to an array of IResourceCard.
 */
export type TCardGridUpdateCards = (
  params: ICardGridUpdateCardsParams,
) => Promise<IResourceCard[]>;

/**
 * Props for the CardGrid component.
 */
export interface ICardGrid extends HTMLAttributes<HTMLElement> {
  /**
   * Optional filters to apply to the card grid.
   */
  filters?: IMultiSelect[];

  /**
   * Array of resource card items to display within the grid.
   */
  items: IResourceCard[];

  /**
   * Optional limit on the number of items to display.
   */
  limit?: number;

  /**
   * Total number of items available (for pagination purposes).
   */
  total: number;

  /**
   * Server action function to update the displayed cards based on filter selections.
   * Accepts filter parameters and returns a Promise with updated cards.
   */
  updateCards?: TCardGridUpdateCards;
}
