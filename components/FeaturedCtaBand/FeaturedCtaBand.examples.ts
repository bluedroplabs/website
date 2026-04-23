import type { IFeaturedCtaBand } from "./FeaturedCtaBand.types";

const STACKED: IFeaturedCtaBand = {
  title: "Ready to make your website work for your business?",
  description:
    "Tell us about your project and we'll put together a plan that fits your goals and budget.",
  cta: {
    children: "Book a Consultation",
    href: "/contact",
  },
  variant: "stacked",
};

const INLINE: IFeaturedCtaBand = {
  title: "Let us support your CMS website.",
  description: "Get expert Drupal and WordPress help on your schedule.",
  cta: {
    children: "Get Started",
    href: "/contact",
  },
  variant: "inline",
};

const CENTERED: IFeaturedCtaBand = {
  text: "Everything you need to grow <strong>visibility</strong>, <strong>performance</strong>, and <strong>conversions</strong> under one roof.",
  variant: "centered",
};

export const FEATURED_CTA_BAND_EXAMPLE_PROPS = {
  default: STACKED,
  inline: INLINE,
  centered: CENTERED,
};
