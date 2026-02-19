import type { IHomepageHero } from "./HomepageHero.types";

const HOMEPAGE_HERO_DEFAULT_PROPS: IHomepageHero = {
  cta: {
    children: "Schedule a Demo",
    href: "/contact",
  },
  description:
    "High-performance hosting, expert development, and ongoing support— all under one roof. We eliminate vendor juggling while delivering enterprise results at affordable prices.",
  title: "Your Website Deserves Better",
};

export const HOMEPAGE_HERO_EXAMPLE_PROPS = {
  default: HOMEPAGE_HERO_DEFAULT_PROPS,
};
