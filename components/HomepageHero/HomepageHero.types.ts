import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

/**
 * Props for the HomepageHero component.
 */
export interface IHomepageHero extends HTMLAttributes<HTMLElement> {
  /**
   * Main heading. Canvas may provide filtered inline HTML.
   */
  title: string;

  /**
   * Call-to-action button properties.
   */
  cta: ICTA;

  /**
   * Short description text displayed within or alongside the component.
   */
  description?: string;
}
