import type { IFeaturedSplitIconList } from "./FeaturedSplitIconList.types";

const FEATURED_SPLIT_ICON_LIST_DEFAULT_PROPS: IFeaturedSplitIconList = {
  title: "Expert Care That Keeps Your Drupal 7 Site Running Strong",
  items: [
    {
      icon: "AlarmIcon",
      title: "Fast Response Times",
      description:
        "48-hour turnaround on support requests with direct Slack access to our development team.",
    },
    {
      icon: "ExpenseIcon",
      title: "Transparent, Affordable Pricing",
      description:
        "Our pricing respects your budget while delivering premium support that scales with your needs.",
    },
    {
      icon: "CheckBadgeIcon",
      title: "Expert Problem Solvers",
      description:
        "Every developer on our team has over a decade of Drupal experience. We get the job done quickly and efficiently.",
    },
  ],
};

export const FEATURED_SPLIT_ICON_LIST_EXAMPLE_PROPS = {
  default: FEATURED_SPLIT_ICON_LIST_DEFAULT_PROPS,
};
