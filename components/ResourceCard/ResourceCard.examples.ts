import type { IResourceCard } from "./ResourceCard.types";

const RESOURCE_CARD_DEFAULT_PROPS: IResourceCard = {
  className: "border border-border-normal w-full",
  date: "September 26, 2025",
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  eyebrow: "Blog",
  image: {
    src: "https://picsum.photos/800/600",
    alt: "Resource Card Example Image",
  },
  title: "Sending an Article's Publish Date to Google Analytics",
  variant: "default",
};

export const RESOURCE_CARD_EXAMPLE_PROPS = {
  default: RESOURCE_CARD_DEFAULT_PROPS,
};
