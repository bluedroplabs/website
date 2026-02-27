import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";
import type { IIconCard } from "../IconCard/IconCard.types";

export type TFeaturedIconListGridItem = Pick<
  IIconCard,
  "icon" | "title" | "description"
>;

export interface IFeaturedIconListGrid
  extends HTMLAttributes<HTMLElement>,
    Pick<IContentBlock, "description" | "eyebrow" | "title"> {
  items?: TFeaturedIconListGridItem[];
}
