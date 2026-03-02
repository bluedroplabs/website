import type { HTMLAttributes } from "react";
import type { IResourceCard } from "../ResourceCard/ResourceCard.types";

/**
 * Props for the RelatedPosts component.
 */
export interface IRelatedPosts extends HTMLAttributes<HTMLElement> {
  /**
   * Section title displayed above the related posts list.
   */
  title: string;

  /**
   * Array of related resource cards to display.
   */
  items: IResourceCard[];
}
