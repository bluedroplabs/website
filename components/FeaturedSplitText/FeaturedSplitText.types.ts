import type { HTMLAttributes } from "react";

/**
 * Props for the FeaturedSplitText component.
 *
 * Renders a two-column band: heading on the left, descriptive paragraph on
 * the right. Intended for the short "Enterprise-Grade Solutions at Startup
 * Speed"-style intros where `InlineTextBlock`'s eyebrow/CTA/blockquote
 * machinery is overkill.
 */
export interface IFeaturedSplitText extends HTMLAttributes<HTMLElement> {
  /**
   * Description text rendered in the right column.
   */
  description: string;

  /**
   * Title rendered in the left column.
   */
  title: string;
}
