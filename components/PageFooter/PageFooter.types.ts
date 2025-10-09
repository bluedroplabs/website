import type { HTMLAttributes } from "react";
import type { ICtaBlock } from "../CtaBlock/CtaBlock.types";
import type { IFooter } from "../Footer/Footer.types";

/**
 * Props for the PageFooter component.
 */
export interface IPageFooter extends HTMLAttributes<HTMLElement> {
  /**
   * Call-to-action block displayed within the footer.
   */
  ctaBlockProps: ICtaBlock;

  /**
   * Footer section containing navigation and legal links.
   */
  footerProps: IFooter;
}
