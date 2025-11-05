import type { IDetailsAside } from "./DetailsAside.types";

const DETAILS_ASIDE_DEFAULT_PROPS: IDetailsAside = {
  cta: {
    children: "View Live Website",
    href: "https://www.example.com",
  },
  details: [
    {
      label: "Services",
      items: ["UI/UX Design", "Drupal", "A/B Testing"],
    },
    {
      label: "Industry",
      items: ["Publishing"],
    },
  ],
};

export const DETAILS_ASIDE_EXAMPLE_PROPS = {
  default: DETAILS_ASIDE_DEFAULT_PROPS,
};
