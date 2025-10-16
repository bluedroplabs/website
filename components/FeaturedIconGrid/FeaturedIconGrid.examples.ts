import type { IFeaturedIconGrid } from "./FeaturedIconGrid.types";

const FEATURED_ICON_GRID_DEFAULT_PROPS: IFeaturedIconGrid = {
  description:
    "If you're facing any of these frustrating situations, you're not alone:",
  eyebrow: "Problems we solve",
  items: [
    {
      description:
        "Traffic grows, performance suffers, costs skyrocket. Legacy hosts like Pantheon and Acquia charge more as you succeed, while throttling resources when you need them most.",
      icon: "BillsIcon",
      title: "Hosting bills that punish your success",
    },
    {
      description:
        "Waiting weeks for simple changes. Getting charged premium rates for basic work. Communicating through project managers who don't understand your technical needs.",
      icon: "ClockIcon",
      title: "Development teams that move at a snail's pace",
    },
    {
      description:
        "Managing separate companies for hosting, development, SEO, and support. Each pointing fingers when something breaks. None taking ownership of your overall success.",
      icon: "WarningIcon",
      title: "Vendor coordination nightmares",
    },
    {
      description:
        "Patches on patches. Performance that degrades with every update. Technical debt that makes simple changes impossibly expensive.",
      icon: "BugIcon",
      title: "Code quality issues that compound over time",
    },
  ],
  title: "Stop overpaying for underperforming solutions",
};

export const FEATURED_ICON_GRID_EXAMPLE_PROPS = {
  default: FEATURED_ICON_GRID_DEFAULT_PROPS,
};
