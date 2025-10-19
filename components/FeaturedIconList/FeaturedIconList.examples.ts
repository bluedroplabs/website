import type { IFeaturedIconList } from "./FeaturedIconList.types";

const FEATURED_ICON_LIST_DEFAULT_PROPS: IFeaturedIconList = {
  items: [
    {
      description:
        "Traffic grows, performance suffers, costs skyrocket. Legacy hosts like Pantheon and Acquia charge more as you succeed, while throttling resources when you need them most.",
      icon: "CheckBadgeIcon",
      title: "Affordable Expertise",
    },
    {
      description:
        "Waiting weeks for simple changes. Getting charged premium rates for basic work. Communicating through project managers who don't understand your technical needs.",
      icon: "ShakeHandsIcon",
      title: "Partnership Driven",
    },
    {
      description:
        "Managing separate companies for hosting, development, SEO, and support. Each pointing fingers when something breaks. None taking ownership of your overall success.",
      icon: "StackedIcon",
      title: "Full-Stack Management",
    },
  ],
  title:
    "As your trusted partner, we adapt to your needs and manage your entire digital stack—keeping your systems stable, scalable, and always improving.",
};

export const FEATURED_ICON_LIST_EXAMPLE_PROPS = {
  default: FEATURED_ICON_LIST_DEFAULT_PROPS,
};
