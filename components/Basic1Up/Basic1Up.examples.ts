import type { IBasic1Up } from "./Basic1Up.types";

const BASIC_1_UP_DEFAULT_PROPS: IBasic1Up = {
  alignment: "left",
  blockquote:
    "Most clients save 30-50% compared to Pantheon or Acquia while receiving better performance.",
  description:
    "High-performance hosting for Drupal and WordPress that scales with your success, not against it. Fixed, predictable pricing with direct access to experts. Get the advanced infrastructure you needs at a fraction of the cost.",
  eyebrow: "Our platform",
  image: {
    alt: "Placeholder image",
    src: "https://picsum.photos/562/568",
  },
  primaryCTA: {
    children: "Schedule a demo",
    href: "/contact",
  },
  secondaryCTA: {
    children: "Learn more",
    href: "/",
  },
  title: "Enterprise Performance Without Enterprise Pricing",
};

export const BASIC_1_UP_EXAMPLE_PROPS = {
  default: BASIC_1_UP_DEFAULT_PROPS,
};
