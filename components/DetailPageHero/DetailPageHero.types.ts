import type { IImage } from "@/types/image.types";
import type { HTMLAttributes } from "react";
import type { IContentBlock } from "../ContentBlock/ContentBlock.types";

/**
 * Props for the DetailPageHero component.
 */
export interface IDetailPageHero extends HTMLAttributes<HTMLElement> {
  /**
   * Author name displayed within or alongside the component.
   */
  author: IContentBlock["author"];

  /**
   * Date text displayed within or alongside the component.
   */
  date: IContentBlock["date"];

  /**
   * Description text providing additional details.
   */
  description?: IContentBlock["description"];

  /**
   * Eyebrow text displayed above the title.
   */
  eyebrow: IContentBlock["eyebrow"];

  /**
   * Image object for displaying an image within the component.
   */
  image: IImage;

  /**
   * Primary call-to-action button configuration.
   */
  primaryCTA?: IContentBlock["primaryCTA"];

  /**
   * Secondary call-to-action button configuration.
   */
  secondaryCTA?: IContentBlock["secondaryCTA"];

  /**
   * Main title text displayed within the component.
   */
  title: IContentBlock["title"];
}
