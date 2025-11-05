import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";
import type { IIconCard } from "../IconCard/IconCard.types";

/**
 * Props for the FeaturedIconListGrid component.
 */
export interface IFeaturedIconListGrid
  extends HTMLAttributes<HTMLElement>,
    Pick<IContentBlock, "description" | "eyebrow"> {
  items: IIconCard[];
}
