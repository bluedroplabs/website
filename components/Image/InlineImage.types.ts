import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";

/**
 * Props for the InlineImage component.
 */
export interface IInlineImage extends HTMLAttributes<HTMLElement> {
  /**
   * The image data to be displayed within the InlineImage component.
   */
  image: IImage;
}
