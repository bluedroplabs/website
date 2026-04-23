import type { IFeaturedProcessList } from "./FeaturedProcessList.types";

const FEATURED_PROCESS_LIST_DEFAULT_PROPS: IFeaturedProcessList = {
  title: "How We Work",
  description:
    "A straightforward, transparent process designed to keep your project on track from kickoff to launch.",
  items: [
    {
      title: "Discovery",
      description:
        "We start with a kickoff call to understand your goals, current pain points, and success criteria.",
    },
    {
      title: "Audit & Plan",
      description:
        "We review your current setup and deliver a prioritized plan with clear scope, timeline, and cost.",
    },
    {
      title: "Build",
      description:
        "Our senior developers get to work — writing clean, maintainable code and keeping you updated in Slack along the way.",
    },
    {
      title: "Launch & Support",
      description:
        "We ship with confidence and stay on to monitor, iterate, and support your team long after go-live.",
    },
  ],
};

export const FEATURED_PROCESS_LIST_EXAMPLE_PROPS = {
  default: FEATURED_PROCESS_LIST_DEFAULT_PROPS,
};
