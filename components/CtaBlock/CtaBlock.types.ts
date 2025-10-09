import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

/**
 * Props for the CtaBlock component.
 */
export interface ICtaBlock extends HTMLAttributes<HTMLElement> {
  /**
   * The call-to-action (CTA) element to be displayed within the component.
   */
  cta?: ICTA;

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;
}
