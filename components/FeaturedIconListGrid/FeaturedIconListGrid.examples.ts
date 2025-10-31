import type { IFeaturedIconListGrid } from "./FeaturedIconListGrid.types";

const FEATURED_ICON_LIST_GRID_DEFAULT_PROPS: IFeaturedIconListGrid = {
  eyebrow: "What you get",
  items: [
    {
      icon: "ExpenseIcon",
      title: "Cost Efficiency",
      description:
        "Our clients typically save 30-50% compared to other agencies while receiving better performance and support.",
    },
    {
      icon: "SpeedIcon",
      title: "Performance",
      description:
        "We optimize every aspect of your Drupal or WordPress site to ensure fast load times and a smooth user experience.",
    },
    {
      icon: "ChartIcon",
      title: "Expert Support",
      description:
        "Get direct access to senior developers and architects who understand your code and business needs.",
    },
    {
      icon: "DataIcon",
      title: "Scalability",
      description:
        "Our solutions are designed to grow with your business, ensuring your website can handle increased traffic and functionality.",
    },
    {
      icon: "CheckBadgeIcon",
      title: "Reliability",
      description:
        "We ensure your website is always up-to-date and running smoothly with proactive maintenance and support.",
    },
  ],
  title: "We keep your digital systems stable, scalable, and always improving.",
};

export const FEATURED_ICON_LIST_GRID_EXAMPLE_PROPS = {
  default: FEATURED_ICON_LIST_GRID_DEFAULT_PROPS,
};
