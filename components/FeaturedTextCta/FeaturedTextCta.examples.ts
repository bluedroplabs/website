import type { IFeaturedTextCta } from "./FeaturedTextCta.types";

const BODY: IFeaturedTextCta = {
  text: "Your Drupal 7 website has become a critical part of your business. Don't leave the continuity of that business up to chance. <strong>Protect its future.</strong>",
  cta: {
    children: "Get Drupal 7 Support Now",
    href: "/contact",
  },
  variant: "body",
};

const HEADING: IFeaturedTextCta = {
  text: "Let us support you in running your CMS website.<br />Ready to get started?",
  cta: {
    children: "Book a Consultation",
    href: "/contact",
  },
  variant: "heading",
};

const NO_CTA: IFeaturedTextCta = {
  text: "Finally, Drupal 7 support that makes sense: <strong>proven experts, fair pricing, and zero migration pressure.</strong>",
};

export const FEATURED_TEXT_CTA_EXAMPLE_PROPS = {
  default: BODY,
  heading: HEADING,
  noCta: NO_CTA,
};
