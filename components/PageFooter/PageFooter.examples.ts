import { CTA_BLOCK_EXAMPLE_PROPS } from "../CtaBlock/CtaBlock.examples";
import { FOOTER_EXAMPLE_PROPS } from "../Footer/Footer.examples";
import type { IPageFooter } from "./PageFooter.types";

const PAGE_FOOTER_DEFAULT_PROPS: IPageFooter = {
  ctaBlockProps: CTA_BLOCK_EXAMPLE_PROPS.default,
  footerProps: FOOTER_EXAMPLE_PROPS.default,
};

export const PAGE_FOOTER_EXAMPLE_PROPS = {
  default: PAGE_FOOTER_DEFAULT_PROPS,
};
