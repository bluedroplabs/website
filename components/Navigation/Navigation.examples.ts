import type { INavigation } from "./Navigation.types";

const NAVIGATION_DEFAULT_PROPS: INavigation = {
  cta: {
    children: "Get Started",
    href: "/",
  },
  darkLogo: {
    src: "/assets/logo-dark.svg",
    alt: "Company Dark Logo",
    width: 158,
    height: 36,
  },
  links: [
    { href: "/about", children: "Why Blue Drop Labs?" },
    { href: "/platform", children: "Platform" },
    { href: "/services", children: "Services" },
    { href: "/resources", children: "Resources" },
    { href: "/partners", children: "Partners" },
  ],
  logo: {
    src: "/assets/logo.svg",
    alt: "Company Logo",
    width: 158,
    height: 36,
  },
};

export const NAVIGATION_EXAMPLE_PROPS = {
  default: NAVIGATION_DEFAULT_PROPS,
};
