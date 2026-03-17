import type { HTMLAttributes } from "react";
import type { IResourceCard } from "../ResourceCard/ResourceCard.types";

/**
 * Props for the RelatedArticles component.
 */
export interface IRelatedArticles extends HTMLAttributes<HTMLElement> {
  /**
   * Section title displayed above the related articles list.
   */
  title: string;

  /**
   * Array of related resource cards to display.
   */
  items: IResourceCard[];
}
