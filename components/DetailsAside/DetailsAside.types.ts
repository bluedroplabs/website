import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

export interface IDetailAsideDetailItem {
  text: string;
  href: string;
}

export interface IDetailAsideDetail {
  label: string;
  items: (string | IDetailAsideDetailItem)[];
}

/**
 * Props for the DetailsAside component.
 */
export interface IDetailsAside extends HTMLAttributes<HTMLElement> {
  /**
   * Call to action object containing text and URL.
   */
  cta?: ICTA;

  /**
   * Details to be displayed in the aside.
   */
  details: IDetailAsideDetail[];
}
