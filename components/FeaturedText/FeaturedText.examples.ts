import type { IFeaturedText } from "./FeaturedText.types";

const FEATURED_TEXT_DEFAULT_PROPS: IFeaturedText = {
  description:
    "Our senior developers and architects are just a Slack message away. Cut through the bureaucracy. <strong>Stop paying enterprise rates to talk to people who can't even read your code.</strong>",
  eyebrow: "A personal touch",
};

export const FEATURED_TEXT_EXAMPLE_PROPS = {
  default: FEATURED_TEXT_DEFAULT_PROPS,
};
