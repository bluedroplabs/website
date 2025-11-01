import type { HTMLAttributes } from "react";
import type { IInlineImage } from "../Image/InlineImage.types";
import type { IMetrics } from "../Metrics/Metrics.types";
import type { IRichText } from "../RichText/RichText.types";
import type { IDetailsAside } from "./../DetailsAside/DetailsAside.types";

export interface IInlineImageData extends IInlineImage {
  type: "InlineImage";
}
export interface IMetricsData extends IMetrics {
  type: "Metrics";
}
export interface IRichTextData extends IRichText {
  type: "RichText";
}

export type TWYSIWYGComponentData =
  | IInlineImageData
  | IMetricsData
  | IRichTextData;

export type TWYSIWYGComponent = TWYSIWYGComponentData["type"];

export type TWYSIWYGWithType<A> = A extends { type?: TWYSIWYGComponent }
  ? A
  : never;

export type TWYSIWYGComponentWithType = TWYSIWYGWithType<TWYSIWYGComponentData>;

/**
 * Props for the Wysiwyg component.
 */
export interface IWysiwyg extends HTMLAttributes<HTMLElement> {
  /**
   * Components used within the Wysiwyg editor.
   */
  components: TWYSIWYGComponentData[];

  /**
   * Details content for the Wysiwyg component.
   */
  details: IDetailsAside;
}
