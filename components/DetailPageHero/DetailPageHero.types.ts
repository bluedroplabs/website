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
   * Eyebrow text displayed above the title.
   */
  eyebrow: IContentBlock["eyebrow"];

  /**
   * Image object for displaying an image within the component.
   */
  image: IImage;

  /**
   * Main title text displayed within the component.
   */
  title: IContentBlock["title"];
}
