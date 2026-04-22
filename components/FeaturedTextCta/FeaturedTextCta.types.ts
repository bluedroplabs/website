import type { ICTA } from "@/types/cta.types";
import type { HTMLAttributes } from "react";

/**
 * Typography variants for the FeaturedTextCta component.
 *
 * - `body` (default) — Geist Light 20–24px paragraph text, good for
 *   statements with inline emphasis (e.g. "…<strong>Protect its future.</strong>").
 * - `heading` — Geist Medium 32–48px heading text for prompts with a `<br />`
 *   line break (e.g. "Let us support you in running your CMS website.<br />
 *   Ready to get started?").
 */
export type TFeaturedTextCtaVariant = "body" | "heading";

/**
 * Props for the FeaturedTextCta component.
 *
 * Renders centered text (supports inline HTML such as `<strong>`, `<br />`)
 * above a CTA button, on a dotted pattern background.
 */
export interface IFeaturedTextCta extends HTMLAttributes<HTMLElement> {
  /**
   * Call-to-action button rendered below the text.
   */
  cta: ICTA;

  /**
   * Body or heading text. Supports inline HTML.
   */
  text: string;

  /**
   * Typography variant. Defaults to `body`.
   */
  variant?: TFeaturedTextCtaVariant;
}
