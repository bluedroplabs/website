import type { INavigation } from "./Navigation.types";

const NAVIGATION_DEFAULT_PROPS: INavigation = {
  cta: {
    children: "Get Started",
    href: "/",
  },
  darkLogo: {
    src: "/assets/logo-dark.svg",
    alt: "Company Dark Logo",
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
  },
};

export const NAVIGATION_EXAMPLE_PROPS = {
  default: NAVIGATION_DEFAULT_PROPS,
};
