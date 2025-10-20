import type { IFeaturedTextList } from "./FeaturedTextList.types";

const FEATURED_TEXT_LIST_DEFAULT_PROPS: IFeaturedTextList = {
  items: [
    "<strong>Exorbitant vendor costs</strong> for simple changes or questions.",
    "<strong>Delayed response times</strong> from your current Drupal/WordPress team.",
    "<strong>Resource limits and throttling</strong> from your hosting provider.",
    "<strong>Unpredictable hosting bills</strong> that spike with your success.",
    "<strong>Code quality issues</strong> that don't scale with your business.",
    "<strong>Frustrating support experiences</strong> with ticketing systems and bureaucracy.",
  ],
  title: "Overcome common problems with other agencies",
};

export const FEATURED_TEXT_LIST_EXAMPLE_PROPS = {
  default: FEATURED_TEXT_LIST_DEFAULT_PROPS,
};
