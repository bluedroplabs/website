import type { HTMLAttributes } from "react";
import type { IResourceCard } from "../ResourceCard/ResourceCard.types";

/**
 * Props for the RelatedPosts component.
 */
export interface IRelatedPosts extends HTMLAttributes<HTMLElement> {
  /**
   * Array of related resource cards to display.
   */
  items: IResourceCard[];
}
