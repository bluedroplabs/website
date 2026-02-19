import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";

/**
 * Props for each item in the FeaturedAccordionList.
 */
export interface IFeaturedAccordionListItem {
  /**
   * The content of the accordion item.
   */
  content: string;

  /**
   * The title of the accordion item.
   */
  title: string;
}

/**
 * Props for the FeaturedAccordionList component.
 */
export interface IFeaturedAccordionList
  extends HTMLAttributes<HTMLElement>,
    IContentBlock {
  /**
   * Items to be displayed in the accordion list.
   */
  items: IFeaturedAccordionListItem[];
}
