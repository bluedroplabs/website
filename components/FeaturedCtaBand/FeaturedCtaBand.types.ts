import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

/**
 * Layout variants for the FeaturedCtaBand component.
 *
 * - `stacked` (default): text block with title + description on the left,
 *   outline CTA button on the right. Sky-blue tinted dotted background.
 * - `inline`: three equal columns — title | description | dark CTA button.
 *   Light gradient background.
 * - `centered`: a single centered body paragraph (no title, no CTA). Use the
 *   `text` field (supports inline HTML so `<strong>` keywords highlight
 *   within the paragraph). Sky-blue tinted dotted background.
 */
export type TFeaturedCtaBandVariant = "stacked" | "inline" | "centered";

/**
 * Props for the FeaturedCtaBand component.
 */
export interface IFeaturedCtaBand extends HTMLAttributes<HTMLElement> {
  /**
   * Call-to-action button. Required for `stacked` and `inline` variants;
   * ignored for `centered`.
   */
  cta?: ICTA;

  /**
   * Supporting paragraph. Used by `stacked` and `inline` variants.
   */
  description?: string;

  /**
   * Body paragraph rendered by the `centered` variant. Supports inline HTML
   * (e.g. `<strong>` for emphasized keywords).
   */
  text?: string;

  /**
   * Main heading. Used by `stacked` and `inline` variants.
   */
  title?: string;

  /**
   * Layout variant. Defaults to `stacked`.
   */
  variant?: TFeaturedCtaBandVariant;
}
