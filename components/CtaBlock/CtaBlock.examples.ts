import type { ICtaBlock } from "./CtaBlock.types";

const CTA_BLOCK_DEFAULT_PROPS: ICtaBlock = {
  cta: {
    children: "Schedule a demo",
    href: "/",
  },
  description:
    "Unlock your true potential. Start by telling us about your project—we’ll get back to you within 24 hours.",
  title: "Let’s create something great together.",
};

export const CTA_BLOCK_EXAMPLE_PROPS = {
  default: CTA_BLOCK_DEFAULT_PROPS,
};
