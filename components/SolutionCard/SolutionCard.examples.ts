import type { ISolutionCard } from "./SolutionCard.types";

const SOLUTION_CARD_DEFAULT_PROPS: ISolutionCard = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  eyebrow: "Drupal + WordPress Managed Hosting",
  href: "/",
  image: {
    alt: "Placeholder image",
    src: "https://picsum.photos/400/400",
  },
  title: "Ongoing support and maintenance from experienced developers",
  variant: "basic",
};

const SOLUTION_CARD_FULL_PROPS: ISolutionCard = {
  ...SOLUTION_CARD_DEFAULT_PROPS,
  variant: "full",
};

export const SOLUTION_CARD_EXAMPLE_PROPS = {
  default: SOLUTION_CARD_DEFAULT_PROPS,
  full: SOLUTION_CARD_FULL_PROPS,
};
