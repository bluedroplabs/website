import { FEATURED_ICON_GRID_EXAMPLE_PROPS } from "../FeaturedIconGrid/FeaturedIconGrid.examples";
import { FEATURED_SOLUTIONS_GRID_EXAMPLE_PROPS } from "../FeaturedSolutionsGrid/FeaturedSolutionsGrid.examples";
import { HOMEPAGE_HERO_EXAMPLE_PROPS } from "../HomepageHero/HomepageHero.examples";
import { LOGO_MARQUEE_EXAMPLE_PROPS } from "../LogoMarquee/LogoMarquee.examples";
import { BASIC_1_UP_EXAMPLE_PROPS } from "./../Basic1Up/Basic1Up.examples";
import type { IDynamicComponents } from "./DynamicComponents.types";

const DYNAMIC_COMPONENTS_DEFAULT_PROPS: IDynamicComponents = {
  components: [
    {
      type: "HomepageHero",
      ...HOMEPAGE_HERO_EXAMPLE_PROPS.default,
    },
    {
      type: "LogoMarquee",
      ...LOGO_MARQUEE_EXAMPLE_PROPS.default,
    },
    {
      type: "FeaturedIconGrid",
      ...FEATURED_ICON_GRID_EXAMPLE_PROPS.default,
    },
    {
      type: "Basic1Up",
      ...BASIC_1_UP_EXAMPLE_PROPS.default,
    },
    {
      type: "FeaturedSolutionsGrid",
      ...FEATURED_SOLUTIONS_GRID_EXAMPLE_PROPS.default,
    },
  ],
};

export const DYNAMIC_COMPONENTS_EXAMPLE_PROPS = {
  default: DYNAMIC_COMPONENTS_DEFAULT_PROPS,
};
